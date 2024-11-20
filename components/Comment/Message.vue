<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },

  reply: {
    type: Boolean,
    default: false,
  },
});

const writeBoxStatus = ref(false);

const toggleWriteBox = () => {
  writeBoxStatus.value = !writeBoxStatus.value;
};
</script>

<template>
  <div class="space-y-3">
    <div
      class="relative rounded-xl py-3 px-5"
      :class="[!props.reply ? 'bg-gray-200' : 'reply bg-white border-2 mr-20']"
    >
      <div class="flex items-center gap-x-2">
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
        />
        <p class="text-sm font-bold">Rahele Kakavand راهله کاکاوند</p>
      </div>

      <div class="mt-4 mb-10">
        <template v-if="props.reply">
          <div
            class="flex items-center gap-x-4 bg-sky-100 rounded-full px-4 pt-1.5 pb-0.5 mb-5"
          >
            <UIcon name="i-solar-square-share-line-broken" class="mb-0.5" />
            <p class="text-sm">Rahele Kakavand راهله کاکاوند</p>
          </div>
        </template>

        <p>
          {{ props.data.message }}
        </p>
      </div>

      <div class="flex items-center gap-x-4">
        <span class="text-xs font-semibold">19 اردیبهشت 1402</span>

        <UButton
          class="ms-auto"
          variant="ghost"
          :color="!writeBoxStatus ? 'sky' : 'red'"
          :icon="
            !writeBoxStatus
              ? 'i-solar-square-share-line-broken'
              : 'i-solar-close-square-broken'
          "
          @click="toggleWriteBox"
        />
      </div>

      <template v-if="writeBoxStatus">
        <CommentWriteBox reply />
      </template>
    </div>

    <template v-for="(message, index) in data.replys" :key="index">
      <CommentMessage :data="message" reply />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.reply {
  &::before {
    @apply content-[""] absolute -top-3.5 right-1/2 translate-x-40 z-[-1] bg-gray-300 w-0.5 h-6;
  }

  &::after {
    @apply content-[""] absolute -top-3.5 left-1/2 -translate-x-40 z-[-1] bg-gray-300 w-0.5 h-6;
  }
}
</style>
