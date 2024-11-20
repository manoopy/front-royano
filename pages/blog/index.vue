<script lang="ts" setup>
const people = ["تست ۱", "تست ۲", "تست ۳", "تست ۴", "تست ۵"];

const state = reactive({
  search: "",
  caregory: "",
  writer: "",
  order: "",
});

async function onSubmit() {
  console.log(state.search);
}
</script>

<template>
  <div class="space-y-36">
    <UContainer>
      <div class="w-1/2 mx-auto">
        <BaseSectionTitle title="وبلاگ، مقاله‌های تخصصی" />

        <UForm
          :state="state"
          class="flex items-start gap-x-4 px-10"
          @submit="onSubmit"
        >
          <UFormGroup name="search" class="flex-1">
            <UInput
              v-model="state.search"
              placeholder="در بین مقاله‌های تخصصی جست‌وجو کن..."
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

          <UFormGroup label="نویسنده">
            <USelectMenu
              :options="people"
              v-model="state.writer"
              size="lg"
              variant="none"
              placeholder="انتخاب کنید"
              class="bg-gray-200 rounded-xl"
            />
          </UFormGroup>

          <UFormGroup label="مرتب سازی">
            <USelectMenu
              :options="people"
              v-model="state.order"
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
      <div class="w-3/4 mx-auto">
        <div class="flex flex-col gap-8">
          <template v-for="(item, index) in 12" :key="index">
            <BlogCard />
          </template>
        </div>

        <div class="w-1/2 mx-auto px-3 mt-16">
          <UPagination
            :prev-button="{
              icon: 'i-solar-arrow-left-broken',
              label: 'قبلی',
              color: 'gray',
            }"
            :next-button="{
              icon: 'i-solar-arrow-right-broken',
              trailing: true,
              label: 'بعدی',
              color: 'gray',
            }"
            size="lg"
            :model-value="1"
            :total="100"
          />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style lang="scss" scoped></style>
