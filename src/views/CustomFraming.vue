<template>
  <div class="bg-white">
    <div class="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="md:text-4xl text-2xl font-extrabold text-gray-900 uppercase">
          we have a frame for that
        </h2>
        <p class="mt-4 mb-4 text-md text-gray-500 uppercase">
          whether if it's for your living room or your corporate office, we have
          what you need
        </p>
      </div>
      <div class="w-auto h-96 relative">
        <!-- <video
          autoplay
          muted
          loop
          src="../assets/video/workshop_clip.mp4"
          type="video/mp4"
          class="w-full h-full absolute object-cover z-0 rounded-sm"
        ></video> -->
      </div>
      <dl
        class="
          mt-12
          space-y-10
          sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12
          lg:grid-cols-4 lg:gap-x-8
        "
      >
        <div v-for="feature in features" :key="feature.name" class="relative">
          <dt>
            <CheckIcon
              class="absolute h-6 w-6 text-green-500"
              aria-hidden="true"
            />
            <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
              {{ feature.name }}
            </p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
    <div class="max-w-3xl mx-auto text-center">
      <h1
        class="md:text-4xl text-2xl font-extrabold tracking-tight text-gray-900"
      >
        Specialty Frames
      </h1>
      <p class="mt-4 text-gray-500">
        Wanting to expand your projects beyond standard framing? Browse some of
        our unique options to bring another level of creativity and character to
        what you're looking for.
      </p>
    </div>
    <div class="border-b-2 max-w-5xl mx-auto mt-6"></div>
  </div>

  <!-- prisma -->
  <div class="bg-white">
    <div
      class="
        max-w-2xl
        mx-auto
        py-24
        px-4
        grid
        items-center
        grid-cols-1
        gap-y-16 gap-x-8
        sm:px-6 sm:py-32
        lg:max-w-7xl lg:px-8 lg:grid-cols-2
      "
    >
      <div>
        <h2
          class="
            md:text-2xl
            text-xl
            font-extrabold
            tracking-tight
            rounded-full
            bg-gradient-to-r
            from-indigo-500
            via-purple-500
            to-pink-500
            text-white text-center
          "
        >
          PRISMA
        </h2>
        <dl
          class="
            mt-16
            grid grid-cols-1
            gap-x-6 gap-y-10
            sm:grid-cols-2 sm:gap-y-16
            lg:gap-x-8
          "
        >
          <div
            v-for="detail in prismaDetails"
            :key="detail.name"
            class="border-t border-gray-200 pt-4"
          >
            <dt class="font-medium text-gray-900">{{ detail.name }}</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ detail.description }}</dd>
          </div>
        </dl>
      </div>
      <div
        class="
          grid
          md:grid-cols-2
          grid-rows-2
          gap-4
          grid-cols-1
          sm:gap-6
          lg:gap-8
        "
      >
        <img
          src="../assets/img/prisma/corner_sample.jpeg"
          alt=""
          class="bg-gray-100 rounded-lg max-h-56 mx-auto"
        />
        <img
          src="../assets/img/prisma/finish.png"
          alt=""
          class="bg-gray-100 rounded-lg max-h-56 mx-auto"
        />
        <img
          src="../assets/img/prisma/shape.png"
          alt=""
          class="bg-gray-100 rounded-lg max-h-56 mx-auto"
        />
        <img
          src="../assets/img/prisma/corner_sample_2.jpeg"
          alt=""
          class="bg-gray-100 rounded-lg max-h-56 mx-auto"
        />
      </div>
    </div>
  </div>
  <div class="border-b-2 max-w-5xl mx-auto mt-6"></div>

  <!-- welded steel -->
  <div class="bg-white">
    <div
      class="
        max-w-2xl
        mx-auto
        py-24
        px-4
        grid
        items-center
        grid-cols-1
        gap-y-16 gap-x-8
        sm:px-6 sm:py-32
        lg:max-w-7xl lg:px-8 lg:grid-cols-2
      "
    >
      <div>
        <h2
          class="
            md:text-2xl
            text-xl
            font-extrabold
            tracking-tight
            bg-gray-600
            text-white text-center
          "
        >
          <!-- <img
            src="../assets/img/welded_steel/screw.svg"
            alt=""
            class="w-12 h-12 "
          /> -->
          WELDED STEEL
        </h2>
        <dl
          class="
            mt-16
            grid grid-cols-1
            gap-x-6 gap-y-10
            sm:grid-cols-2 sm:gap-y-16
            lg:gap-x-8
          "
        >
          <div
            v-for="detail in steelDetails"
            :key="detail.name"
            class="border-t border-gray-200 pt-4"
          >
            <dt class="font-medium text-gray-900">{{ detail.name }}</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ detail.description }}</dd>
          </div>
        </dl>
      </div>
      <div
        class="
          grid
          md:grid-cols-2
          grid-rows-2
          gap-4
          grid-cols-1
          sm:gap-6
          lg:gap-8
        "
      >
        <img
          src="../assets/img/welded_steel/brushed_steel.jpeg"
          alt=""
          class="bg-gray-100 rounded-lg max-h-56 mx-auto"
        />
        <img
          src="../assets/img/welded_steel/flat_iron.jpeg"
          alt=""
          class="bg-gray-100 rounded-lg max-h-56 mx-auto"
        />
        <img
          src="../assets/img/welded_steel/corner_1.jpeg"
          alt=""
          class="bg-gray-100 rounded-lg max-h-56 mx-auto"
        />
        <img
          src="../assets/img/welded_steel/welded_canvas.jpeg"
          alt=""
          class="bg-gray-100 rounded-lg max-h-56 mx-auto"
        />
      </div>
    </div>
  </div>
  <Contact />
</template>

<script>
import { CheckIcon } from '@heroicons/vue/outline'
import Contact from '../components/Contact.vue'

const features = [
  {
    name: 'Professional guidance for your project',
    description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Massive selection of frame stock',
    description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
  },
  {
    name: 'Multiple glass options',
    description: 'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
  },
  {
    name: 'Custom material ordering',
    description: 'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
  },
  {
    name: 'Lorem ipsum',
    description: 'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
  },
  {
    name: 'Lorem ipsum',
    description: 'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
  },
  {
    name: 'Lorem ipsum',
    description: 'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
  },
  {
    name: 'Lorem ipsum',
    description: 'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
  },
]

const prismaDetails = [
  { name: 'Style', description: '' },
  { name: 'Material', description: 'Acrylic' },
  { name: 'Dimensions', description: '40" x 30" x 5"' },
  { name: 'Finish', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Includes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Considerations', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
]

const steelDetails = [
  { name: 'Style', description: '' },
  { name: 'Material', description: 'Steel - Iron - Aluminum' },
  { name: 'Dimensions', description: '40" x 30" x 5"' },
  { name: 'Finish', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Includes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Considerations', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
]

export default {

  components: {
    CheckIcon, Contact
  },
  setup() {
    return {
      features,
      prismaDetails,
      steelDetails
    }
  },
}
</script>