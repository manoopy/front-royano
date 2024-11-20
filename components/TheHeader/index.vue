<script lang="ts" setup>
import { useIntersectionObserver } from "@vueuse/core";

const header = ref(null);
const headerIsVisible = ref(false);

const { stop } = useIntersectionObserver(
  header,
  ([{ isIntersecting }], observerElement) => {
    headerIsVisible.value = isIntersecting;
  }
);
</script>

<template>
  <!-- Intersection Target -->
  <div ref="header" class="absolute inset-x-0 top-0 h-4"></div>

  <div
    :class="[
      'sticky top-0 inset-x-0 z-50 mb-12',
      { 'bg-white/70 backdrop-blur-md border-b-2': !headerIsVisible },
    ]"
  >
    <UContainer>
      <div class="flex items-center justify-between gap-4 py-5">
        <ULink to="/">
          <NuxtImg src="/images/logo.png" class="w-28" alt="Logo" />
        </ULink>

        <div class="flex items-center gap-10 mr-20">
          <ULink to="/"> خانه </ULink>
          <ULink to="/courses"> دوره های آموزشی </ULink>
          <ULink to="/blog"> مقاله ها </ULink>
          <ULink to="/"> فن واژه </ULink>
        </div>

        <!-- Space -->
        <div class="mr-auto"></div>

        <UInput
          icon="i-solar-magnifer-broken"
          size="md"
          :trailing="false"
          variant="none"
          placeholder="جستجو..."
          class="bg-gray-100 rounded-xl"
        />

        <UButton
          icon="i-solar-login-2-broken"
          size="md"
          variant="solid"
          color="black"
          label="ورود / ثبت‌نام"
          to="/auth"
        />
      </div>
    </UContainer>
  </div>
</template>

<style lang="scss" scoped></style>
