<script>
	import '../app.postcss';
	import Header from './_components/Header.svelte';
	import { background } from './_stores/UiConfigStores.js';
</script>

<div class='{$background} transition-colors duration-300 font-body text-white min-h-full'>
	<Header />

	<slot />
</div>
