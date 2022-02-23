<template>
  <div class="flex p-2 justify-center mt-10">
    <h1 class="p-2">Gallery</h1>
    <button
      @click="handleClick"
      class="
        bg-red-300
        ml-4
        p-2
        rounded-md
        hover:bg-blue-300
        cursor-pointer
      "
    >
      click me
    </button>
  </div>
</template>

<script>
export default {
  setup() {
    const handleClick = () => {
      console.log('hooray')
    }

    return { handleClick }
  }

}
</script>

<style>
</style>

