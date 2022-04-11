<template>
  <div class="bg-gray-100" id="contact">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div
        class="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8"
      >
        <div>
          <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Contact Information
          </h2>
          <div class="mt-3">
            <!-- <p class="text-lg text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p> -->
          </div>
          <div class="mt-9">
            <div class="flex">
              <div class="flex-shrink-0">
                <PhoneIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>+1 (847) 253-9393</p>
              </div>
            </div>
            <div class="mt-6 flex">
              <div class="flex-shrink-0">
                <ClockIcon
                  class="h-6 w-6 mt-8 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p class="mt-1">Mon - Fri: 10am to 5pm</p>
                <p class="mt-1">Sat: 10am to 2pm</p>
                <p class="mt-1">Sun: CLOSED</p>
              </div>
            </div>
            <div class="mt-6 flex">
              <div class="flex-shrink-0">
                <MapIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>
                  <a
                    href="https://www.google.com/search?q=209+S.+Arlington+Heights+Rd.+Arlington+Heights%2C+IL+60005&rlz=1C5CHFA_enUS921US921&oq=209+S.+Arlington+Heights+Rd.+Arlington+Heights%2C+IL+60005&aqs=chrome..69i57j33i22i29i30.1091j0j7&sourceid=chrome&ie=UTF-8"
                  >
                    209 S. Arlington Heights Rd.<br />
                    Arlington Heights, IL 60005
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- partners -->
        <div class="mt-12 sm:mt-16 md:mt-0">
          <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Our Partners
          </h2>

          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div class="mt-8">
              <h3 class="text-2xl text-gray-500">Gary Grana</h3>
              <p class="text-lg text-gray-400">Artist • Woodworker</p>
              <div class="mt-6 flex">
                <div class="flex-shrink-0">
                  <PhoneIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div class="ml-3 text-base text-gray-500">
                  <p>+1 (847) 471-6914</p>
                </div>
              </div>
              <div class="mt-6 flex">
                <div class="flex-shrink-0">
                  <GlobeIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div class="ml-3 text-base text-gray-500">
                  <a href="https://artist.garygrana.com/"
                    >artist.garygrana.com</a
                  >
                </div>
              </div>
              <div class="mt-6 flex">
                <div class="flex-shrink-0">
                  <MailIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div class="ml-3 text-base text-gray-500">
                  <p>Glink95@gmail.com</p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h3 class="text-2xl text-gray-500">Tony Armendariz</h3>
              <p class="text-lg text-gray-400">
                Instruction • Workshops • Commissions
              </p>
              <div class="mt-6 flex">
                <div class="flex-shrink-0">
                  <PhoneIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div class="ml-3 text-base text-gray-500">
                  <p>+1 (847) 971-8669</p>
                </div>
              </div>
              <div class="mt-6 flex">
                <div class="flex-shrink-0">
                  <GlobeIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div class="ml-3 text-base text-gray-500">
                  <a href="http://armendarizart.com/">ArmendarizArt.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MailIcon, PhoneIcon, MapIcon, ClockIcon, GlobeIcon } from '@heroicons/vue/outline'

export default {
  components: {
    MailIcon,
    PhoneIcon,
    MapIcon,
    ClockIcon,
    GlobeIcon
  },
}
</script>