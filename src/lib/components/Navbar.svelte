<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, fade, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  
  let isMenuOpen = false;
  let isScrolled = false;
  
  // Close mobile menu when resizing to desktop
  let windowWidth: number;
  $: if (windowWidth >= 768) isMenuOpen = false;
  
  // Prevent body scroll when menu is open
  $: if (typeof document !== 'undefined') {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  onMount(() => {
    windowWidth = window.innerWidth;
    
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    
    const handleResize = () => {
      windowWidth = window.innerWidth;
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = ''; // Reset overflow on component destroy
    };
  });
  
  // Updated menu items with display text and URL slugs
  const menuItems = [
    { text: 'About Us', slug: 'about' },
    { text: 'Our Projects', slug: 'projects' },
    { text: 'Contact Us', slug: 'contact' }
  ];
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
  <div class="container mx-auto px-4 md:px-16">
    <div class="flex items-center justify-between h-16 lg:h-24">
      <!-- Logo with animation -->
      <a 
        href="/" 
        class="flex-shrink-0 flex items-center gap-2"
        in:fade={{ duration: 300, delay: 150 }}
      >
        <img src="/logo.png" alt="Dynamic Triune" class="h-10 lg:h-16 w-auto transition-transform duration-300 hover:scale-105" />
        <span class={`text-md lg:text-xl font-medium transition-colors duration-300
          ${isScrolled 
            ? 'text-gray-800 hover:text-gray-600' 
            : 'text-white hover:text-white/80'
          }`}>
          DYNAMIC TRIUNE
        </span>
      </a>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        {#each menuItems as item, i}
          <a
            href={`/${item.slug}`}
            class={`text-lg font-medium transition-all duration-300 hover:scale-105 relative group
              ${isScrolled 
                ? 'text-gray-800 hover:text-gray-600' 
                : 'text-white hover:text-white/80'
              }`}
            in:fly={{ y: -20, duration: 300, delay: 150 + i * 100 }}
          >
            {item.text}
            <span class={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full
              ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}>
            </span>
          </a>
        {/each}
      </div>
      
      
      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 rounded-md transition-colors z-50"
        aria-label="Toggle menu"
        on:click={toggleMenu}
        class:rotate-180={isMenuOpen}
        style="transition: transform 0.3s ease"
      >
        <svg
          class={`h-6 w-6 transition-colors duration-300 ${isScrolled && !isMenuOpen ? 'text-gray-800' : 'text-white'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
    </div>
  </div>
  

</nav>
{#if isMenuOpen}
<button 
  class="f inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
  on:click={toggleMenu}
  on:keydown={(e) => e.key === 'Enter' && toggleMenu()}
  aria-label="Close menu"
  transition:fade={{ duration: 200 }}
></button>

<div
  class="fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-xl md:hidden z-40 overflow-hidden"
  transition:fly={{ x: 300, duration: 300, easing: quintOut }}
>
  <div class="flex flex-col h-full max-h-screen">
    <!-- <div class="p-6 border-b border-gray-800">
      <span class="text-xl font-bold text-white">Menu</span>
    </div> -->
    
    <div class="py-16 px-6 flex-1 overflow-y-auto scrollbar-hide">
      <div class="space-y-6">
        {#each menuItems as item, i}
          <a
            href={`/${item.slug}`}
            class="block text-white hover:text-white/80 transition-all duration-300 hover:translate-x-2 text-md"
            in:fly={{ x: 50, duration: 200, delay: i * 100 }}
            on:click={toggleMenu}
          >
            {item.text}
          </a>
        {/each}
      </div>
    </div>
    
    <div class="p-6 border-t border-gray-800 mt-auto">
      <span class="text-sm text-gray-400">© 2025 Dynamic Triune</span>
    </div>
  </div>
</div>
{/if}
<style>
  /* Hide scrollbar but allow scrolling */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;             /* Chrome, Safari and Opera */
  }
</style>