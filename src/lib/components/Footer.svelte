<script lang="ts">
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Services', href: '/services' },
      { label: 'Projects', href: '/projects' },
      { label: 'Contact Us', href: '/contact' }
    ]
  };

  const contactInfo = {
    address: 'Lower Duplex Apartments, Suite 24, 2nd floor, Upperhill Road, Nairobi, Kenya',
    phone: '+254 20 230 4180',
    email: 'info@dynamictriune.com'
  };
</script>

<footer class="bg-[#0c0f16] text-gray-400 relative overflow-hidden">
  <!-- Company name with reduced opacity in background -->
  <div class="hidden bsolute inset-0 lg:flex items-center justify-center pointer-events-none overflow-hidden">
    <h1 class="text-[4rem] md:text-[9rem] lg:text-[11rem] font-bold text-white opacity-[0.08] whitespace-nowrap transform ">
      DYNAMIC TRIUNE
    </h1>
  </div>

  <!-- Main Footer Content -->
  <div class="container mx-auto px-4 pt-8 lg:pt-1 pb-4 lg:pb-12 relative z-10">
    <div class="flex flex-col items-center mb-12">
      <img src="/logo.png" alt="Dynamic Triune" class="h-24 lg:h-28 mb-4" />
      <p class="text-md lg:text-xl text-center max-w-2xl mb-8 text-gray-300 font-light">
        Building sustainable solutions and empowering communities through innovative infrastructure development.
      </p>
      <div class="flex space-x-6">
        <a href="https://linkedin.com" class="text-gray-400 hover:text-white transition-colors bg-[#1a1e2a] p-3 rounded-full">
          <span class="sr-only">LinkedIn</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="https://twitter.com" class="text-gray-400 hover:text-white transition-colors bg-[#1a1e2a] p-3 rounded-full">
          <span class="sr-only">Twitter</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
        <a href="https://facebook.com" class="text-gray-400 hover:text-white transition-colors bg-[#1a1e2a] p-3 rounded-full">
          <span class="sr-only">Facebook</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
          </svg>
        </a>
        <a href="https://instagram.com" class="text-gray-400 hover:text-white transition-colors bg-[#1a1e2a] p-3 rounded-full">
          <span class="sr-only">Instagram</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.8c-2.67 0-2.987.01-4.04.06-.976.043-1.505.207-1.858.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.05 1.054-.06 1.37-.06 4.04 0 2.67.01 2.987.06 4.04.043.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.05 1.37.06 4.04.06 2.67 0 2.987-.01 4.04-.06.976-.043 1.505-.207 1.858-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.05-1.054.06-1.37.06-4.04 0-2.67-.01-2.987-.06-4.04-.043-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.05-1.37-.06-4.04-.06zm0 3.064a5.136 5.136 0 110 10.272 5.136 5.136 0 010-10.272zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zM17.872 5.76a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
          </svg>
        </a>
      </div>
    </div>

  
  </div>


  <!-- Copyright Bar -->
  <div class="border-t border-gray-800">
    <div class="container mx-auto px-4 py-6">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p class="lg:text-sm text-xs">
          © {currentYear} Dynamic Triune. All rights reserved.
        </p>
        <div class="flex space-x-6 text-sm">
          <a href="/contact" class="hover:text-white transition-colors">Contact Us</a>

          <a href="/privacy" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" class="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </div>
</footer>