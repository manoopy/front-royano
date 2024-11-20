<script lang="ts" setup>
const props = defineProps({
  mode2: {
    type: Boolean,
    default: false,
  },

  title: {
    type: String,
    required: true,
  },

  moreLink: {
    type: String,
    default: "",
  },

  description: {
    type: String,
    default: "",
  },

  icon: {
    type: String,
    default: "",
  },

  iconSize: {
    type: String,
    default: "2rem",
  },
});
</script>

<template>
  <template v-if="!props.mode2">
    <div class="relative flex items-center mb-16">
      <div class="flex items-center gap-x-4 mx-auto">
        <div class="h-2 w-9 bg-gray-300 rounded-full"></div>
        <p class="text-3xl font-black">{{ props.title }}</p>
        <div class="h-2 w-9 bg-gray-300 rounded-full"></div>
      </div>

      <!-- More -->
      <template v-if="moreLink">
        <div class="absolute left-0">
          <UButton
            block
            size="md"
            color="black"
            variant="outline"
            icon="i-solar-arrow-left-broken"
            label="مشاهده همه"
            trailing
            :to="props.moreLink"
          />
        </div>
      </template>
    </div>
  </template>

  <template v-else>
    <div class="flex flex-row items-center gap-x-6 mb-10">
      <div class="flex items-center gap-x-4">
        <Icon :name="props.icon" :size="props.iconSize" />
        <p class="text-xl font-bold">{{ props.title }}</p>
      </div>

      <div class="flex-1 h-1 bg-gray-200 rounded-full"></div>

      <template v-if="description">
        <p class="text-sm">{{ props.description }}</p>
      </template>
    </div>
  </template>
</template>

<style lang="scss" scoped></style>
