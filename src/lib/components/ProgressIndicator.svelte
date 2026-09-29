<script lang="ts">
    export let totalSlides: number;
    export let currentSlide: number;
  </script>
  
  <div class="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
    {#each Array(totalSlides) as _, i}
      <div
        class="lg:w-12 w-6 h-[2px] bg-white/20 relative overflow-hidden rounded-full"
      >
        <div
          class="absolute inset-0 bg-white transition-all duration-300"
          style="transform: scaleY({i === currentSlide ? 1 : 0})"
        ></div>
      </div>
    {/each}
  </div>