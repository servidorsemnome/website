/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
  interface Locals {
    identity: any;
  }
  // interface Platform {}
  interface Session {
    identity: any;
  }
  // interface Stuff {}
}
