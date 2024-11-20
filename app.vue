<script lang="ts" setup></script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* Blur */
.blur-enter-active,
.blur-leave-active {
  @apply transition-all;
}
.blur-enter-from,
.blur-leave-to {
  @apply opacity-0 blur-lg;
}
</style>
