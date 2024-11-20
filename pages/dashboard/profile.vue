<script lang="ts" setup>
const state = reactive({
  email: undefined,
  phoneNumber: undefined,
});

async function onSubmit() {
  console.log("asdf");
}
</script>

<template>
  <BaseBox title="پروفایل" icon="i-solar-user-rounded-broken">
    <UForm :state="state" class="space-y-8" @submit="onSubmit">
      <div class="grid grid-cols-3 gap-4">
        <UFormGroup label="ایمیل" name="email">
          <UInput
            dir="ltr"
            v-model="state.email"
            size="lg"
            type="email"
            placeholder="sample@email.com :مثال"
          />
        </UFormGroup>

        <UFormGroup label="شماره تلفن همراه" name="phone-number">
          <UInput
            dir="ltr"
            v-model="state.phoneNumber"
            size="lg"
            type="tel"
            placeholder="مثلا: *********09"
          />
        </UFormGroup>

        <UFormGroup label="ایمیل" name="email">
          <UInput
            dir="ltr"
            v-model="state.email"
            size="lg"
            type="email"
            placeholder="sample@email.com :مثال"
          />
        </UFormGroup>

        <UFormGroup label="شماره تلفن همراه" name="phone-number">
          <UInput
            dir="ltr"
            v-model="state.phoneNumber"
            size="lg"
            type="tel"
            placeholder="مثلا: *********09"
          />
        </UFormGroup>

        <UFormGroup label="ایمیل" name="email">
          <UInput
            dir="ltr"
            v-model="state.email"
            size="lg"
            type="email"
            placeholder="sample@email.com :مثال"
          />
        </UFormGroup>

        <UFormGroup label="شماره تلفن همراه" name="phone-number">
          <UInput
            dir="ltr"
            v-model="state.phoneNumber"
            size="lg"
            type="tel"
            placeholder="مثلا: *********09"
          />
        </UFormGroup>

        <UFormGroup label="ایمیل" name="email">
          <UInput
            dir="ltr"
            v-model="state.email"
            size="lg"
            type="email"
            placeholder="sample@email.com :مثال"
          />
        </UFormGroup>

        <UFormGroup label="شماره تلفن همراه" name="phone-number">
          <UInput
            dir="ltr"
            v-model="state.phoneNumber"
            size="lg"
            type="tel"
            placeholder="مثلا: *********09"
          />
        </UFormGroup>
      </div>

      <UButton block size="lg" type="submit" label="ثبت" />
    </UForm>
  </BaseBox>
</template>

<style lang="scss" scoped></style>
