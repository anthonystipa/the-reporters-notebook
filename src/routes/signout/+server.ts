import { redirect, type RequestHandler } from '@sveltejs/kit';

const SIGNIN_ROUTE = '/signin';

const signOutAndRedirect: RequestHandler = async ({ locals: { supabase } }) => {
	await supabase.auth.signOut();
	throw redirect(303, SIGNIN_ROUTE);
};

export const GET: RequestHandler = signOutAndRedirect;
export const POST: RequestHandler = signOutAndRedirect;
