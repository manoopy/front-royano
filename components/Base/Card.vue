<script lang="ts" setup>
// const props = defineProps({
//   title: {
//     type: String,
//     required: true,
//   },

//   moreLink: {
//     type: String,
//     default: "",
//   },
// });
</script>

<template>
  <div class="overflow-hidden rounded-xl border-2">
    <ULink to="/courses/1">
      <NuxtImg
        src="https://sokanacademy.s3.ir-thr-at1.arvanstorage.ir/33980/conversions/Cleaning-Data-1-small.webp"
        class="w-full h-36 object-cover object-top"
      />
    </ULink>

    <div class="relative bg-white rounded-t-xl border-t-4 pt-2 pb-3 px-4 -mt-2">
      <div class="flex justify-between gap-x-2 mb-4">
        <UButton
          class="flex"
          variant="link"
          label="پیشرفته"
          icon="i-solar-chart-square-broken"
          :padded="false"
        />
        <UButton
          class="flex"
          variant="link"
          label="ویدیویی"
          icon="i-solar-clapperboard-play-broken"
          :padded="false"
        />
        <UButton
          class="flex"
          variant="link"
          label="۴:۵۰ ساعت"
          icon="i-solar-clock-square-broken"
          :padded="false"
        />
      </div>

      <ULink to="/courses/1" class="line-clamp-1 text-lg font-bold">
        آموزش مقدماتی پایتون
      </ULink>

      <div class="flex items-cetner justify-center gap-x-2 mt-8 mb-4">
        <span class="text-2xl font-bold">126 هزار</span>
        <NuxtImg src="images/toman.svg" class="size-6" />
      </div>

      <UButton block size="lg" color="black" label="خرید دوره" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
