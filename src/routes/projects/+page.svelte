<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  // Import project images
  import SolarImage from '$lib/assets/solar.jpg';
	import MetaTags from '$lib/components/MetaTags.svelte';
  
  let isVisible = false;
  
  onMount(() => {
    isVisible = true;
  });
  
  const projectsIntro = {
    title: "Our Projects",
    description: "Dynamic Triune is committed to developing renewable energy infrastructure across East, Central, and Southern Africa. Our strategic projects focus on addressing the growing energy demands in the region through sustainable solutions.",
  };
  
  const projects = [
    {
      title: "Chegutu Solar Park",
      image: SolarImage,
      category: "Renewable Energy",
      location: "Zimbabwe",
      status: "In Development",
      impact: {
        capacity: "54.12 MWac / 65 MWdc",
        location: "Bordeaux Farm, Chegutu, Zimbabwe",
        transmission: "15.2km 88kV double circuit line",
        timeline: "Operational within 6 months from construction"
      },
      summary: "Chegutu Solar Park is a significant renewable energy project strategically located in Zimbabwe's Mashonaland West Province. The development serves as our entry into the Southern African Power Pool (SAPP) market, addressing Zimbabwe's critical power supply deficit through clean energy generation.",
      highlights: [
        "Located at Bordeaux Farm with 280 hectares of dedicated land",
        "Includes 88/33kV air-insulated switchgear substation",
        "Designed for grid stability and reliability",
        "Supports Zimbabwe's growing electricity demand",
        "Contributes to regional sustainable energy goals"
      ],
      link: "/projects/chegutu-solar-park"
    }
  ];
</script>
<MetaTags
  title="Our Projects | Dynamic Triune Renewable Energy Solutions"
  description="Explore Dynamic Triune's renewable energy projects across Africa, including the Chegutu Solar Park in Zimbabwe and other sustainable developments."
  keywords="Dynamic Triune dynamictriune  renewable energy projects, solar park, Zimbabwe, infrastructure development, sustainable energy, africa projects, Chegutu"
  image="/images/projects-social.jpg"
  url="/projects"
/>
<Navbar />

<main class="min-h-screen bg-gradient-to-b from-[#0c0f16] to-[#161a26]">
  <!-- Hero Section -->
  <section class="relative py-32 md:py-40 overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 overflow-hidden opacity-30">
      <div class="absolute -top-40 -left-40 w-80 h-80 bg-green-500 rounded-full filter blur-3xl opacity-20"></div>
      <div class="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
    </div>
    
    <div class="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
      {#if isVisible}
        <div class="flex flex-col items-center text-center mb-12" in:fade={{ duration: 500, delay: 200 }}>
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-green-600/10 border border-green-600/20 mb-4">
            <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <span class="text-xs font-semibold tracking-wider text-green-400">DYNAMIC TRIUNE PROJECTS</span>
          </div>
          <h1 class="text-4xl md:text-6xl text-left font-light text-white mt-6 mb-6">{projectsIntro.title}</h1>
          <div class="max-w-3xl">
            <p class="text-xl text-gray-300 font-light leading-relaxed">
              {projectsIntro.description}
            </p>
          </div>
        </div>
      {/if}
    </div>
  </section>

  <!-- Projects Section -->
  <section class="py-2 md:py-4 container max-w-7xl mx-auto px-4 md:px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {#each projects as project, i}
        {#if isVisible}
          <div 
            in:fly={{ y: 20, duration: 400, delay: 300 + (100 * i) }}
            class="bg-gradient-to-tr from-[#1d2233] to-[#242836] rounded-2xl overflow-hidden shadow-xl border border-gray-800/50 group hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500"
          >
            <!-- Project Image & Header -->
            <div class="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0c0f16]/90 via-transparent to-[#0c0f16]/30"></div>
              
              <!-- Status Indicator -->
              <div class="absolute top-6 right-6">
                <div class="bg-green-500/20 backdrop-blur-sm text-green-400 text-xs font-semibold tracking-wider px-3 py-1.5 rounded-full border border-green-500/30 flex items-center space-x-1">
                  <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span class="ml-1.5">{project.status}</span>
                </div>
              </div>
              
              <!-- Title Content -->
              <div class="absolute bottom-0 left-0 p-6 w-full">
                <div class="flex flex-wrap gap-2 mb-3">
                  <span class="bg-blue-600/30 backdrop-blur-sm text-blue-300 text-xs font-medium px-3 py-1 rounded-full border border-blue-500/30">{project.category}</span>
                  <span class="bg-purple-600/30 backdrop-blur-sm text-purple-300 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/30">{project.location}</span>
                </div>
                <h3 class="text-2xl font-bold text-white mt-2 group-hover:text-green-400 transition-colors">{project.title}</h3>
              </div>
            </div>
            
            <!-- Project Content -->
            <div class="p-8">
              <p class="text-gray-300 mb-8 leading-relaxed">{project.summary}</p>
              
              <!-- Project Stats -->
              <div class="grid grid-cols-2 gap-4 mb-8">
                <div class="bg-[#242836]/50 backdrop-blur-sm border border-gray-700/30 p-4 rounded-xl group-hover:border-green-800/30 transition-colors">
                  <div class="flex items-center mb-2">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h4 class="text-white text-sm font-medium">Capacity</h4>
                  </div>
                  <p class="text-gray-400 text-sm">{project.impact.capacity}</p>
                </div>
                
                <div class="bg-[#242836]/50 backdrop-blur-sm border border-gray-700/30 p-4 rounded-xl group-hover:border-green-800/30 transition-colors">
                  <div class="flex items-center mb-2">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h4 class="text-white text-sm font-medium">Location</h4>
                  </div>
                  <p class="text-gray-400 text-sm">{project.impact.location}</p>
                </div>
                
                <div class="bg-[#242836]/50 backdrop-blur-sm border border-gray-700/30 p-4 rounded-xl group-hover:border-green-800/30 transition-colors">
                  <div class="flex items-center mb-2">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    <h4 class="text-white text-sm font-medium">Transmission</h4>
                  </div>
                  <p class="text-gray-400 text-sm">{project.impact.transmission}</p>
                </div>
                
                <div class="bg-[#242836]/50 backdrop-blur-sm border border-gray-700/30 p-4 rounded-xl group-hover:border-green-800/30 transition-colors">
                  <div class="flex items-center mb-2">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 class="text-white text-sm font-medium">Timeline</h4>
                  </div>
                  <p class="text-gray-400 text-sm">{project.impact.timeline}</p>
                </div>
              </div>
              
              <!-- Project Highlights -->
              <div class="mb-8">
                <h4 class="text-white font-semibold mb-4 flex items-center">
                  <span class="w-1 h-5 bg-green-500 mr-3 rounded"></span>
                  Project Highlights
                </h4>
                <div class="space-y-3 pl-1">
                  {#each project.highlights as highlight}
                    <div class="flex items-start space-x-3 group/item">
                      <div class="h-5 w-5 rounded-full border border-green-500/30 bg-green-500/10 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/20 transition-colors">
                        <svg class="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <span class="text-gray-300 group-hover/item:text-white transition-colors">{highlight}</span>
                    </div>
                  {/each}
                </div>
              </div>
              
              <!-- Call to Action -->
              <div class="flex justify-end">
                <a href={project.link} class="relative inline-flex group/button items-center text-white font-medium overflow-hidden">
                  <span class="relative z-10 flex items-center px-6 py-3">
                    <span>Learn More</span>
                    <svg class="w-4 h-4 ml-2 transition-transform group-hover/button:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </span>
                  <span class="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 rounded-md opacity-0 group-hover/button:opacity-100 transition-opacity"></span>
                  <span class="absolute inset-0 border border-green-500/50 rounded-md group-hover/button:border-green-500 transition-colors"></span>
                </a>
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
    
    <!-- Future Projects Section -->
    <div class="mt-24">
      <div class="relative bg-gradient-to-br from-[#1d2233] to-[#242836] p-10 md:p-12 rounded-2xl text-center border border-gray-800/50 overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute -top-24 -right-24 w-48 h-48 bg-green-500 rounded-full filter blur-3xl opacity-10"></div>
        <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        
        <div class="relative z-10">
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
            <span class="text-xs font-semibold tracking-wider text-blue-400">LOOKING AHEAD</span>
          </div>
          
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Future Projects</h2>
          <p class="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Dynamic Triune has an ambitious pipeline of renewable energy projects under development across Eastern and Southern Africa. Stay tuned for updates as we continue to expand our portfolio.
          </p>
          
          <div class="flex flex-wrap justify-center gap-4 mb-8">
            <div class="bg-blue-600/10 backdrop-blur-sm text-blue-300 text-sm font-medium px-4 py-2 rounded-full border border-blue-500/30">Solar Farms</div>
            <div class="bg-purple-600/10 backdrop-blur-sm text-purple-300 text-sm font-medium px-4 py-2 rounded-full border border-purple-500/30">Hydroelectric</div>
            <div class="bg-amber-600/10 backdrop-blur-sm text-amber-300 text-sm font-medium px-4 py-2 rounded-full border border-amber-500/30">Wind Energy</div>
            <div class="bg-emerald-600/10 backdrop-blur-sm text-emerald-300 text-sm font-medium px-4 py-2 rounded-full border border-emerald-500/30">Energy Storage</div>
          </div>
          
          <a href="/contact" class="relative inline-flex group items-center text-white font-medium overflow-hidden">
            <span class="relative z-10 flex items-center px-8 py-4">
              <span>Contact Us for Partnerships</span>
              <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </span>
            <span class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span class="absolute inset-0 border border-blue-500/50 rounded-md group-hover:border-blue-500 transition-colors"></span>
          </a>
        </div>
      </div>
    </div>
  </section>
</main>
