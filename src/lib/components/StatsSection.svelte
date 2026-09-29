<script lang="ts">
  import { onMount } from 'svelte';
  import { tweened, type Tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  interface Pillar {
    value: number;
    suffix: string;
    title: string;
    description: string;
 
  }

  const pillars: Pillar[] = [
    {
      value: 50,
      suffix: '%',
      title: 'Sustainable Energy',
      description: 'We are committed to renewable energy adoption, energy efficiency and carbon neutrality by 2030.',
  
    },
    {
      value: 1,
      suffix: 'million+',
      title: 'Green Economy',
      description: 'We are focused on creation of green jobs through investments in clean tech and sustainable industries.',
    
    },
    {
      value: 10,
      suffix: 'million+',
      title: 'Social Equity',
      description: 'We aim to provide easy access to Universal clean energy access for 10 million+ underserved households.',
      
    },
    {
      value: 100,
      suffix: '%',
      title: 'Ethical Governance',
      description: 'Our focus is establishing Public-private partnerships to drive SDG-aligned impact projects whilst maintaining zero corruption policy and full ESG transparency.',
      
    }
  ];

  let isVisible = false;
  let container: HTMLElement;

  // Create individual tweened stores for each pillar
  const counter1: Tweened<number> = tweened(0, { duration: 2500, easing: cubicOut });
  const counter2: Tweened<number> = tweened(0, { duration: 2500, easing: cubicOut });
  const counter3: Tweened<number> = tweened(0, { duration: 2500, easing: cubicOut });
  const counter4: Tweened<number> = tweened(0, { duration: 2500, easing: cubicOut });
  
  const counterStores = [counter1, counter2, counter3, counter4];

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          isVisible = true;
          pillars.forEach((pillar, index) => {
            counterStores[index].set(pillar.value);
          });
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
class="relative bg-gray-300 py-12 lg:py-40"
>
<div class="container mx-auto px-8 md:px-6">
  <!-- Section Header -->
  <div class="text-left mb-4 lg:mb-16">
    <h2 class="text-xs flex items-center lg:text-xs text-gray-800 tracking-wider mb-4 font-extralight">
      <div class="w-8 h-[2px] bg-green-600 mr-3"></div>
      SUSTAINABLE DEVELOPMENT GOALS
    </h2>
    <h3 class="text-3xl  md:text-5xl font-medium text-gray-900 mb-6">
      Our Commitment to UN SDGs
    </h3>
    <p class="text-gray-700 text-md lg:text-xl">
      We align our projects with the United Nations Sustainable Development Goals to create <br> lasting positive impact across Africa.
    </p>
  </div>

  <!-- Pillars Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 md:mb-12">
    {#each pillars as pillar, i}
      <div class=" lg:p-8  p-4 rounded-lg transform hover:-translate-y-1 transition-transform duration-300 border border-dashed border-gray-700 bg-gray-200">
    
        <div class="mb-4">
          <span class="text-4xl md:text-5xl font-thin text-gray-900 inline-flex items-baseline">
            {#if isVisible}
              {#if i === 0}
                {Math.round($counter1)}
              {:else if i === 1}
                {$counter2.toFixed(1)}
              {:else if i === 2}
                {$counter3.toFixed(1)}
              {:else if i === 3}
                {Math.round($counter4)}
              {/if}
            {:else}
              0
            {/if}
            <span class="text-green-600 text-2xl ml-1">{pillar.suffix}</span>
          </span>
        </div>
        
        <h3 class="text-md lg:text-xl font-semibold text-gray-900 mb-3">
          {pillar.title}
        </h3>
        
        <p class="text-gray-600 text-sm lg:text-md leading-relaxed">
          {pillar.description}
        </p>
      </div>
    {/each}
  </div>

  <!-- CTA Section -->
  <div class="text-left mt-4">
    <a 
      href="https://sdgs.un.org/goals" 
      target="_blank" 
      rel="noopener noreferrer"
      class="inline-flex items-center border border-green-600 text-green-600 px-4 py-4 rounded-sm hover:bg-green-700 hover:text-gray-200 transition-colors duration-300 group"
    >
      <span class=" text-md ">Learn More About UN SDGs</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  </div>
</div>
</section>