<script lang="ts" setup>
const links = [
  [
    {
      label: "داشبرد",
      icon: "i-solar-home-angle-2-broken",
      to: "/dashboard",
      exact: true,
    },
    {
      label: "پروفایل",
      icon: "i-solar-user-rounded-broken",
      to: "/dashboard/profile",
    },
    {
      label: "دوره های من",
      icon: "i-solar-video-library-broken",
      to: "/dashboard/courses",
    },
    {
      label: "مقاله های من",
      icon: "i-solar-documents-broken",
      to: "/dashboard/articles",
    },
    {
      label: "آزمون های من",
      icon: "i-solar-checklist-minimalistic-broken",
      to: "/dashboard/exams",
    },
    {
      label: "دیدگاه های من",
      icon: "i-solar-dialog-2-broken",
      to: "/dashboard/comments",
    },
  ],
  [
    {
      label: "تنظیمات",
      icon: "i-solar-settings-broken",
      to: "/dashboard/settings",
    },
    {
      label: "خروج از حساب کاربری",
      icon: "i-solar-logout-2-broken",
    },
  ],
];
</script>

<template>
  <UContainer>
    <div class="grid grid-cols-12 gap-12">
      <div class="col-span-3 space-y-6">
        <div class="shadow-xl rounded-xl p-4">
          <div
            class="flex items-center justify-center size-24 bg-gray-100 border-2 border-b-8 border-purple-950 rounded-xl shadow-xl mx-auto"
          >
            <UIcon name="i-solar-user-rounded-broken" class="size-16" />
          </div>

          <p class="text-lg font-bold text-center my-4">محمد علی نورمحمدی</p>

          <UVerticalNavigation :links="links" />
        </div>
      </div>

      <div class="col-span-9">
        <NuxtPage />
      </div>
    </div>
  </UContainer>
</template>

<style lang="scss" scoped></style>
