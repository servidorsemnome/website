<script lang="ts">
  import { FormSeparator, Form } from '.';
  import { Button } from '$lib/components/button';
  import { Input } from '$lib/components/input';
  import { DiscordIcon } from '$lib/components/icons';

  export let traits = {
      email: '',
      nicknames: [],
      primaryNickname: '',
    },
    password = '',
    isLoading = false;
</script>

<Form on:submit {isLoading}>
  <Button type="button" rgb={[88, 101, 242]}>
    <DiscordIcon color="#5865F2" />
    Registrar com Discord
  </Button>
  <FormSeparator />
  <Input
    bind:value={traits.email}
    name="identifier-ssn"
    type="email"
    label="E-mail"
  />
  <Input bind:value={traits.primaryNickname} name="name-ssn" label="Nickname" />
  <Input bind:value={password} name="password" type="password" label="Senha" />
  <Button type="submit" primary>Registrar</Button>
</Form>
