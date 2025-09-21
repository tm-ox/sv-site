import { error } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './schema';

export const load: PageServerLoad = async () => {
    const form = await superValidate(zod(formSchema));
    return {
        form
    };
};

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');

        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (typeof email === 'string' && email.includes('error')) {
            error(400, 'Bad Request');
        }
        console.log('TODO: Create user contact', email);
    }
};
