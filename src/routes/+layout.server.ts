import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import type { UserProfile } from '$types/user';

const SIGNIN_ROUTE = '/signin';
const RESTRICTED_PATHS = new Set(['/', '/jobs', '/layoffs', '/social']);
const UNLOCK_ROUTE = '/unlock';

export const load: LayoutServerLoad = async ({ locals: { safeGetSession }, cookies, url }) => {
	const pathname = url.pathname;
	const { session, user } = await safeGetSession();

	if (RESTRICTED_PATHS.has(pathname) && !user) {
		throw redirect(303, SIGNIN_ROUTE);
	}

	// Redirect paid users who don't have access to restricted paths
	if (RESTRICTED_PATHS.has(pathname) && user && !user?.app_metadata?.paid) {
		throw redirect(303, UNLOCK_ROUTE);
	}

	let userProfile: UserProfile | undefined;
	if (user) {
		userProfile = {
			id: user?.id,
			email: user?.email,
			paid: user?.app_metadata?.paid,
			role: user?.app_metadata?.role
		};
	}

	return {
		session,
		user: userProfile,
		cookies: cookies.getAll()
	};
};
