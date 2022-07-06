import { writable } from 'svelte/store';
import type { KratosIdentity } from './kratos.types';

export const IDENTITY = writable<KratosIdentity>();
