<script>
	import { page } from '$app/stores';


	export let logo_src = {
		url: '/static/img/logos/site_logo.png',
		alt: 'KN2C\'s Logo'
	};

	export let links = [
		{
			title: 'ABOUT US',
			url: '/about-us'
		},
		{
			title: 'TEAMS',
			url: '/teams'
		},
		{
			title: 'MEMBERS',
			url: '/members'
		},
		{
			title: 'PROJECTS',
			url: '/projects'
		},
		{
			title: 'AWARDS',
			url: '/awards'
		},
		{
			title: 'NEWS',
			url: '/news'
		},
		{
			title: 'CONTACT',
			url: '/contact'
		}
	];

</script>

<header class='py-12 flex flex-row items-center container justify-between mx-auto'>

	<div class='w-52'>
		<img src={logo_src.url} alt={logo_src.alt}>
	</div>

	<ul class='flex flex-row items-center space-x-4'>
		{#each links as link}
			<li class='text-white py-1 px-4 transition-colors duration-500' class:bg-black={$page.path.startsWith(link.url)}>
				<a href={link.url}>
					{link.title}
				</a>
			</li>
		{/each}
	</ul>
</header>
