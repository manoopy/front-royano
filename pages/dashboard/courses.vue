<script lang="ts" setup></script>

<template>
  <BaseBox title="دوره های من" icon="i-solar-video-library-broken">
    <div class="space-y-10">
      <div class="grid grid-cols-2 gap-6">
        <BaseCard />
        <BaseCard />
        <BaseCard />
        <BaseCard />
        <BaseCard />
      </div>

      <div class="w-1/2 mx-auto">
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
  </BaseBox>
</template>

<style lang="scss" scoped></style>
