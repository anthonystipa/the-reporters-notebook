import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	const { session } = await locals.safeGetSession();

	// If user is authenticated after email confirmation, redirect to home
	if (session) {
		throw redirect(303, '/');
	}

	// If not authenticated yet, stay on welcome page
	return { email: url.searchParams.get('email') };
};
