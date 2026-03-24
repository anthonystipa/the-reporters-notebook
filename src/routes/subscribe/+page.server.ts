import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

const SIGNIN_ROUTE = '/signin';

export const actions: Actions = {
	default: async ({ request, locals, url }) => {
		const formData = await request.formData();
		const email = String(formData.get('email') ?? '').trim();
		const firstName = String(formData.get('firstName') ?? '').trim();
		const lastName = String(formData.get('lastName') ?? '').trim();
		const password = String(formData.get('password') ?? '').trim();

		if (!email || !firstName || !lastName) {
			return fail(400, {
				email,
				message: 'Please enter your email address, first name and last name.'
			});
		}

		const { error } = await locals.supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					first_name: firstName,
					last_name: lastName
				},
				emailRedirectTo: 'http://localhost:5173'
			}
		});

		if (error) {
			return fail(400, {
				email,
				message: error.message
			});
		}

		const redirectTo = url.searchParams.get('redirectTo');
		const nextPath = redirectTo?.startsWith('/') ? redirectTo : SIGNIN_ROUTE;

		throw redirect(303, nextPath);
	}
};
