<script lang="ts" setup>
const items = [
  {
    label: "Getting Started",
    defaultOpen: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Installation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Theming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Layouts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Components",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Utilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
];
</script>

<template>
  <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
    <template #default="{ item, index, open }">
      <UButton
        color="gray"
        variant="ghost"
        class="border-b border-gray-200 dark:border-gray-700"
        :ui="{
          rounded: 'rounded-none',
          padding: { sm: 'p-3' },
        }"
      >
        <template #leading>
          <span class="size-6 border-b-4 border-blue-400 rounded-full">
            {{ index + 1 }}
          </span>
        </template>

        <span class="truncate">
          {{ item.label }}
        </span>

        <template #trailing>
          <span class="ms-auto">4:25</span>

          <UIcon
            name="i-solar-alt-i-solar-arrow-left-broken"
            class="size-4 ms-6 transform transition-transform duration-200"
            :class="[open && '-rotate-90']"
          />
        </template>
      </UButton>
    </template>

    <template #item="{ item }">
      <p class="p-4">
        {{ item.description }}
      </p>
    </template>
  </UAccordion>
</template>

<style lang="scss" scoped></style>
