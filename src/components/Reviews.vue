<template>
  <div class="bg-white max-w-6xl m-auto">
    <div
      class="
        max-w-2xl
        mx-auto
        py-16
        px-4
        sm:py-24 sm:px-6
        lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8
      "
    >
      <div class="lg:col-span-4">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
          Customer Reviews
        </h2>

        <div class="mt-3 flex items-center">
          <div>
            <div class="flex items-center">
              <StarIcon
                v-for="rating in [0, 1, 2, 3, 4]"
                :key="rating"
                :class="[
                  reviews.average > rating
                    ? 'text-yellow-400'
                    : 'text-gray-300',
                  'flex-shrink-0 h-5 w-5',
                ]"
                aria-hidden="true"
              />
            </div>
            <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
          </div>
          <p class="ml-2 text-sm text-gray-900">
            Based on {{ reviews.totalCount }} reviews
          </p>
        </div>

        <div class="mt-6">
          <h3 class="sr-only">Review data</h3>

          <dl class="space-y-3">
            <div
              v-for="count in reviews.counts"
              :key="count.rating"
              class="flex items-center text-sm"
            >
              <dt class="flex-1 flex items-center">
                <p class="w-3 font-medium text-gray-900">
                  {{ count.rating }}<span class="sr-only"> star reviews</span>
                </p>
                <div aria-hidden="true" class="ml-1 flex-1 flex items-center">
                  <StarIcon
                    :class="[
                      count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                      'flex-shrink-0 h-5 w-5',
                    ]"
                    aria-hidden="true"
                  />

                  <div class="ml-3 relative flex-1">
                    <div
                      class="
                        h-3
                        bg-gray-100
                        border border-gray-200
                        rounded-full
                      "
                    />
                    <div
                      v-if="count.count > 0"
                      class="
                        absolute
                        inset-y-0
                        bg-yellow-400
                        border border-yellow-400
                        rounded-full
                      "
                      :style="{
                        width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                      }"
                    />
                  </div>
                </div>
              </dt>
              <dd
                class="ml-3 w-10 text-right tabular-nums text-sm text-gray-900"
              >
                {{ Math.round((count.count / reviews.totalCount) * 100) }}%
              </dd>
            </div>
          </dl>
        </div>

        <div class="mt-10">
          <h3 class="text-lg font-medium text-gray-900">Share your thoughts</h3>
          <p class="mt-1 text-sm text-gray-600">
            Let other customers know about your experience.
          </p>

          <a
            href="https://www.google.com/search?q=grand+frame+inc+arlington+heights+il+google+reviews&rlz=1C5CHFA_enUS921US921&oq=grand+frame+inc+arlington+heights+il+google+reviews&aqs=chrome..69i57.11471j0j9&sourceid=chrome&ie=UTF-8#lrd=0x880fba8d225fa8e1:0x6f2c17f267200639,1,,,"
            class="
              mt-6
              inline-flex
              w-full
              bg-white
              border border-gray-300
              rounded-md
              py-2
              px-8
              items-center
              justify-center
              text-sm
              font-medium
              text-gray-900
              hover:bg-gray-50
              sm:w-auto
              lg:w-full
            "
            >Write a review</a
          >
        </div>
      </div>

      <div class="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
        <h3 class="sr-only">Recent reviews</h3>

        <div class="flow-root">
          <div class="-my-12 divide-y divide-gray-200">
            <div
              v-for="review in reviews.featured"
              :key="review.id"
              class="py-12"
            >
              <div class="flex items-center">
                <img
                  :src="review.avatarSrc"
                  :alt="`${review.author}.`"
                  class="h-12 w-12 rounded-full"
                />
                <div class="ml-4">
                  <h4 class="text-sm font-bold text-gray-900">
                    {{ review.author }}
                  </h4>
                  <div class="mt-1 flex items-center">
                    <StarIcon
                      v-for="rating in [0, 1, 2, 3, 4]"
                      :key="rating"
                      :class="[
                        review.rating > rating
                          ? 'text-yellow-400'
                          : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                  </div>
                  <p class="sr-only">{{ review.rating }} out of 5 stars</p>
                </div>
              </div>

              <div
                class="mt-4 space-y-6 text-base italic text-gray-600"
                v-html="review.content"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <video controls src="../assets/video/barber_shop_clip.mp4" class="mb-10 rounded-md  w-full p-4 justify-center"></video> -->
  </div>
</template>

<script>
import { StarIcon } from '@heroicons/vue/solid'

const reviews = {
  average: 5,
  totalCount: 66,
  counts: [
    { rating: 5, count: 66 },
    { rating: 4, count: 0 },
    { rating: 3, count: 0 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This shop is absolutely perfect. Very nice people, an expansive inventory and excellent craftsmanship. I have gotten multiple art pieces framed here and I plan on having many more done as well!</p>
      `,
      author: 'Matt Hayden',
      avatarSrc:
        'https://lh3.googleusercontent.com/a-/AOh14GjTsKNZv-8gtc8eRzxS-TnoPW0xX0jZ83OtkLx5Uw=w120-h120-p-rp-mo-br100',
    },
    {
      id: 1,
      rating: 5,
      content: `
        <p>Grand Frame does fantastic work! I had two very large prints (36 inches by 55 inches), and they did an amazing job dry mounting and framing them. The art is completely flat and looks great on my wall, and the frames both came with all the mounting hardware that I needed. When I picked up my art, both pieces had been well-bundled in plastic to ensure they'd make it back to my home safely. The owner Matt was always friendly and polite, from when I first brought my pieces in and he walked me through my options to when I picked the art up. I would highly recommend Grand Frame to anyone looking for high-quality framing work.</p>
      `,
      author: 'Jonathan Congdon',
      avatarSrc:
        'https://lh3.googleusercontent.com/a/AATXAJz4e8eh0IQ_VnZnY4cp7wpdIH8P5VV9MtauOAzB=w120-h120-p-rp-mo-ba4-br100',
    },
    {
      id: 1,
      rating: 5,
      content: `
        <p>Five stars isn’t enough to give!!!  I had a gift sent to me from overseas, a pastel portrait and when it arrived it was damaged extensively. Glass, mirror shattered to pieces. I thought for sure it was beyond repair.  I took it to Grand Frame and Matt said to trust him he will fix it.  Well he did more than fix it, he had it brought back to life for me beyond words can ever express.  If you have a picture, portrait, drawing that you thought wasn’t worth saving well don’t give up. Take to Grand Frame Inc and see what they can do!!</p>
      `,
      author: 'Latifa K',
      avatarSrc:
        'https://lh3.googleusercontent.com/a/AATXAJy_C4PhvflMQWdbAGaazNPFaeYOSmrB8a1Gd9GT=w120-h120-p-rp-mo-br100',
    },
  ],
}

export default {
  components: {
    StarIcon,
  },
  setup() {
    return {
      reviews,
    }
  },
}
</script>