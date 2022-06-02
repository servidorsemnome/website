<script lang="ts">
  import { FormSeparator, Form } from '.';
  import { Button } from '$lib/components/button';
  import { Input } from '$lib/components/input';
  import { DiscordIcon } from '$lib/components/icons';

  export let identifier = '',
    password = '',
    isLoading = false;
</script>

<Form on:submit {isLoading}>
  <Button type="button" rgb={[88, 101, 242]}>
    <DiscordIcon color="#5865F2" />
    Fazer login com Discord
  </Button>
  <FormSeparator />
  <Input
    bind:value={identifier}
    name="identifier-ssn"
    label="E-mail ou nome de usuário"
  />
  <Input bind:value={password} name="password" type="password" label="Senha" />
  <Button type="submit" primary>Login</Button>
</Form>
