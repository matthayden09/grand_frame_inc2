<template>
  <div class="max-w-3xl mx-auto text-center mt-10">
    <h2 class="md:text-3xl text-2xl font-extrabold text-gray-900 uppercase">
      The Gallery
    </h2>
    <p class="mt-4 mb-4 text-md text-gray-500 uppercase">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quae
      laboriosam dolores numquam accusamus voluptate.
    </p>
  </div>

  <ul
    role="list"
    class="
      grid grid-cols-1
      gap-x-4 gap-y-8
      sm:grid-cols-3 sm:gap-x-6
      lg:grid-cols-4
      xl:gap-x-8
      p-4
      m-auto
      max-w-5xl
    "
  >
    <li v-for="file in files" :key="file.source" class="relative">
      <div
        class="
          group
          block
          w-48
          h-48
          rounded-lg
          bg-gray-100
          focus-within:ring-2
          focus-within:ring-offset-2
          focus-within:ring-offset-gray-100
          focus-within:ring-yellow-500
          overflow-hidden
        "
      >
        <img
          :src="file.source"
          alt=""
          class="object-cover pointer-events-none group-hover:opacity-75"
        />
        <button type="button" class="absolute inset-0 focus:outline-none">
          <span class="sr-only">View details for {{ file.title }}</span>
        </button>
      </div>
      <p
        class="
          mt-2
          block
          text-sm
          font-medium
          text-gray-900
          truncate
          pointer-events-none
        "
      >
        {{ file.title }}
      </p>
      <p class="block text-sm font-medium text-gray-500 pointer-events-none">
        {{ file.size }}
      </p>
    </li>
  </ul>
  <Contact />
</template>

<script>
import Contact from '../components/Contact.vue'

const files = [
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  // More files...
]

export default {
  components: { Contact },
  setup() {
    return { files }
  }

}

</script>

<style>
</style>

