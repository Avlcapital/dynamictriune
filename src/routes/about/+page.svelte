<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import profile1 from '$lib/assets/AK3.jpeg';
  import profile2 from '$lib/assets/gerald.png';
  import profile3 from '$lib/assets/geraldNgugi.jpg';
  
  // You would need to add these images to your assets folder
  import boardroomImage from '$lib/assets/office1.png'; // Modern boardroom with glass windows
  import buildingImage from '$lib/assets/bg22.jpeg'; // Modern glass building
	import MetaTags from '$lib/components/MetaTags.svelte';

  let isVisible = false;
  let activeTab = 'mission';

  onMount(() => {
    isVisible = true;
  });

  const coreValues = [
    {
      title: 'Sustainability',
      description: 'Committed to long-term environmental, social, and economic impact.',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>`
    },
    {
      title: 'Innovation',
      description: 'Continuously adopting advanced technologies and creative approaches to optimize energy solutions.',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>`
    },
    {
      title: 'Integrity',
      description: 'Upholding transparency, ethics, and accountability in all operations.',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>`
    },
    {
      title: 'Collaboration',
      description: 'Partnering with stakeholders to deliver impactful results.',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>`
    },
    {
      title: 'Excellence',
      description: 'Striving for the highest quality in every project.',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>`
    },
    {
      title: 'Empowerment',
      description: 'Creating opportunities for growth and self-reliance within communities.',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>`
    }
  ];

  const team = [
    {
      name: 'Gerald Ngugi',
      position: 'Managing Director',
      bio: 'Over 20 years of experience in the energy sector, specializing in financial modeling and project accounting.',
      image: profile3
    },
    {
      name: 'Gerald Moseti',
      position: 'Technical Director',
      bio: '15 years of commercial experience at Shell Oil Products Africa, managing a $250 million portfolio.',
      image: profile2
    },
    {
      name: 'Andrew Kanyutu',
      position: 'Finance Director',
      bio: 'CEO of AVLC Group with extensive experience in banking and financial services across Africa.',
      image: profile1
    }
  ];
  

  
  // Helper function to show the appropriate tab content
  function setActiveTab(tab: string) {
    activeTab = tab;
  }
</script>

<MetaTags
  title="About Dynamic Triune | Our Mission and Leadership"
  description="Learn about Dynamic Triune's mission, vision, leadership team, and commitment to transforming Africa's energy landscape through sustainable practices."
  keywords="renewable energy company, about us, mission statement, Dynamic Triune ,dynamictriune leadership team, energy infrastructure, sustainability, africa energy"
  image="/images/about-social.jpg"
  url="/about"
/>
<Navbar />

<main class="min-h-screen bg-gradient-to-b from-[#0c0f16] to-[#161a26]">
  <!-- Hero Section with Company Introduction -->
  <section class="relative h-[70vh] min-h-[600px] overflow-hidden">
    <!-- Background image with overlay -->
    <div class="absolute inset-0">
      <img src={buildingImage} alt="Modern Glass Building" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#0c0f16] via-[#0c0f16]/80 to-transparent"></div>
    </div>
    
    <div class="container mx-auto px-8 md:px-6 relative z-10 h-full flex items-center">
      <div class="max-w-7xl pt-20 mx-auto">
        {#if isVisible}
          <div in:fade={{ duration: 500, delay: 200 }}>
            <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-green-600/20 border border-green-600/30 mb-6">
              <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <span class="text-xs font-semibold tracking-wider text-green-400">ABOUT US</span>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Dynamic Triune</h1>
            <p class="text-md lg:text-xl text-gray-300 leading-relaxed mb-8 font-light">
              Dynamic Triune is a leading energy infrastructure development company that specializes in renewable energy solutions across East, Central, and Southern Africa. Founded by industry experts with decades of experience, we are committed to transforming the energy landscape through sustainable practices and innovative technologies.
            </p>
            <a href="#mission" class="inline-flex items-center text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors">
              Learn More
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        {/if}
      </div>
    </div>
  </section>


  <!-- Mission & Vision with Tabs -->
  <section id="mission" class="py-20 md:py-28">
    <div class="container mx-auto px-8 md:px-6 max-w-7xl">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div class="flex items-center mb-6">
            <div class="w-12 h-1 bg-green-500 rounded mr-8"></div>
            <h2 class="text-3xl md:text-4xl font-bold text-white">Our Purpose</h2>
          </div>
          <p class="text-gray-300 text-md lg:text-lg font-light mb-10">
            At Dynamic Triune, we are driven by a clear purpose to deliver sustainable energy solutions that empower communities and protect our planet.
          </p>
          
          <!-- Tab Navigation -->
          <div class="flex space-x-4 mb-6 border-b border-gray-800">
            <button 
              class={`pb-3 px-4 font-medium ${activeTab === 'mission' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-400 hover:text-white'}`}
              on:click={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button 
              class={`pb-3 px-4 font-medium ${activeTab === 'vision' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-400 hover:text-white'}`}
              on:click={() => setActiveTab('vision')}
            >
              Our Vision
            </button>
          </div>
          
          <!-- Tab Content -->
          <div class="min-h-[150px]">
            {#if activeTab === 'mission'}
              <div in:fade={{ duration: 300 }}>
                <p class="text-gray-300 leading-relaxed text-md lg:text-lg">
                  To empower communities through sustainable infrastructure and innovative solutions, ensuring the successful execution of impactful projects that improve lives, drive economic growth, and protect the planet.
                </p>
              </div>
            {:else if activeTab === 'vision'}
              <div in:fade={{ duration: 300 }}>
                <p class="text-gray-300 leading-relaxed text-md lg:text-lg">
                  To be a leading force in transforming the energy landscape across East, Central, and Southern Africa by delivering reliable, renewable power that drives economic growth, enhances communities, and supports a sustainable future.
                </p>
              </div>
            {/if}
          </div>
        </div>
        
        <div class="rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 relative group">
          <div class="absolute inset-0 bg-gradient-to-tr from-green-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img 
            src={boardroomImage} 
            alt="Modern Boardroom" 
            class="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Core Values -->
  <section class="py-20 md:py-28 bg-[#0c0f16]/70">
    <div class="container mx-auto px-8 md:px-6 max-w-7xl">
      <div class="flex flex-col items-center text-center mb-16">
        <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
          <div class="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
          <span class="text-xs font-semibold tracking-wider text-blue-300">OUR PRINCIPLES</span>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Core Values</h2>
        <p class="text-gray-300 text-lg max-w-3xl">
          Our values guide every decision and action, ensuring we deliver sustainable energy solutions that create lasting positive impact.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each coreValues as value, i}
          {#if isVisible}
            <div 
              in:fly={{ y: 20, duration: 400, delay: 150 * i }} 
              class="bg-gradient-to-tr from-[#1d2233] to-[#242836] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-800/50 group"
            >
              <div class="p-8">
                <div class="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                  {@html value.icon.replace('class="w-6 h-6"', 'class="w-6 h-6 text-blue-400"')}
                </div>
                <h3 class="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">{value.title}</h3>
                <p class="text-gray-300 group-hover:text-gray-200 transition-colors">{value.description}</p>
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </section>

  <!-- Our Approach Timeline -->
  <section class="py-20 md:py-28">
    <div class="container mx-auto px-8 md:px-6 max-w-7xl">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
        <div>
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-green-600/10 border border-green-600/20 mb-6">
            <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <span class="text-xs font-semibold tracking-wider text-green-300">OUR METHODOLOGY</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white">Our Approach</h2>
        </div>
        <p class="text-gray-300 text-lg max-w-xl mt-4 md:mt-0">
          We take a comprehensive, end-to-end approach to energy infrastructure development, ensuring excellence at every stage.
        </p>
      </div>

      <!-- Vertical Timeline for Desktop -->
      <div class="hidden md:block relative">
        <div class="absolute top-0 bottom-0 left-24 w-1 bg-green-500/20 rounded-full"></div>
        
        <div class="space-y-12">
          <div class="relative flex items-start">
            <div class="absolute left-24 transform -translate-x-1/2 flex items-center justify-center">
              <div class="w-12 h-12 bg-green-600/20 rounded-full border-4 border-[#161a26] flex items-center justify-center z-10">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div class="w-24 pt-3 text-right pr-8">
              <div class="text-green-400 font-bold">01</div>
            </div>
            
            <div class="flex-1 bg-gradient-to-tr from-[#1d2233] to-[#242836] rounded-xl p-6 border border-gray-800/50 ml-8 shadow-lg">
              <h3 class="text-2xl font-bold text-white mb-4">Project Development</h3>
              <p class="text-gray-300">We identify opportunities and develop comprehensive plans that align with local needs and global sustainability goals.</p>
            </div>
          </div>
          
          <div class="relative flex items-start">
            <div class="absolute left-24 transform -translate-x-1/2 flex items-center justify-center">
              <div class="w-12 h-12 bg-green-600/20 rounded-full border-4 border-[#161a26] flex items-center justify-center z-10">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div class="w-24 pt-3 text-right pr-8">
              <div class="text-green-400 font-bold">02</div>
            </div>
            
            <div class="flex-1 bg-gradient-to-tr from-[#1d2233] to-[#242836] rounded-xl p-6 border border-gray-800/50 ml-8 shadow-lg">
              <h3 class="text-2xl font-bold text-white mb-4">Implementation</h3>
              <p class="text-gray-300">Our expert team executes projects with precision, adhering to international standards and best practices.</p>
            </div>
          </div>
          
          <div class="relative flex items-start">
            <div class="absolute left-24 transform -translate-x-1/2 flex items-center justify-center">
              <div class="w-12 h-12 bg-green-600/20 rounded-full border-4 border-[#161a26] flex items-center justify-center z-10">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div class="w-24 pt-3 text-right pr-8">
              <div class="text-green-400 font-bold">03</div>
            </div>
            
            <div class="flex-1 bg-gradient-to-tr from-[#1d2233] to-[#242836] rounded-xl p-6 border border-gray-800/50 ml-8 shadow-lg">
              <h3 class="text-2xl font-bold text-white mb-4">Monitoring & Management</h3>
              <p class="text-gray-300">We ensure long-term success through ongoing support, monitoring, and optimization of energy infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mobile Version -->
      <div class="md:hidden space-y-6">
        {#each ['Project Development', 'Implementation', 'Monitoring & Management'] as step, i}
          <div class="bg-gradient-to-tr from-[#1d2233] to-[#242836] rounded-xl p-6 border border-gray-800/50 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center mr-3">
                <div class="text-purple-400 font-bold text-sm">{(i + 1).toString().padStart(2, '0')}</div>
              </div>
              <h3 class="text-xl font-bold text-white">{step}</h3>
            </div>
            <p class="text-gray-300">
              {i === 0 ? 'We identify opportunities and develop comprehensive plans that align with local needs and global sustainability goals.' : 
               i === 1 ? 'Our expert team executes projects with precision, adhering to international standards and best practices.' : 
               'We ensure long-term success through ongoing support, monitoring, and optimization of energy infrastructure.'}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>


  <!-- Leadership Team -->
  <section id="team" class="py-20 md:py-28">
    <div class="container mx-auto px-8 md:px-6 max-w-7xl">
      <div class="flex flex-col items-center text-center mb-16">
        <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-600/10 border border-amber-600/20 mb-6">
          <div class="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
          <span class="text-xs font-semibold tracking-wider text-amber-300">OUR LEADERSHIP</span>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Meet Our Team</h2>
        <p class="text-gray-300 text-lg max-w-3xl">
          Led by seasoned professionals with extensive expertise in energy infrastructure and project development.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        {#each team as member, i}
          {#if isVisible}
            <div 
              in:fly={{ y: 20, duration: 400, delay: 150 * i }} 
              class="bg-gradient-to-tr from-[#1d2233] to-[#242836] rounded-xl overflow-hidden shadow-lg border border-gray-800/50 group"
            >
              <div class="p-8 flex flex-col items-center text-center">
                <div class="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-amber-500/20">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p class="text-amber-400 mb-4">{member.position}</p>
                <p class="text-gray-300">{member.bio}</p>
                
                
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </section>
</main>