<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { LoginForm } from '$lib/components/forms';
  import { Alert } from '$lib/components/alert';
  import { getLoginFlow, submitLoginFlow } from '$lib/modules/ory';
  import type { ErrorMessage } from './login.types';

  let identifier = '';
  let password = '';
  let flow: any;
  let alert: ErrorMessage | null;
  let isLoading = false;

  let flowId = $page.url.searchParams.get('flow') || '';
  let returnTo = $page.url.searchParams.get('return_to') || '/painel';

  onMount(async () => {
    flow = await getLoginFlow(flowId);
    // TODO: if (!flow) goto(get new flow id page);
  });

  const handleSubmit = async () => {
    if (!identifier.length || !password.length) return;
    isLoading = true;
    alert = null;
    const data = await submitLoginFlow(flow, returnTo, {
      identifier,
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

<LoginForm on:submit={handleSubmit} bind:identifier bind:password {isLoading} />

{#if alert != null}
  <Alert type={alert.type}>
    {alert.text}
  </Alert>
{/if}
