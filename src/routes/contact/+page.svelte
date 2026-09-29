<script lang="ts">
	import MetaTags from '$lib/components/MetaTags.svelte';
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    
    interface FormData {
        name: string;
        email: string;
        role: string;
        message: string;
    }

    const roles = [
        { value: 'developer', label: 'Project Developer' },
        { value: 'owner', label: 'Project Owner Seeking Funding' },
        { value: 'investor', label: 'Potential Investor' },
        { value: 'contractor', label: 'EPC Contractor' },
        { value: 'other', label: 'Other Stakeholder' }
    ];

    let formData: FormData = {
        name: '',
        email: '',
        role: '',
        message: ''
    };

    let isSubmitting = false;
    let submitStatus: 'success' | 'error' | null = null;
    let formElement: HTMLFormElement;
    let focusedField: string | null = null;

    async function handleSubmit(event: Event) {
        event.preventDefault();
        isSubmitting = true;
        submitStatus = null;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                submitStatus = 'success';
                formData = { name: '', email: '', role: '', message: '' };
                
                // Auto-scroll to success message
                setTimeout(() => {
                    const successMessage = document.querySelector('.success-message');
                    if (successMessage) {
                        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 100);
            } else {
                submitStatus = 'error';
            }
        } catch (error) {
            submitStatus = 'error';
        } finally {
            isSubmitting = false;
        }
    }

    function setFocus(field: string) {
        focusedField = field;
    }

    function clearFocus() {
        focusedField = null;
    }
</script>
<MetaTags
  title="Contact Us | Dynamic Triune"
  description="Get in touch with Dynamic Triune, a leading renewable energy company in East, Central, and Southern Africa for partnerships and inquiries."
  keywords="Dynamic Triune dynamictriune  contact, renewable energy company, partnerships, inquiries, africa, Nairobi, Kenya, dynamic triune contact"
  image="/images/contact-social.jpg"
  url="/contact"
/>
<section class="bg-gradient-to-b from-[#0c0f16] to-[#1B1E25] text-gray-200 body-font py-32 md:py-40 ">
    <div class="container max-w-6xl mx-auto px-5 md:px-8">
        <!-- Section Header with Animation -->
        <div class="text-center mb-16">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-green-600/10 border border-green-600/20 mb-4">
                <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span class="text-xs font-semibold tracking-wider text-green-400">GET IN TOUCH</span>
            </div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Let's Work Together</h1>
            <p class="max-w-xl mx-auto text-gray-400 text-lg">
                Ready to explore renewable energy opportunities? We're here to help turn your vision into reality.
            </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <!-- Contact Info Card -->
            <div class="lg:w-1/3 bg-[#161a26] rounded-2xl p-8 lg:p-10 h-fit">
                <h2 class="text-xl font-bold text-white mb-8">Contact Information</h2>
                
                <div class="space-y-8 mb-8">
                    <div class="flex items-start">
                        <div class="bg-green-600/20 p-3 rounded-full mr-4">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="text-white font-medium mb-1">Email</p>
                            <a href="mailto:info@dynamictriune.com" class="text-gray-400 hover:text-green-400 transition-colors">
                                info@dynamictriune.com
                            </a>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                        <div class="bg-green-600/20 p-3 rounded-full mr-4">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="text-white font-medium mb-1">Phone</p>
                            <a href="tel:+254202304180" class="text-gray-400 hover:text-green-400 transition-colors">
                                +254 20 230 4180
                            </a>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                        <div class="bg-green-600/20 p-3 rounded-full mr-4">
                            <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="text-white font-medium mb-1">Location</p>
                            <p class="text-gray-400">
                                Lower Duplex Apartments<br>
                                Suite 24, 2nd floor<br>
                                Upperhill Road<br>
                                Nairobi, Kenya
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Social Links -->
                <div>
                    <h3 class="text-sm font-medium text-gray-300 mb-3">Connect with us</h3>
                    <div class="flex space-x-3">
                        <a href="#" class="bg-[#1d2233] hover:bg-green-600/20 p-2 rounded-full transition-colors">
                            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                        </a>
                        <a href="#" class="bg-[#1d2233] hover:bg-green-600/20 p-2 rounded-full transition-colors">
                            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </a>
                        <a href="#" class="bg-[#1d2233] hover:bg-green-600/20 p-2 rounded-full transition-colors">
                            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Contact Form Card -->
            <div class="lg:w-2/3 bg-[#161a26] rounded-2xl p-8 lg:p-10 relative overflow-hidden">
                <!-- Decorative Element -->
                <div class="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-green-600/10 backdrop-blur-3xl"></div>
                <div class="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-green-600/5 backdrop-blur-3xl"></div>
                
                <h2 class="text-xl font-bold text-white mb-8 relative z-10">Send us a message</h2>
                
                <form bind:this={formElement} on:submit={handleSubmit} class="space-y-6 relative z-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="relative">
                            <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                            <div class={`relative border ${focusedField === 'name' ? 'border-green-500' : 'border-gray-700'} rounded-lg overflow-hidden transition-colors`}>
                                <input
                                    type="text"
                                    id="name"
                                    bind:value={formData.name}
                                    required
                                    on:focus={() => setFocus('name')}
                                    on:blur={clearFocus}
                                    class="block w-full px-4 py-3 bg-[#1d2233] text-white focus:outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>

                        <div class="relative">
                            <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                            <div class={`relative border ${focusedField === 'email' ? 'border-green-500' : 'border-gray-700'} rounded-lg overflow-hidden transition-colors`}>
                                <input
                                    type="email"
                                    id="email"
                                    bind:value={formData.email}
                                    required
                                    on:focus={() => setFocus('email')}
                                    on:blur={clearFocus}
                                    class="block w-full px-4 py-3 bg-[#1d2233] text-white focus:outline-none"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="relative">
                        <label for="role" class="block text-sm font-medium text-gray-300 mb-1">Your Role</label>
                        <div class={`relative border ${focusedField === 'role' ? 'border-green-500' : 'border-gray-700'} rounded-lg overflow-hidden transition-colors`}>
                            <select
                                id="role"
                                bind:value={formData.role}
                                required
                                on:focus={() => setFocus('role')}
                                on:blur={clearFocus}
                                class="block w-full px-4 py-3 bg-[#1d2233] text-white focus:outline-none appearance-none"
                            >
                                <option value="" disabled selected>Select your role</option>
                                {#each roles as role}
                                    <option value={role.value}>{role.label}</option>
                                {/each}
                            </select>
                            <div class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="relative">
                        <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message</label>
                        <div class={`relative border ${focusedField === 'message' ? 'border-green-500' : 'border-gray-700'} rounded-lg overflow-hidden transition-colors`}>
                            <textarea
                                id="message"
                                bind:value={formData.message}
                                rows="5"
                                required
                                on:focus={() => setFocus('message')}
                                on:blur={clearFocus}
                                class="block w-full px-4 py-3 bg-[#1d2233] text-white focus:outline-none resize-none"
                                placeholder="Tell us about your project or inquiry..."
                            ></textarea>
                        </div>
                    </div>

                    {#if submitStatus === 'success'}
                        <div class="success-message p-4 bg-green-600/20 border border-green-600 rounded-lg text-green-400" transition:fly={{ y: 20, duration: 300 }}>
                            <div class="flex items-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Thank you for your message. We'll be in touch shortly!</span>
                            </div>
                        </div>
                    {/if}

                    {#if submitStatus === 'error'}
                        <div class="p-4 bg-red-600/20 border border-red-600 rounded-lg text-red-400" transition:fly={{ y: 20, duration: 300 }}>
                            <div class="flex items-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>There was an error sending your message. Please try again.</span>
                            </div>
                        </div>
                    {/if}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        class="w-full flex justify-center items-center py-3 px-4 rounded-lg shadow-lg text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {#if isSubmitting}
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        {:else}
                            Send Message
                        {/if}
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>