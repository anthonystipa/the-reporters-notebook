import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

const HOME_ROUTE = '/';

export const actions: Actions = {
	default: async ({ request, locals, url }) => {
		const formData = await request.formData();
		const email = String(formData.get('email') ?? '').trim();
		const password = String(formData.get('password') ?? '').trim();

		if (!email || !password) {
			return fail(400, {
				email,
				message: 'Please enter both your email and password.'
			});
		}

		const { error } = await locals.supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			return fail(400, {
				email,
				message: error.message
			});
		}

		const redirectTo = url.searchParams.get('redirectTo');
		const nextPath = redirectTo?.startsWith('/') ? redirectTo : HOME_ROUTE;

		throw redirect(303, nextPath);
	}
};
