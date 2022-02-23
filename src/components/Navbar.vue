<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="
                inline-flex
                items-center
                justify-center
                p-2
                rounded-md
                text-gray-400
                hover:text-gray-500 hover:bg-gray-100
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-yellow-500
              "
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-12 w-auto rounded-sm"
              src="../assets/img/logo.svg"
              alt="logo"
            />
            <img
              class="hidden lg:block h-12 w-auto rounded-sm"
              src="../assets/img/logo.svg"
              alt="logo"
            />
          </div>
          <div class="hidden md:ml-6 md:flex md:space-x-8 cursor-pointer">
            <!-- Current: "border-yellow-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <a
              href="/"
              class="
                border-yellow-500
                text-gray-900
                inline-flex
                items-center
                px-1
                pt-1
                border-b-2
                text-sm
                font-medium
              "
            >
              Home
            </a>
            <div
              class="
                border-transparent
                text-gray-500
                hover:border-gray-300 hover:text-gray-700
                inline-flex
                items-center
                px-1
                pt-1
                border-b-2
                text-sm
                font-medium
              "
            >
              <NavServices />
            </div>
            <a
              href="/gallery"
              class="
                border-transparent
                text-gray-500
                hover:border-gray-300 hover:text-gray-700
                inline-flex
                items-center
                px-1
                pt-1
                border-b-2
                text-sm
                font-medium
              "
            >
              Gallery
            </a>
            <a
              href="/team"
              class="
                border-transparent
                text-gray-500
                hover:border-gray-300 hover:text-gray-700
                inline-flex
                items-center
                px-1
                pt-1
                border-b-2
                text-sm
                font-medium
              "
            >
              Team
            </a>
            <a
              href="/#contact"
              class="
                border-transparent
                text-gray-500
                hover:border-gray-300 hover:text-gray-700
                inline-flex
                items-center
                px-1
                pt-1
                border-b-2
                text-sm
                font-medium
              "
            >
              Contact
            </a>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <button
              type="button"
              class="
                relative
                inline-flex
                items-center
                px-4
                py-2
                border border-transparent
                text-sm
                font-medium
                rounded-md
                text-white
                bg-yellow-600
                shadow-sm
                hover:bg-yellow-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-yellow-500
              "
            >
              <ShoppingCartIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              <span>Online Store</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <!-- Current: "bg-yellow-50 border-yellow-500 text-yellow-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <DisclosureButton
          as="a"
          href="/"
          class="
            bg-yellow-50
            border-yellow-500
            text-yellow-700
            block
            pl-3
            pr-4
            py-2
            border-l-4
            text-base
            font-medium
            sm:pl-5 sm:pr-6
          "
          >Home</DisclosureButton
        >
        <div
          class="
            border-transparent
            text-gray-500
            hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700
            block
            pl-3
            pr-4
            py-2
            border-l-4
            text-base
            font-medium
            sm:pl-5 sm:pr-6
          "
        >
          <NavServices />
        </div>
        <DisclosureButton
          as="a"
          href="/gallery"
          class="
            border-transparent
            text-gray-500
            hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700
            block
            pl-3
            pr-4
            py-2
            border-l-4
            text-base
            font-medium
            sm:pl-5 sm:pr-6
          "
          >Gallery</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="/team"
          class="
            border-transparent
            text-gray-500
            hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700
            block
            pl-3
            pr-4
            py-2
            border-l-4
            text-base
            font-medium
            sm:pl-5 sm:pr-6
          "
          >Team</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="/#contact"
          class="
            border-transparent
            text-gray-500
            hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700
            block
            pl-3
            pr-4
            py-2
            border-l-4
            text-base
            font-medium
            sm:pl-5 sm:pr-6
          "
          >Contact</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/vue/outline'
import { PlusSmIcon } from '@heroicons/vue/solid'
import NavServices from '../components/NavServices.vue'

export default {
  components: {
    NavServices,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    PlusSmIcon,
    XIcon,
    ShoppingCartIcon
  },
}
</script>