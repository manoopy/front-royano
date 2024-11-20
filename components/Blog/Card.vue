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
  <div class="flex gap-2">
    <ULink to="/blog/1">
      <NuxtImg
        src="https://sokanacademy.s3.ir-thr-at1.arvanstorage.ir/30152/conversions/SSH-vs-HTTPS-small.webp"
        class="w-48 h-28 border-2 rounded-xl"
      />
    </ULink>
    <div class="flex-1 flex flex-col justify-center border-2 rounded-xl p-4">
      <ULink to="/blog/1" class="font-bold mb-4">
        پروتکل پوسته امن یا SSH چه تفاوتی با HTTPS دارد؟
      </ULink>

      <div class="flex gap-x-3">
        <ULink to="/">
          <div class="flex gap-x-1">
            <UIcon name="i-solar-user-rounded-broken" />
            <span class="text-xs">حمید رضا ثابتی</span>
          </div>
        </ULink>

        <ULink to="/">
          <div class="flex gap-x-1">
            <UIcon name="i-solar-layers-broken" />
            <span class="text-xs">اینترنت و شبکه</span>
          </div>
        </ULink>

        <ULink to="/">
          <div class="flex gap-x-1">
            <UIcon name="i-solar-clock-square-broken" />
            <span class="text-xs">۸ دقیقه</span>
          </div>
        </ULink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
