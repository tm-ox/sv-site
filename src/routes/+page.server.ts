import { error } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({request}) => {
    const data = await request.formData()
    const name = data.get('name')
    const email = data.get('email')

    await new Promise((resolve) => setTimeout(resolve, 2000))
    if (typeof email === 'string' && email.includes('error')) {
      error(400, 'Bad Request')
    }
    console.log('TODO: Create user contact', name, email)
  }
}
