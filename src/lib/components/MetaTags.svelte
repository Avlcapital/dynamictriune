<script lang="ts">
    export let title = "Dynamic Triune | Renewable Energy Solutions in Africa";
    export let description = "A leading renewable energy company delivering clean, sustainable power across East, Central, and Southern Africa.";
    export let keywords = "renewable energy, africa, sustainable power, clean energy, solar power";
    export let image = "/social-image.jpg";
    export let url = "";
    
    // Calculate canonical URL
    const canonicalUrl = url 
      ? `https://dynamictriune.com${url}` 
      : "https://dynamictriune.com";
  </script>
  
  <svelte:head>
    <title>{title}</title>
    <meta name="description" content={description}>
    <meta name="keywords" content={keywords}>
    
    <meta property="og:title" content={title}>
    <meta property="og:description" content={description}>
    <meta property="og:image" content={`https://dynamictriune.com${image}`}>
    <meta property="og:url" content={canonicalUrl}>
    <meta property="og:type" content="website">
    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content={title}>
    <meta name="twitter:description" content={description}>
    <meta name="twitter:image" content={`https://dynamictriune.com${image}`}>
    
    <link rel="canonical" href={canonicalUrl}>
  </svelte:head>