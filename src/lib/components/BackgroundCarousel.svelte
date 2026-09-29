<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    
    export let images: Array<{ src: string; alt: string; title: string }>;
    export let currentSlide = 0;
    
    const dispatch = createEventDispatcher();
    let interval: ReturnType<typeof setInterval>;
    
    onMount(() => {
      startAutoPlay();
      return () => clearInterval(interval);
    });
    
    function startAutoPlay() {
      interval = setInterval(() => {
        currentSlide = (currentSlide + 1) % images.length;
        dispatch('slideChange', currentSlide);
      }, 5000);
    }
  </script>
  
  <div class="absolute inset-0">
    {#each images as { src, alt }, i}
      {#if i === currentSlide}
        <div
          class="absolute inset-0"
          transition:fade={{ duration: 800 }}
        >
          <img
            {src}
            {alt}
            class="w-full h-full object-cover"
          />
        </div>
      {/if}
    {/each}
  </div>