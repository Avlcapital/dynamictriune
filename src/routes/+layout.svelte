<script lang="ts">
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-[#151820]">
<Navbar />

	<main class="flex-1" in:fade={{ duration: 300, delay: 150 }}>
		{@render children()}
	</main>
	
	<Footer />
</div>
