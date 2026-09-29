<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
  const services = [
    {
      title: "Strategic Partnerships",
      description: "We collaborate with independent power producers, investors, and key stakeholders to structure and secure funding for renewable energy initiatives, maximizing project success.",
      icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>`
    },
    {
      title: "Engineering, Procurement, and Construction (EPC)",
      description: "We develop and manage utility-scale renewable energy projects from feasibility to implementation, delivering sustainable power to underserved markets. We engage top-tier EPC and O&M contractors for high-quality execution and maintenance.",
      icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>`
    },
    {
      title: "Community Engagement & Impact-Driven Solutions",
      description: "We focus on renewable energy projects, leveraging public and private sector funding sources to drive sustainable energy expansion that create social and economic benefits to the community, aligning projects with the United Nations Sustainable Development Goals (SDGs).",
      icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>`
    }
  ];

  let isVisible = false;
  let container: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible = true;
        }
      },
      { threshold: 0.1 }
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
  class="bg-[#1B1E25] py-12 lg:py-24"
>
  <div class="container mx-auto px-9 md:px-6">
      <!-- Section Header -->
      <div class="text-left mb-10 lg:mb-16">
          <h2 class=" flex items-center  text-xs text-white/80 tracking-wider mb-4">
              <div class="w-8 h-[2px] text-xs bg-green-600 mr-3"></div>
              OUR SERVICES
          </h2>
          <h3 class="text-3xl md:text-4xl font-medium text-white mb-2 lg:mb-6">
              What We Do
          </h3>
      </div>

      <!-- Services Grid -->
      {#if isVisible}
          <div 
              class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              in:fly={{ y: 50, duration: 800, delay: 200 }}
          >
              {#each services as service}
                  <div class="bg-[#252932] p-8 rounded-lg group hover:bg-[#2C3038] transition-colors duration-300 border border-dashed border-gray-500">
                      <!-- Icon -->
                      <div class="w-12 h-12 rounded-lg bg-green-600/10 flex items-center justify-center mb-6 text-green-500">
                          {@html service.icon}
                      </div>

                      <!-- Title -->
                      <h4 class="text-2xl font-medium text-white mb-4">
                          {service.title}
                      </h4>

                      <!-- Description -->
                      <p class="text-gray-300 text-md leading-relaxed font-light">
                          {service.description}
                      </p>
                  </div>
              {/each}
          </div>
      {/if}
  </div>
</section>