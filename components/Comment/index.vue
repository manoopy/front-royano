<script lang="ts" setup>
const comments = [
  {
    message:
      "این قسمت خوب توضیح داده نشده و کد نوشته شده با کدهای بخشهای قبلی متفاوته",
    replys: [
      {
        message: "کدهای بخشهای قبلی متفاوته",
        replys: [],
      },

      {
        message: "راست میگه",
        replys: [],
      },
    ],
  },
];
</script>

<template>
  <div class="space-y-4">
    <CommentWriteBox />

    <div class="space-y-3">
      <template v-for="(message, index) in comments" :key="index">
        <CommentMessage :data="message" />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
