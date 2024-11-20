<script lang="ts" setup></script>

<template>
  <BaseBox title="مقاله های من" icon="i-solar-documents-broken">
    <div class="space-y-10">
      <div class="space-y-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
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
