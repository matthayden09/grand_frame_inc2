<template>
  <div class="relative p-12 md:p-48">
    <div class="absolute inset-0 overflow-hidden">
      <img
        src="../assets/img/installation.png"
        alt=""
        class="w-full h-full object-center object-cover"
      />
    </div>
    <div
      aria-hidden="true"
      class="absolute inset-0 bg-gray-900 bg-opacity-50"
    />
    <div
      class="relative max-w-3xl mx-auto flex flex-col items-center text-center"
    >
      <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Home Installation
      </h2>
      <p class="mt-3 text-xl text-white">
        Let our team handle the installation once your project is complete. From
        our shop to your home or office, we have the tools.
      </p>
      <a
        href="#"
        class="
          mt-8
          block
          bg-white
          border border-transparent
          rounded-md
          py-3
          px-8
          text-base
          font-medium
          text-gray-900
          hover:bg-gray-100
          sm:w-auto
        "
        >Get a Quote</a
      >
    </div>
  </div>
  <Contact />
</template>

<script>
import Contact from '../components/Contact.vue'

export default {
  components: { Contact }
}
</script>

<style>
</style>