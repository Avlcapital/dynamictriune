<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  // Import project images
  import HeroImage from '$lib/assets/solar.jpg';
  import LocationImage from '$lib/assets/solar.jpg';
  
  let isVisible = false;
  
  onMount(() => {
    isVisible = true;
  });
  
  const project = {
    name: "Chegutu Solar Park",
    tagline: "Powering Zimbabwe's Sustainable Future",
    location: "Bordeaux Farm, Chegutu, Mashonaland West Province, Zimbabwe",
    capacity: "54.12 MWac / 65 MWdc",
    overview: "Chegutu Solar Park is a strategic renewable energy development designed to address Zimbabwe's growing electricity demand through clean energy generation. Located at Bordeaux Farm in Chegutu, the project will generate 54.12 MWac of solar power and connect to the national grid via a 15.2km transmission line.",
    keyFeatures: [
      {
        title: "Solar PV Plant",
        description: "54.12 MWac / 65 MWdc capacity utilizing advanced photovoltaic technology",
        icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`
      },
      {
        title: "Substation",
        description: "88/33kV Air-insulated switchgear facility for reliable power transmission",
        icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`
      },
      {
        title: "Transmission",
        description: "15.2km 88kV Double Circuit Line connecting to the national grid",
        icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
      },
      {
        title: "Access Road",
        description: "9km gravel road ensuring reliable site access for construction and operations",
        icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>`
      }
    ],
    impact: [
      "Contributes to addressing Zimbabwe's 800MW+ energy deficit",
      "Reduces dependency on fossil fuels and carbon emissions",
      "Supports economic growth through reliable power supply",
      "Creates local employment opportunities during construction and operation",
      "Improves grid stability and energy security"
    ],
    timeline: {
      construction: "6 months from finance close",
      operation: "25-year project lifespan"
    },
    stats: [
      {
        value: "54.12",
        unit: "MWac",
        label: "Power Output",
        icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`
      },
      {
        value: "280",
        unit: "hectares",
        label: "Land Area",
        icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>`
      },
      {
        value: "15.2",
        unit: "km",
        label: "Transmission Line",
        icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>`
      },
      {
        value: "25",
        unit: "years",
        label: "Project Lifespan",
        icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
      }
    ]
  };
</script>

<Navbar />

<main class="min-h-screen bg-gradient-to-b from-[#0c0f16] to-[#161a26] text-gray-200">
  <!-- Hero Section -->
  <section class="relative h-[80vh] max-h-[700px] min-h-[500px] overflow-hidden">
    <div class="absolute inset-0">
      <img src={HeroImage} alt="Chegutu Solar Park" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#0c0f16] via-[#0c0f16]/70 to-[#0c0f16]/30"></div>
    </div>
    
    <!-- Project Banner -->
    <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0c0f16]/80 to-transparent"></div>
    
    <div class="container mx-auto px-4 md:px-6 relative h-full flex items-end z-10 max-w-7xl">
      <div class="pb-16 md:pb-24 max-w-3xl">
        {#if isVisible}
          <div in:fade={{ duration: 500, delay: 200 }}>
            <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-600/30 mb-4">
              <div class="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
              <span class="text-xs font-semibold tracking-wider text-blue-300">RENEWABLE ENERGY</span>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">{project.name}</h1>
            <p class="text-xl md:text-2xl text-gray-300 font-light">{project.tagline}</p>
          </div>
        {/if}
      </div>
    </div>
  </section>

  <!-- Quick Stats Bar -->
  <section class="relative -mt-8 z-20 container mx-auto px-4 md:px-6 max-w-7xl">
    <div class="bg-[#1d2233] border border-gray-800/50 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm">
      <div class="grid grid-cols-2 md:grid-cols-4">
        {#each project.stats as stat, i}
          <div class="p-6 md:p-8 border-gray-800/50 flex flex-col items-center text-center transition-colors hover:bg-[#242836]/50 group">
            <div class="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
              {@html stat.icon.replace('class="w-5 h-5"', 'class="w-5 h-5 text-green-400"')}
            </div>
            <div class="flex items-baseline">
              <span class="text-3xl md:text-4xl font-bold text-white mr-2">{stat.value}</span>
              <span class="text-sm text-green-400 font-medium">{stat.unit}</span>
            </div>
            <p class="text-sm text-gray-400 mt-2">{stat.label}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Overview -->
  <section class="py-20 md:py-32 container mx-auto px-4 md:px-6 max-w-7xl">
    <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div>
        {#if isVisible}
          <div in:fade={{ duration: 500, delay: 300 }}>
            <div class="flex items-center mb-6">
              <div class="w-12 h-1 bg-green-500 rounded mr-4"></div>
              <h2 class="text-3xl md:text-4xl font-bold text-white">Project Overview</h2>
            </div>
            <p class="text-gray-300 font-light text-lg leading-relaxed mb-10">{project.overview}</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-[#1d2233]/60 backdrop-blur-sm border border-gray-800/50 p-5 rounded-xl hover:border-green-800/40 transition-colors">
                <div class="flex items-center mb-3">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 class="text-white font-medium">Location</h3>
                </div>
                <p class="text-gray-400 text-sm leading-relaxed">{project.location}</p>
              </div>
              
              <div class="bg-[#1d2233]/60 backdrop-blur-sm border border-gray-800/50 p-5 rounded-xl hover:border-green-800/40 transition-colors">
                <div class="flex items-center mb-3">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 class="text-white font-medium">Capacity</h3>
                </div>
                <p class="text-gray-400 text-sm leading-relaxed">{project.capacity}</p>
              </div>
              
              <div class="bg-[#1d2233]/60 backdrop-blur-sm border border-gray-800/50 p-5 rounded-xl hover:border-green-800/40 transition-colors">
                <div class="flex items-center mb-3">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 class="text-white font-medium">Construction</h3>
                </div>
                <p class="text-gray-400 text-sm leading-relaxed">{project.timeline.construction}</p>
              </div>
              
              <div class="bg-[#1d2233]/60 backdrop-blur-sm border border-gray-800/50 p-5 rounded-xl hover:border-green-800/40 transition-colors">
                <div class="flex items-center mb-3">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 class="text-white font-medium">Lifespan</h3>
                </div>
                <p class="text-gray-400 text-sm leading-relaxed">{project.timeline.operation}</p>
              </div>
            </div>
          </div>
        {/if}
      </div>
      
      <div class="rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 relative group">
        <div class="absolute inset-0 bg-gradient-to-tr from-green-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img 
          src={LocationImage} 
          alt="Chegutu Solar Park Location" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  </section>

  <!-- Key Features -->
  <section class="py-20 md:py-32 bg-[#0c0f16]/70">
    <div class="container mx-auto px-4 md:px-6 max-w-7xl">
      <div class="flex flex-col items-center text-center mb-16">
        <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-600/10 border border-purple-600/20 mb-6">
          <div class="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
          <span class="text-xs font-semibold tracking-wider text-purple-300">INFRASTRUCTURE</span>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Key Components</h2>
        <p class="text-gray-300 text-lg max-w-3xl">
          The Chegutu Solar Park project consists of several integrated components designed to efficiently generate and deliver clean energy to the grid.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#if isVisible}
          {#each project.keyFeatures as feature, i}
            <div 
              in:fly={{ y: 20, duration: 400, delay: 300 + (100 * i) }}
              class="bg-gradient-to-tr from-[#1d2233] to-[#242836] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-800/50 group"
            >
              <div class="p-6 md:p-8">
                <div class="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600/20 transition-colors">
                  {@html feature.icon.replace('class="w-12 h-12"', 'class="w-8 h-8 text-purple-400"')}
                </div>
                <h3 class="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                <p class="text-gray-300 group-hover:text-gray-200 transition-colors">{feature.description}</p>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </section>

  <!-- Impact -->
  <section class="py-20 md:py-32">
    <div class="container mx-auto px-4 md:px-6 max-w-7xl">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
        <div>
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-600/10 border border-amber-600/20 mb-6">
            <div class="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
            <span class="text-xs font-semibold tracking-wider text-amber-300">BENEFITS</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white">Project Impact</h2>
        </div>
        <p class="text-gray-300 text-lg max-w-xl mt-4 md:mt-0">
          Chegutu Solar Park delivers substantial environmental, economic, and social benefits to Zimbabwe and the region.
        </p>
      </div>
      
      <div class="space-y-6">
        {#if isVisible}
          {#each project.impact as item, i}
            <div 
              in:fly={{ x: -20, duration: 400, delay: 300 + (100 * i) }}
              class="bg-gradient-to-tr from-[#1d2233] to-[#242836] p-6 rounded-xl shadow-lg border border-gray-800/50 group hover:border-amber-800/30 transition-colors"
            >
              <div class="flex items-start">
                <div class="w-12 h-12 bg-amber-600/10 rounded-full flex items-center justify-center mr-5 flex-shrink-0 group-hover:bg-amber-600/20 transition-colors">
                  <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p class="text-gray-300 text-lg leading-relaxed pt-2 group-hover:text-white transition-colors">{item}</p>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </section>
  
  <!-- Contact Section -->
  <section class="py-20 md:py-32 bg-[#0c0f16]/70">
    <div class="container mx-auto px-4 md:px-6 max-w-7xl">
      <div class="bg-gradient-to-br from-[#1d2233] to-[#242836] rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 relative">
        <!-- Decorative elements -->
        <div class="absolute -top-24 -right-24 w-48 h-48 bg-green-500 rounded-full filter blur-3xl opacity-10"></div>
        <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        
        <div class="relative p-10 md:p-16 z-10 flex flex-col md:flex-row items-center">
          <div class="md:w-2/3 mb-10 md:mb-0 md:pr-10">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Interested in This Project?</h2>
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
              Our team is ready to provide more information about Chegutu Solar Park and discuss potential collaboration opportunities. Whether you're an investor, contractor, or community stakeholder, we'd love to hear from you.
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="/contact" class="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Us
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
              <!-- <a href="/projects" class="inline-flex items-center border border-gray-600 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                View All Projects
              </a> -->
            </div>
          </div>
          <div class="md:w-1/3 flex justify-center">
            <img src="/logo.png" alt="Dynamic Triune" class="h-32 md:h-40 opacity-90" />
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
