<template>
  <div
    class="
      rounded-lg
      bg-gray-200
      overflow-hidden
      shadow
      divide-y divide-gray-200
      sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px
    "
  >
    <div
      v-for="(action, actionIdx) in actions"
      :key="action.title"
      :class="[
        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
        actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
        actionIdx === actions.length - 1
          ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
          : '',
        'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-yellow-500',
      ]"
    >
      <div>
        <span
          :class="[
            action.iconBackground,
            action.iconForeground,
            'rounded-lg inline-flex p-3 ring-4 ring-white',
          ]"
        >
          <component :is="action.icon" class="h-6 w-6" aria-hidden="true" />
        </span>
      </div>
      <div class="mt-8">
        <h3 class="text-lg font-medium">
          <a :href="action.href" class="focus:outline-none">
            <!-- Extend touch target to entire panel -->
            <span class="absolute inset-0" aria-hidden="true" />
            {{ action.title }}
          </a>
        </h3>
        <p class="mt-2 text-sm text-gray-500">
          Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit
          repellendus qui ut at blanditiis et quo et molestiae.
        </p>
      </div>
      <span
        class="
          pointer-events-none
          absolute
          top-6
          right-6
          text-gray-300
          group-hover:text-gray-400
        "
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

const actions = [
  {
    title: 'Custom Framing',
    href: '/custom_framing',
    icon: PhotographIcon,
    iconForeground: 'text-pink-700',
    iconBackground: 'bg-pink-50',
  },
  {
    title: 'Digital Printing',
    href: '/digital_printing',
    icon: PrinterIcon,
    iconForeground: 'text-blue-700',
    iconBackground: 'bg-blue-50',
  },
  {
    title: 'Wholesale Orders',
    href: '/wholesale_orders',
    icon: TruckIcon,
    iconForeground: 'text-green-700',
    iconBackground: 'bg-green-50',
  },
  { title: 'Installation', href: '/installation', icon: HomeIcon, iconForeground: 'text-gray-700', iconBackground: 'bg-gray-50' },
  {
    title: 'Fine Art Restoration',
    href: '/art_restoration',
    icon: SparklesIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Photo Restoration',
    href: '/photo_restoration',
    icon: CameraIcon,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
]

export default {
  setup() {
    return {
      actions,
    }
  },
}
</script>