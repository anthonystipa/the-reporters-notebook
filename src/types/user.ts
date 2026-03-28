export type UserProfile = {
	id: string;
	email: string;
	firstName?: string;
	lastName?: string;
	paid?: boolean;
	role?: 'user' | 'admin';
};
