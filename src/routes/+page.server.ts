import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './schema';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (request) => {
		const form = await superValidate(request, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		await new Promise((resolve) => setTimeout(resolve, 1000));
		const { email } = form.data;
		if (typeof email === 'string' && email.includes('error')) {
			return fail(500, { form });
		}

		console.log('TODO: Create user contact', email);

    return message(form, { type: 'success', text: 'Thanks! You are signed up.' })
	}
};
