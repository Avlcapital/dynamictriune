<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import BackgroundCarousel from '$lib/components/BackgroundCarousel.svelte';
  import ProgressIndicator from '$lib/components/ProgressIndicator.svelte';
  import Image1 from '$lib/assets/bg1.png';
  import Image2 from '$lib/assets/bg-3.jpeg';
  import Image3 from '$lib/assets/bg-2.jpeg';
  import Image4 from '$lib/assets/bg-12.jpeg';
  import StatsSection from '$lib/components/StatsSection.svelte';
  import HomeAbout from '$lib/components/About.svelte';
	import ServicesSection from '$lib/components/ServicesSection.svelte';
	import SustainabilitySection from '$lib/components/SustainabilitySection.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';


  
  // Carousel images data
  const carouselImages = [
    {
      src: Image1,
      alt: 'Construction site with timber',
      title: 'Building Contractor & Timber Systems Specialists'
    },
    {
      src: Image2,
      alt: 'Modern building project',
      title: 'Excellence in Construction'
    },
    {
      src: Image3,
      alt: 'Modern building project',
      title: 'Excellence in Construction'
    },
    {
      src: Image4,
      alt: 'Modern building project',
      title: 'Excellence in Construction'
    },
    // Add more images as needed
  ];
  
  let currentSlide = 0;
  
  // Handle slide change
  function handleSlideChange(index: number) {
    currentSlide = index;
  }
</script>
<MetaTags
  title="Dynamic Triune | Renewable Energy Solutions in Africa"
  description="A leading renewable energy company delivering clean, sustainable power across East, Central, and Southern Africa through innovative infrastructure development."
  keywords="Dynamic Triune, dynamictriune  renewable energy, africa, sustainable power, clean energy, solar power, infrastructure development, East Africa, Southern Africa"
  image="/images/home-social.jpg"
  url="/"
/>

<div class="relative h-screen w-full overflow-hidden">
  <BackgroundCarousel 
    images={carouselImages}
    {currentSlide}
    on:slideChange={({ detail }) => handleSlideChange(detail)}
  />
  
  <div class="absolute inset-0 bg-[#0C1017]/80 flex items-center">
    <div class="container mx-auto px-6 md:px-16">
      <div class="max-w-3xl mt-36 pt-28">
        <!-- <h2 class="text-lg flex items-center md:text-2xl text-white/80 uppercase tracking-wider mb-4">
            <div class="w-8 h-[2px] bg-amber-400 mr-3"></div>
            DYNAMIC TRIUNE
        </h2> -->
        <h1 class="text-4xl lg:text-6xl font-medium text-white leading-tight tracking-wide mb-6 lg:mt-1 mt-12">
            Building Sustainable Solutions, One Project at a Time
        </h1>
        <p class="text-md lg:text-xl text-gray-300 max-w-2xl font-extralight leading-relaxed">
            A leading renewable energy company delivering clean, sustainable power across East, Central, and Southern Africa.
        </p>
        
      </div>
    </div>
  </div>
  <ProgressIndicator 
    totalSlides={carouselImages.length}
    {currentSlide}
  />
  
</div>

<HomeAbout />
<StatsSection />
<ServicesSection />
<SustainabilitySection />

