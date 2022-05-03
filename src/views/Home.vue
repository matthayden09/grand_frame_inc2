<template>
  <!-- <div class="w-auto h-96 relative"> -->
    <div>
    <img src="../assets/img/main_banner.png" alt="">
    <iframe 
      id="shoptour-bg"
      class="w-full h-full absolute object-cover z-0"
      src="https://www.youtube.com/embed/fSRkOJnxkXw?controls=0&start=0&autoplay=1&loop=1&playlist=fSRkOJnxkXw&modestbranding=1&playsinline=1&fs=0&enablejsapi=1" title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
    <!-- <iframe
      class="w-full h-full absolute object-cover z-0"
      autoplay
      muted
      loop
      src="https://www.youtube.com/embed/fSRkOJnxkXw"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe> -->
    <!-- <video
      autoplay
      muted
      loop
      src="https://www.youtube.com/embed/fSRkOJnxkXw"
      type=""
      class="w-full h-full absolute object-cover z-0"
    ></video> -->
    <!-- <div
      class="
        text-center
        relative
        z-10
        w-auto
        mx-auto
        py-24
        px-4
        sm:py-24 sm:px-6
        lg:px-8
      "
    >
      <p
        class="
          mt-1
          text-4xl
          font-extrabold
          text-amber-300
          sm:text-5xl sm:tracking-tight
          lg:text-6xl
          font-serif
          uppercase
          contrast-200
        "
      >
        Grand Frame Inc.
      </p>
      <p
        class="
          max-w-xl
          mt-5
          mx-auto
          text-md text-amber-200
          uppercase
          underline
          contrast-200
        "
      >
        family owned since 1974
      </p>
    </div> -->
  </div>
  <ServiceCards />
  <Reviews />
  <Contact />
</template>

<script>
import ServiceCards from '../components/ServiceCards.vue'
import Contact from '../components/Contact.vue'
import Reviews from '../components/Reviews.vue'
import { onMounted } from 'vue'

export default {
  name: 'Home',
  components: { ServiceCards, Contact, Reviews },
  setup() {
    onMounted(() => {
      this.playVideoOnLoad()
    })
  },
  methods: {
    playVideoOnLoad() {
let video = document.getElementById('shoptour-bg')
      video[0].contentWindow.postMessage('{"event":"command", "func":"mute", "args": ""}', '*')
    }
  }
}
</script>
