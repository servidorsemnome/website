<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { RegistrationForm } from '$lib/components/forms';
  import { Alert } from '$lib/components/alert';
  import {
    getRegistrationFlow,
    submitRegistrationFlow,
  } from '$lib/modules/ory';
  import type { ErrorMessage } from './registration.types';

  let traits = {
    email: '',
    nicknames: [],
    primaryNickname: '',
  };
  let password = '';
  let flow: any;
  let alert: ErrorMessage | null;
  let isLoading = false;

  let flowId = $page.url.searchParams.get('flow') || '';
  let returnTo = $page.url.searchParams.get('return_to') || '/painel';

  onMount(async () => {
    flow = await getRegistrationFlow(flowId);
    // TODO: if (!flow) goto(get new flow id page);
  });

  const handleSubmit = async () => {
    if (
      !traits.email.length ||
      traits.primaryNickname.length < 3 ||
      !password.length
    )
      return;
    isLoading = true;
    alert = null;
    const data = await submitRegistrationFlow(flow, returnTo, {
      traits,
      password,
    });
    if (data?.session?.active) return goto(returnTo);

    if (!data)
      alert = {
        text: 'Deu erro porém eu ainda não trato erros, boa sorte.',
        type: 'error',
      };

    const errorMessage = data?.ui?.messages?.[0];
    if (errorMessage)
      alert = {
        text: errorMessage?.text,
        type: errorMessage?.type,
      };

    if (data?.error)
      alert = {
        text: data?.error?.message,
        type: 'error',
      };

    isLoading = false;
  };
</script>

<RegistrationForm
  on:submit={handleSubmit}
  bind:traits
  bind:password
  {isLoading}
/>

{#if alert != null}
  <Alert type={alert.type}>
    {alert.text}
  </Alert>
{/if}
