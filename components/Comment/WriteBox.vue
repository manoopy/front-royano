<script lang="ts" setup>
const props = defineProps({
  reply: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  description: undefined,
});

async function onSubmit() {
  console.log(state.description);
}
</script>

<template>
  <div :class="[!props.reply ? 'border-2 rounded-xl p-6' : 'mt-6']">
    <template v-if="!props.reply">
      <div class="flex items-center gap-x-2 mb-5">
        <UIcon name="i-solar-dialog-2-broken" class="text-sky-400 size-6" />
        <p class="text-lg font-bold">دیدگاه یا پرسش جدید</p>
      </div>
    </template>

    <UForm :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup name="description">
        <UTextarea
          autofocus
          v-model="state.description"
          variant="none"
          :rows="7"
          size="lg"
          placeholder="دیدگاه یا پرسش خود را درباره‌ی این دوره مطرح کنید..."
          class="bg-gray-100 rounded-xl"
        />
      </UFormGroup>

      <UButton label="ارسال دیدگاه" size="lg" type="submit" />
    </UForm>
  </div>
</template>

<style lang="scss" scoped></style>
