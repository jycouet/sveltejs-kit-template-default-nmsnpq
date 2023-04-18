import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { kitql } from '@kitql/all-in';

export default defineConfig({
	plugins: [kitql({ projectName: 'default' }), sveltekit()]
});
