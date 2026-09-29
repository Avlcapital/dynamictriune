<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import SolarImage from '$lib/assets/solar.jpg'; // Update with appropriate solar project image
  
  const projects = [
    {
      title: "Chegutu 200MW Solar PV Project",
      image: SolarImage,
      category: "Renewable Energy",
      location: "Zimbabwe",
      impact: {
        capacity: "200 MW",
        phase1: "54 MW",
        land: "280 hectares",
        transmission: "14.6km 88kV line"
      },
      highlights: [
        "Largest solar park development in Zimbabwe",
        "Two-phase implementation with Phase 1 (54MW) by 2025",
        "Partnership with Mamina Wind Power PVT Ltd",
        "Addressing 800MW+ energy deficit",
        "Strategic SAPP market investment"
      ]
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

<section class="bg-gray-200 py-12 lg:py-20" bind:this={container}>
  <div class="container mx-auto px-8 md:px-6 max-w-screen-2xl">
      <div class="text-left mb-12">
          <h2 class="text-xl flex items-center md:text-2xl font-thin text-gray-800 tracking-wider mb-4">
              <div class="w-8 h-[2px] bg-green-600 mr-3"></div>
              Featured Project
          </h2>
      </div>

      {#each projects as project}
          <div class=" rounded-lg overflow-hidden">
              <div class="grid lg:grid-cols-2 gap-4">
                  <!-- Image Section -->
                  <div class="relative h-[300px] lg:h-full overflow-hidden">
                      <img
                          src={project.image}
                          alt={project.title}
                          class="w-full h-full object-cover border rounded-lg"
                      />
                      <div class="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-md text-sm">
                          {project.category}
                      </div>
                  </div>

                  <!-- Content Section -->
                  <div class="py-8 px-1 lg:p-12">
                      <div class="flex items-center mb-4">
                          <svg class="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                          <span class="text-gray-600 text-sm">{project.location}</span>
                      </div>

                      <h3 class="lg:text-3xl text-2xl font-bold text-gray-900 mb-6 ">{project.title}</h3>

                      <!-- Key Metrics -->
                      <div class="grid grid-cols-2 gap-4 mb-8">
                        <div class=" backdrop-blur-sm border border-gray-700 p-4 rounded-xl group-hover:border-green-800/30 transition-colors">
                          <div class="flex items-center mb-2">
                            <svg class="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h4 class="text-gray-900 text-sm font-medium">Total Capacity</h4>
                          </div>
                          <p class="text-gray-600 text-sm">{project.impact.capacity}</p>
                        </div>
                        
                        <div class=" backdrop-blur-sm border border-gray-700 p-4 rounded-xl group-hover:border-green-800/30 transition-colors">
                          <div class="flex items-center mb-2">
                            <svg class="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <h4 class="text-gray-900 text-sm font-medium">Phase 1 capacity</h4>
                          </div>
                          <p class="text-gray-600 text-sm">{project.impact.phase1}</p>
                        </div>
                        
                        <div class="border-[#242836] backdrop-blur-sm border  p-4 rounded-xl group-hover:border-green-800 transition-colors">
                          <div class="flex items-center mb-2">
                            <svg class="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                            <h4 class="text-gray-900 text-sm font-medium">Land Allocation</h4>
                          </div>
                          <p class="text-gray-600 text-sm">{project.impact.land}</p>
                        </div>
                        
                        <div class=" backdrop-blur-sm border border-gray-700 p-4 rounded-xl group-hover:border-green-800/30 transition-colors">
                          <div class="flex items-center mb-2">
                            <svg class="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 class="text-gray-900 text-sm font-medium">Transmission Line</h4>
                          </div>
                          <p class="text-gray-600 text-sm">{project.impact.transmission}</p>
                        </div>
                      </div>

                      <!-- Project Highlights -->
                      <div class="space-y-3 pl-1">
                        {#each project.highlights as highlight}
                          <div class="flex items-start space-x-3 group/item">
                            <div class="h-5 w-5 rounded-full border border-green-500 bg-green-500/10 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/20 transition-colors">
                              <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                              </svg>
                            </div>
                            <span class="text-gray-600 group-hover/item:text-gray-900 transition-colors">{highlight}</span>
                          </div>
                        {/each}
                      </div>

                      <div class="mt-8">
                          <a href="/projects/chegutu-solar-park" class="inline-flex items-center text-green-600 hover:text-gray-200 font-medium border border-green-600 px-4 py-2 hover:bg-green-600 transition-colors delay-100">
                              Learn More
                             
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      {/each}
  </div>
</section>
<section class="bg-[#1B1E25] py-12 lg:py-24 border-y border-gray-600">
  <div class="container mx-auto px-4 md:px-6 max-w-4xl lg:text-center text-left">
    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
      Ready to Build Sustainably?
    </h2>
    <p class="text-gray-300 mb-12 max-w-2xl mx-auto">
      Let's discuss how we can help bring your sustainable construction project to life.
      Our team is ready to provide expert guidance and support.
    </p>
    <a
      href="/contact"
      class="inline-flex items-center border border-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors group"
    >
      <span class="text-lg font-medium mr-2 text-amber-600 hover:text-gray-100">Get in Touch</span>
      <svg
        class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  </div>
</section>

<style>
  /* Enhance image loading */
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