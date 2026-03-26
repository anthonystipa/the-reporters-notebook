import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public';
import { createServerClient } from '@supabase/ssr';
import { redirect, type Handle } from '@sveltejs/kit';

const ROOT_ROUTE = '/';
const JOBS_ROUTE = '/jobs';
const SOCIAL_ROUTE = '/social';
const LAYOFFS_ROUTE = '/layoffs';
const ADMIN_ROUTE = '/admin';
const SIGNIN_ROUTE = '/signin';

// These are routes always restricted
const RESTRICTED_PAGES: Record<string, string> = {
	[ROOT_ROUTE]: SIGNIN_ROUTE,
	[JOBS_ROUTE]: SIGNIN_ROUTE,
	[LAYOFFS_ROUTE]: SIGNIN_ROUTE,
	[SOCIAL_ROUTE]: SIGNIN_ROUTE
};

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
		cookies: {
			getAll() {
				return event.cookies.getAll();
			},
			setAll(cookiesToSet) {
				/**
				 * Note: You have to add the `path` variable to the
				 * set and remove method due to sveltekit's cookie API
				 * requiring this to be set, setting the path to an empty string
				 * will replicate previous/standard behavior (https://kit.svelte.dev/docs/types#public-types-cookies)
				 */
				cookiesToSet.forEach(({ name, value, options }) =>
					event.cookies.set(name, value, { ...options, path: '/' })
				);
			}
		}
	});
	/**
	 * Unlike `supabase.auth.getSession()`, which returns the session _without_
	 * validating the JWT, this function also calls `getUser()` to validate the
	 * JWT before returning the session.
	 */
	event.locals.safeGetSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		if (!session) {
			return { session: null, user: null };
		}
		const {
			data: { user },
			error
		} = await event.locals.supabase.auth.getUser();
		if (error) {
			// JWT validation has failed
			return { session: null, user: null };
		}
		return { session, user };
	};

	const restrictedRoute = RESTRICTED_PAGES[event.url.pathname];
	if (restrictedRoute) {
		console.log('Found restricted route', event.url.pathname);
		const session = await event.locals.safeGetSession();
		if (!session?.session) {
			console.log('No session found.  Redirecting to: ', restrictedRoute);
			throw redirect(303, restrictedRoute);
		}
	}

	if (event.url.pathname === ADMIN_ROUTE || event.url.pathname.startsWith(`${ADMIN_ROUTE}/`)) {
		const session = await event.locals.safeGetSession();
		if (!session?.session) {
			throw redirect(303, SIGNIN_ROUTE);
		}

		const role = session.user?.app_metadata?.role;
		if (role !== 'admin') {
			throw redirect(303, ROOT_ROUTE);
		}
	}

	if (event.url.pathname === SIGNIN_ROUTE) {
		const session = await event.locals.safeGetSession();
		if (session?.session) {
			console.log('User is already logged in.  Redirecting to root.');
			throw redirect(302, ROOT_ROUTE);
		}
	}

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range' || name === 'x-supabase-api-version';
		}
	});
};
