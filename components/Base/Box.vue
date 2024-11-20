<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  icon: {
    type: String,
    required: true,
  },

  moreLink: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="border-x-2 border-y-8 rounded-3xl shadow-xl">
    <div class="flex items-center gap-4 mx-6">
      <div
        class="flex items-center gap-x-3 w-max bg-gray-100 rounded-b-3xl py-3 px-6"
      >
        <span
          class="size-7 skew-y-6 skew-x-6 -me-9 bg-primary/50 rounded-md"
        ></span>
        <UIcon :name="props.icon" class="size-8" />
        <p class="text-xl font-bold">{{ props.title }}</p>
      </div>

      <template v-if="props.moreLink">
        <UButton
          color="gray"
          variant="ghost"
          icon="i-solar-arrow-left-broken"
          label="مشاهده همه"
          trailing
          class="ms-auto"
        />
      </template>
    </div>

    <div class="px-6 py-8">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
