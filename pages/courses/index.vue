<script lang="ts" setup>
const people = ["تست ۱", "تست ۲", "تست ۳", "تست ۴", "تست ۵"];

const state = reactive({
  search: "",
  caregory: "",
  teacher: "",
  level: "",
});

async function onSubmit() {
  console.log(state.search);
}
</script>

<template>
  <div class="space-y-36">
    <UContainer>
      <div class="w-1/2 mx-auto">
        <BaseSectionTitle title="دوره‌های آموزشی" />

        <UForm
          :state="state"
          class="flex items-start gap-x-4 px-10"
          @submit="onSubmit"
        >
          <UFormGroup name="search" class="flex-1">
            <UInput
              v-model="state.search"
              placeholder="در بین دوره‌های آموزشی جست‌وجو کن..."
              size="md"
              variant="none"
              class="bg-gray-200 rounded-xl"
            />
          </UFormGroup>

          <UButton
            square
            color="black"
            icon="i-solar-magnifer-broken"
            size="md"
            type="submit"
          />
        </UForm>

        <div class="grid grid-cols-3 gap-4 mt-8">
          <UFormGroup label="دسته بندی">
            <USelectMenu
              :options="people"
              v-model="state.caregory"
              size="lg"
              variant="none"
              placeholder="انتخاب کنید"
              class="bg-gray-200 rounded-xl"
            />
          </UFormGroup>

          <UFormGroup label="مدرس">
            <USelectMenu
              :options="people"
              v-model="state.teacher"
              size="lg"
              variant="none"
              placeholder="انتخاب کنید"
              class="bg-gray-200 rounded-xl"
            />
          </UFormGroup>

          <UFormGroup label="سطح">
            <USelectMenu
              :options="people"
              v-model="state.level"
              size="lg"
              variant="none"
              placeholder="انتخاب کنید"
              class="bg-gray-200 rounded-xl"
            />
          </UFormGroup>
        </div>
      </div>
    </UContainer>

    <UContainer>
      <BaseSectionTitle title="دوره های آموزشی" />

      <div class="grid grid-cols-3 gap-8">
        <template v-for="(item, index) in 12" :key="index">
          <BaseCard />
        </template>
      </div>

      <div class="w-1/3 mx-auto px-3 mt-16">
        <UButton
          block
          label="مشاهده بیشتر"
          icon="i-solar-alt-arrow-down-broken"
          trailing
          variant="outline"
          color="black"
          size="lg"
        />
      </div>
    </UContainer>
  </div>
</template>

<style lang="scss" scoped></style>
