<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-24 sm:py-32 sm:px-2 lg:px-4">
      <div class="max-w-2xl mx-auto px-4 lg:max-w-none">
        <div class="max-w-3xl">
          <h2 class="font-semibold text-gray-500">The highest quality with the best equipment</h2>
          <p
            class="
              mt-2
              text-3xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            Digital Printing
          </p>
          <!-- <p class="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p> -->
        </div>

        <div
          class="
            space-y-16
            pt-10
            mt-10
            border-t border-gray-200
            sm:pt-16 sm:mt-16
          "
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="
              flex flex-col-reverse
              lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center
            "
          >
            <div class="mt-6 lg:mt-0 lg:col-span-5 xl:col-span-4">
              <h3 class="text-lg font-medium text-gray-900">
                {{ feature.name }}
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                {{ feature.description }}
              </p>
            </div>
            <div class="flex-auto lg:col-span-7 xl:col-span-8">
              <div
                class="
                  rounded-lg
                  bg-gray-100
                  overflow-hidden
                "
              >
                <img
                  :src="feature.imageSrc"
                  :alt="feature.imageAlt"
                  class="object-center object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Contact />
</template>

<script>
import Contact from '../components/Contact.vue'

const features = [
  {
    name: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam magni, delectus, ad aliquam libero voluptate animi dolores qui inventore quam officiis amet obcaecati aut sunt quis! Molestias impedit suscipit porro?',
    imageSrc: 'https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg',
    imageAlt: 'Printed photo of bag being tossed into the sky on top of grass.',
  },
  {
    name: 'Lorem ipsum',
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam magni, delectus, ad aliquam libero voluptate animi dolores qui inventore quam officiis amet obcaecati aut sunt quis! Molestias impedit suscipit porro?",
    imageSrc: 'https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg',
    imageAlt: 'Double stitched black canvas hook loop.',
  },
  {
    name: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam magni, delectus, ad aliquam libero voluptate animi dolores qui inventore quam officiis amet obcaecati aut sunt quis! Molestias impedit suscipit porro?',
    imageSrc: 'https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg',
    imageAlt: 'Black canvas body with chrome zipper and key ring.',
  },
]

export default {
  components: { Contact },
  setup() {
    return {
      features,
    }
  },
}
</script>

<style>
</style>