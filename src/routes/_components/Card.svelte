<script>
	export let title = '';
</script>

<div class='bg-white rounded p-4 min-w-30'>
	{#if (!!title)}
		<h1 class='p-3 text-gray-500'>
			{title}
		</h1>
		<hr class='mb-5 mt-2'>
	{/if}
	<slot name='content' />
</div>
