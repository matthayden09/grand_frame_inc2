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
                focus:ring-yellow-300
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
            <router-link
              :to="{ name: 'Home' }"
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
              Home
            </router-link>
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
            <router-link
              :to="{ name: 'Gallery' }"
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
            </router-link>
            <router-link
              :to="{ name: 'Team' }"
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
            </router-link>
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
                bg-amber-300
                shadow-sm
                hover:bg-amber-400
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-amber-400
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
        <router-link :to="{ name: 'Home' }">
          <DisclosureButton
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
            >Home</DisclosureButton
          >
        </router-link>
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
        <router-link :to="{ name: 'Gallery' }">
          <DisclosureButton
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
        </router-link>
        <router-link :to="{ name: 'Team' }">
          <DisclosureButton
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
        </router-link>
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

<style>
a.router-link-active {
  color: rgb(252 211 77);
  border-bottom-color: rgb(252 211 77);
}
</style>