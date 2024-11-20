<script lang="ts" setup></script>

<template>
  <div class="sticky top-28 border-2 rounded-xl">
    <p class="text-lg font-bold text-center border-b-2 py-4 px-2">
      جمع‌آوری داده از اینترنت با پایتون
    </p>

    <div class="flex flex-col gap-y-4 p-4">
      <div class="flex items-center gap-x-2">
        <UIcon
          name="i-solar-chat-round-video-broken"
          class="size-6 text-sky-500"
        />
        <p class="text-sm">3:20 ساعت آموزش ویدیویی</p>
      </div>

      <div class="flex items-center gap-x-2">
        <UIcon name="i-solar-layers-broken" class="size-6 text-sky-500" />
        <p class="text-sm">برنامه نویسی، پایتون</p>
      </div>
    </div>

    <div class="flex items-end justify-center gap-x-2 mt-6 mb-3">
      <span class="text-2xl font-bold">126 هزار</span>
      <NuxtImg src="images/toman.svg" class="size-6" />
    </div>

    <div class="px-4 pb-4">
      <UButton block size="xl" label="خرید دوره" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
