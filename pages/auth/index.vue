<script lang="ts" setup>
definePageMeta({
  layout: "auth",
});

const isVerify = ref(false);

const state = reactive({
  email: undefined,
  verifyCode: undefined,
});

async function onSubmit() {
  isVerify.value = true;
}
</script>

<template>
  <div class="flex">
    <div class="w-2/6 h-screen py-20 px-12">
      <ULink to="/">
        <NuxtImg src="/images/logo.png" class="w-36 mb-14" alt="Logo" />
      </ULink>

      <div>
        <h1 class="text-2xl font-bold">ورود/ثبت نام با ایمیل</h1>
        <p class="mt-4 mb-14">
          ایمیلی که می‌خواهید برای ورود/ثبت‌نام در رویانو از آن استفاده کنید را
          در کادر زیر وارد کنید:
        </p>

        <UForm :state="state" class="space-y-8" @submit="onSubmit">
          <UFormGroup label="ایمیل" name="email">
            <UInput
              dir="ltr"
              v-model="state.email"
              size="lg"
              type="email"
              placeholder="sample@email.com :مثال"
              :disabled="isVerify"
            />
          </UFormGroup>

          <template v-if="isVerify">
            <UFormGroup label="کد تایید" name="verify-code">
              <UInput
                dir="ltr"
                v-model="state.verifyCode"
                size="lg"
                type="number"
              />
            </UFormGroup>
          </template>

          <UButton block size="lg" type="submit">
            {{ !isVerify ? "مرحله بعدی" : "تایید" }}
          </UButton>
        </UForm>
      </div>
    </div>

    <div class="w-4/6 h-screen">
      <NuxtImg
        src="/images/1.png"
        class="w-full h-full object-cover object-right"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
