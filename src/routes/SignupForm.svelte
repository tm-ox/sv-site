<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms/client';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as Card from '$lib/components/ui/card/index.js';
	import { toast } from 'svelte-sonner';

	type Inputs = {
		label: string;
		name: string;
		type: string;
		placeholder: string;
	};

	let {
		title,
		desc,
		inputs,
		buttonLabel,
		disclaimer,
		form
	}: {
		title: string;
		desc: string;
		inputs: Inputs[];
		buttonLabel: string;
		disclaimer: string;
		form: SuperValidated<Infer<FormSchema>>;
	} = $props();

	const formInstance = superForm(form, {
		validators: zodClient(formSchema),
		resetForm: false,
		onUpdated: ({ form: { message } }) => {
			switch (message?.type) {
				case 'success':
					toast.success(message?.text);
					formInstance.reset();
					break;
				case 'error':
					toast.error(message?.text);
					break;
			}
		}
	});

	const { form: formData, enhance, constraints } = formInstance;
</script>

<Card.Root class="w-full max-w-3xl p-8">
	<Card.Header>
		<Card.Title>{desc}</Card.Title>
		<!-- <Card.Description>{desc}</Card.Description> -->
	</Card.Header>
	<form method="POST" use:enhance class="flex flex-col gap-4">
		<Form.Field form={formInstance} name="email">
			<Form.Control>
				{#snippet children({ props })}
					{#each inputs as input (input)}
						<!-- <Form.Label>{input.label}</Form.Label> -->
						<Input
							type={input.type}
							{...props}
							{...$constraints.email}
							bind:value={$formData.email}
							placeholder={input.placeholder}
						/>
					{/each}
				{/snippet}
			</Form.Control>
			<!-- <Form.Description>This is your public display name.</Form.Description> -->
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button class="w-full">{buttonLabel}</Form.Button>
	</form>
</Card.Root>
<p>{disclaimer}</p>
