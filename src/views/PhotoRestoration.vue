<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="
            text-base
            font-semibold
            text-yellow-600
            tracking-wide
            uppercase
          "
        >
          Photo Restoration
        </h2>
        <p
          class="
            mt-1
            md:text-3xl
            text-xl
            font-extrabold
            text-gray-900
            uppercase
          "
        >
          Give new life to your old photographs
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque
          recusandae porro accusamus fugit optio nemo iste voluptatem voluptatum
          provident.
        </p>
        <button
          type="button"
          class="
            inline-flex
            justify-center
            px-6
            py-3
            mt-8
            border border-transparent
            text-base
            font-medium
            rounded-md
            shadow-sm
            text-white
            bg-yellow-600
            hover:bg-yellow-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-yellow-500
          "
        >
          Get a Quote
        </button>
      </div>
    </div>
  </div>
  <div
    class="
      h-96
      grid grid-rows-2 grid-cols-1
      lg:grid-rows-1 lg:grid-cols-2
      max-w-5xl
      m-auto
    "
  >
    <div class="relative flex">
      <img
        src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190517103414-01-grumpy-cat-file-restricted.jpg"
        alt=""
        class="absolute inset-0 w-full h-full object-center object-cover"
      />
      <div
        class="
          relative
          w-full
          flex flex-col
          items-start
          justify-end
          bg-black bg-opacity-40
          p-8
          sm:p-12
        "
      >
        <h2 class="text-lg font-medium text-white text-opacity-75">Before</h2>
        <p class="mt-1 text-2xl font-medium text-white">Example photo</p>
        <!-- <a
          href="#"
          class="
            mt-4
            text-sm
            font-medium
            text-gray-900
            bg-white
            py-2.5
            px-4
            rounded-md
            hover:bg-gray-50
          "
          >Shop now</a
        > -->
      </div>
    </div>
    <div class="relative flex">
      <img
        src="https://www.dogalize.com/wp-content/uploads/2017/07/happy-cat.jpg"
        alt=""
        class="absolute inset-0 w-full h-full object-center object-cover"
      />
      <div
        class="
          relative
          w-full
          flex flex-col
          items-start
          justify-end
          bg-black bg-opacity-40
          p-8
          sm:p-12
        "
      >
        <h2 class="text-lg font-medium text-white text-opacity-75">After</h2>
        <p class="mt-1 text-2xl font-medium text-white">Example Photo</p>
        <!-- <a
          href="#"
          class="
            mt-4
            text-sm
            font-medium
            text-gray-900
            bg-white
            py-2.5
            px-4
            rounded-md
            hover:bg-gray-50
          "
          >Shop now</a
        > -->
      </div>
    </div>
  </div>

  <div
    class="
      h-96
      grid grid-rows-2 grid-cols-1
      lg:grid-rows-1 lg:grid-cols-2
      max-w-5xl
      m-auto
      mt-12
      mb-12
    "
  >
    <div class="relative flex">
      <img
        src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190517103414-01-grumpy-cat-file-restricted.jpg"
        alt=""
        class="absolute inset-0 w-full h-full object-center object-cover"
      />
      <div
        class="
          relative
          w-full
          flex flex-col
          items-start
          justify-end
          bg-black bg-opacity-40
          p-8
          sm:p-12
        "
      >
        <h2 class="text-lg font-medium text-white text-opacity-75">Before</h2>
        <p class="mt-1 text-2xl font-medium text-white">Example Photo</p>
        <!-- <a
          href="#"
          class="
            mt-4
            text-sm
            font-medium
            text-gray-900
            bg-white
            py-2.5
            px-4
            rounded-md
            hover:bg-gray-50
          "
          >Shop now</a
        > -->
      </div>
    </div>
    <div class="relative flex">
      <img
        src="https://www.dogalize.com/wp-content/uploads/2017/07/happy-cat.jpg"
        alt=""
        class="absolute inset-0 w-full h-full object-center object-cover"
      />
      <div
        class="
          relative
          w-full
          flex flex-col
          items-start
          justify-end
          bg-black bg-opacity-40
          p-8
          sm:p-12
        "
      >
        <h2 class="text-lg font-medium text-white text-opacity-75">After</h2>
        <p class="mt-1 text-2xl font-medium text-white">Example photo</p>
        <!-- <a
          href="#"
          class="
            mt-4
            text-sm
            font-medium
            text-gray-900
            bg-white
            py-2.5
            px-4
            rounded-md
            hover:bg-gray-50
          "
          >Shop now</a
        > -->
      </div>
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