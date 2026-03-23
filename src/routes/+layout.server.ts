import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

const SIGNIN_ROUTE = '/signin';
const RESTRICTED_PATHS = new Set(['/', '/jobs', '/layoffs', '/social']);

export const load: LayoutServerLoad = async ({ locals: { safeGetSession }, cookies, url }) => {
	const pathname = url.pathname;
	const { session, user } = await safeGetSession();

	if (RESTRICTED_PATHS.has(pathname) && !user) {
		throw redirect(303, SIGNIN_ROUTE);
	}

	return {
		session,
		user,
		cookies: cookies.getAll()
	};
};
