<!-- src/lib/components/HomeAbout.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import Image3 from '$lib/assets/bg-2.jpeg';
  
  let isVisible = false;
  let container: HTMLElement;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible = true;
        }
      },
      { threshold: 0.2 }
    );
    
    if (container) {
      observer.observe(container);
    }
    
    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  });
</script>

<section 
bind:this={container}
class="relative min-h-screen bg-[#1B1E25] overflow-hidden flex items-center"
>
<div class="container mx-auto px-6 md:px-6 py-12 lg:py-24">
  <div class="grid lg:grid-cols-2 gap-12 items-center">
    <!-- Left Content -->
    <div class="space-y-8">
      {#if isVisible}
        <div 
          class="space-y-6"
          in:fly={{ y: 50, duration: 800, delay: 200 }}
        >
          <h2 class="text-xs flex items-center md:text-xs text-white/80 tracking-wider mb-4 font-extralight">
            <div class="w-6 h-[2px] bg-green-600 mr-3"></div>
            EMPOWERING AFRICA
          </h2>
          
          <h2 class="text-3xl lg:text-5xl font-medium text-white leading-tight">
            TRANSFORMING THE<br />
            ENERGY LANDSCAPE
          </h2>
          
          <p class="text-gray-300 text-md lg:text-xl max-w-xl leading-relaxed font-light">
            As a regional renewable energy company, we partner with utility-scale 
            energy developers and independent power producers to deliver clean, 
            sustainable electricity across East, Central, and Southern Africa.
          </p>

          <!-- <div class="grid grid-cols-2 gap-8 pt-6">
            <div>
              <h3 class="text-white text-xl font-semibold mb-2">Our Mission</h3>
              <p class="text-gray-400 text-sm">
                To empower communities through sustainable infrastructure and innovative 
                solutions that improve lives and drive economic growth.
              </p>
            </div>
            <div>
              <h3 class="text-white text-xl font-semibold mb-2">Our Vision</h3>
              <p class="text-gray-400 text-sm">
                To be a leading force in transforming Africa's energy landscape by 
                delivering reliable, renewable power.
              </p>
            </div>
          </div> -->
          
          <div class="pt-4">
            <a 
              href="/about"
              class="inline-flex items-center border border-green-600 text-white px-6 py-3 hover:bg-green-600 transition-all duration-300 group"
            >
              <span class="mr-2 text-md">LEARN MORE</span>
            </a>
          </div>
        </div>
      {/if}
    </div>
    
    <!-- Right Image -->
    {#if isVisible}
      <div 
        class="relative"
        in:fly={{ x: 100, duration: 1000, delay: 400 }}
      >
        <!-- Decorative diagonal lines -->
        <div class="absolute inset-0 -skew-x-3 bg-gradient-to-br from-green-600/10 to-transparent -z-10"></div>
        
        <!-- Image container with overlay -->
        <div class="relative overflow-hidden rounded-lg">
          <img 
            src={Image3} 
            alt="Renewable energy installation"
            class="w-full h-[300px] lg:h-[600px] object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>
        
        <!-- Decorative element -->
        <div class="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-green-600 -z-10"></div>
      </div>
    {/if}
  </div>
</div>
</section>

<style>
img {
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>