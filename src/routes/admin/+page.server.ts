import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { session, user } = await locals.safeGetSession();

	if (!session) {
		throw redirect(303, '/signin');
	}

	if (user?.app_metadata?.role !== 'admin') {
		throw redirect(303, '/');
	}

	return {
		adminEmail: user.email
	};
};
