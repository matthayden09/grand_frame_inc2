<template>
  <div
    class="
      rounded-lg
      bg-gray-200
      overflow-hidden
      shadow
      divide-y divide-gray-200
      sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px
      max-w-5xl
      m-auto
      my-8
    "
  >
    <div
      v-for="(service, serviceIdx) in services"
      :key="service.title"
      :class="[
        serviceIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
        serviceIdx === 1 ? 'sm:rounded-tr-lg' : '',
        serviceIdx === services.length - 2 ? 'sm:rounded-bl-lg' : '',
        serviceIdx === services.length - 1
          ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
          : '',
        'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-amber-400',
      ]"
    >
      <div>
        <span
          :class="[
            service.iconBackground,
            service.iconForeground,
            'rounded-lg inline-flex p-3 ring-4 ring-white group-hover:animate-bounce',
          ]"
        >
          <component :is="service.icon" class="h-6 w-6" aria-hidden="true" />
        </span>
      </div>
      <div class="mt-8">
        <h3 class="text-lg font-medium hover:text-xl">
          <router-link class="focus:outline-none" :to="{ name: service.name }">
            <span class="absolute inset-0" aria-hidden="true" />
            {{ service.title }}
          </router-link>
        </h3>
        <p class="mt-2 text-sm text-gray-500">
          {{ service.details }}
        </p>
      </div>
      <span
        class="absolute top-6 right-6 text-gray-300 group-hover:text-gray-700"
        aria-hidden="true"
      >
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import {
  PhotographIcon,
  PrinterIcon,
  TruckIcon,
  CameraIcon,
  HomeIcon,
  SparklesIcon,
} from '@heroicons/vue/outline'

const services = [
  {
    title: 'Custom Framing',
    name: 'CustomFraming',
    details: 'Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.',
    icon: PhotographIcon,
    iconForeground: 'text-pink-700',
    iconBackground: 'bg-pink-50',
  },
  {
    title: 'Digital Printing',
    name: 'DigitalPrinting',
    details: 'Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.',
    icon: PrinterIcon,
    iconForeground: 'text-blue-700',
    iconBackground: 'bg-blue-50',
  },
  {
    title: 'Wholesale Orders',
    name: 'WholesaleOrders',
    details: 'Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.',
    icon: TruckIcon,
    iconForeground: 'text-green-700',
    iconBackground: 'bg-green-50',
  },
  { title: 'Installation', name: 'Installation', details: 'Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.', icon: HomeIcon, iconForeground: 'text-gray-700', iconBackground: 'bg-gray-50' },
  {
    title: 'Fine Art Restoration',
    name: 'ArtRestoration',
    details: 'Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.',
    icon: SparklesIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Photo Restoration',
    name: 'PhotoRestoration',
    details: 'Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.',
    icon: CameraIcon,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
]

export default {
  setup() {
    return {
      services,
    }
  },
}
</script>