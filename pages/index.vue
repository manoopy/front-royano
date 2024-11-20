<script lang="ts" setup>
const categories = [
  {
    title: "هوش مصنوعی",
    icon: "https://sokanacademy.s3.ir-thr-at1.arvanstorage.ir/31557/conversions/back-end-small.webp",
    color: "bg-blue-100",
  },
  {
    title: "پایتون",
    icon: "https://sokanacademy.s3.ir-thr-at1.arvanstorage.ir/31556/conversions/front-end-small.webp",
    color: "bg-red-100",
  },
  {
    title: "بک اند",
    icon: "https://sokanacademy.s3.ir-thr-at1.arvanstorage.ir/31557/conversions/back-end-small.webp",
    color: "bg-green-100",
  },
  {
    title: "فرانت اند",
    icon: "https://sokanacademy.s3.ir-thr-at1.arvanstorage.ir/31556/conversions/front-end-small.webp",
    color: "bg-amber-100",
  },
];
</script>

<template>
  <div class="space-y-36">
    <UContainer>
      <div class="flex flex-row items-center gap-32 mt-24">
        <div class="w-1/2 pb-12">
          <h1 class="text-[2.5rem] font-black">
            از اول آموزش برنامه نویسی تا آخر موفقیت با رویانو
          </h1>

          <div class="flex gap-4 mt-6">
            <div class="w-2/3">
              <UButton block size="xl" label="شروع مسیر یادگیری" />
            </div>

            <div class="w-1/3">
              <UButton
                block
                size="xl"
                color="black"
                variant="outline"
                label="مشاوره تخصصی"
              />
            </div>
          </div>

          <div class="flex gap-4"></div>
        </div>

        <div class="w-1/2">
          <NuxtImg src="/images/programming.svg" class="w-full" />
        </div>
      </div>
    </UContainer>

    <UContainer>
      <BaseSectionTitle title="مجموعه‌های آموزشی" />

      <div class="w-2/3 mx-auto">
        <div class="grid grid-cols-4 gap-4">
          <template v-for="(item, index) in categories" :key="index">
            <ULink to="/">
              <div
                class="flex items-center justify-center gap-x-3 rounded-xl px-3 py-4 transition-transform duration-300 hover:-translate-y-2"
                :class="item.color"
              >
                <NuxtImg :src="item.icon" class="size-10" />
                <span class="text-lg font-bold">{{ item.title }}</span>
              </div>
            </ULink>
          </template>
        </div>
      </div>
    </UContainer>

    <UContainer>
      <BaseSectionTitle title="دوره های آموزشی" more-link="/courses" />

      <div class="grid grid-cols-3 gap-6">
        <BaseCard />
        <BaseCard />
        <BaseCard />
      </div>
    </UContainer>

    <UContainer>
      <BaseSectionTitle title="برترین دانشجوهای سکان‌آکادمی" />

      <div class="grid grid-cols-6 gap-6">
        <template v-for="(item, index) in 6" :key="index">
          <div
            class="flex flex-col items-center justify-content gap-y-2 border-2 rounded-xl p-4"
          >
            <NuxtImg
              src="https://sokanacademy.s3.ir-thr-at1.arvanstorage.ir/33638/conversions/Hossein-thumbnail.webp"
              class="size-14 rounded-lg"
            />
            <p class="text-sm font-bold">حسین عابدی</p>
            <p class="text-sm">مدرسه شهید شهریاری</p>
          </div>
        </template>
      </div>
    </UContainer>

    <UContainer>
      <div class="w-3/4 mx-auto">
        <BaseSectionTitle title="وبلاگ، مقاله‌های تخصصی" more-link="/blog" />

        <div class="flex flex-col gap-8">
          <template v-for="(item, index) in 6" :key="index">
            <BlogCard />
          </template>
        </div>
      </div>
    </UContainer>

    <UContainer>
      <div class="w-2/3 mx-auto">
        <BaseSectionTitle title="نظرات شما" />

        <div class="flex items-center gap-8">
          <div class="flex flex-col gap-y-4">
            <UButton
              icon="i-solar-arrow-up-broken"
              size="lg"
              color="gray"
              padded
              variant="soft"
            />

            <UButton
              icon="i-solar-arrow-down-broken"
              size="lg"
              color="gray"
              padded
              variant="soft"
            />
          </div>

          <div class="border-2 rounded-xl p-6">
            <div class="flex items-center gap-x-4 mb-5">
              <UAvatar
                size="xl"
                src="https://avatars.githubusercontent.com/u/739984?v=4"
                alt="Avatar"
              />
              <p class="text-lg font-bold">محمد علی نورمحمدی</p>
            </div>
            <p>
              خیلی ممنون از توضیحات دقیق و عالی👍🏻 قبلا کار کردم باهاش و به نظر
              جامع‌ترین مرجع فارسی برای الستیک اینجا باشه
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style lang="scss" scoped></style>
