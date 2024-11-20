<script lang="ts" setup></script>

<template>
  <div class="bg-gradient-to-t from-gray-50 via-blue-100 to-gray-50 mt-32">
    <UContainer>
      <div class="grid grid-cols-5 gap-12 pt-28 pb-56">
        <div class="col-span-3">
          <div>
            <ULink to="/">
              <NuxtImg src="/images/logo.png" class="w-28" alt="Logo" />
            </ULink>

            <p class="mt-4">
              ما در سکان‌آکادمی معتقدیم همه‌ی انسان‌ها حق دارند، به آموزش
              باکیفیت و کم‌هزینه دسترسی آسان داشته باشند و همه‌ی افراد می‌توانند
              با آموزش درست، زندگی فردی و اجتماعی خود را بهتر کنند. با توجه به
              تخصص تیم ما در حوزه‌ی IT و نیاز روزافزون بازار کار به متخصصان این
              حوزه، تولید و عرضه‌ی محتوای مهارت ‌محور و تخصصی را در حوزه‌ی IT
              جدی‌تر دنبال کردیم. در این راه از ابتدای انتخاب مسیر متناسب با
              توانایی و امکانات دانشجو تا یادگیری، تمرین، کسب مهارت تخصصی و
              عمومی، و در نهایت معرفی به بازار کار همراه او هستیم...
            </p>
          </div>
        </div>

        <div>
          <p class="text-lg font-bold mb-5">خدمات سکان آکادمی</p>

          <div class="flex flex-col gap-y-2.5">
            <ULink to="/"> خانه </ULink>
            <ULink to="/"> دوره های آموزشی </ULink>
            <ULink to="/"> مقاله ها </ULink>
            <ULink to="/"> فن واژه </ULink>
          </div>
        </div>

        <div>
          <p class="text-lg font-bold mb-5">دسترسی سریع</p>

          <div class="flex flex-col gap-y-2.5">
            <ULink to="/"> درباره ما </ULink>
            <ULink to="/"> تماس باما </ULink>
            <ULink to="/"> فرصت های شغلی </ULink>
            <ULink to="/"> شرایط و قوانین </ULink>
          </div>
        </div>
      </div>
    </UContainer>

    <div class="relative flex justify-center bg-violet-950 h-2.5">
      <div class="absolute bottom-0.5">
        <p class="font-bld mb-2">
          کلیه حقوق مادی و معنوی این وب‌سایت متعلق به رویانو می باشد.
        </p>

        <div
          class="flex flex-row gap-x-6 w-max mx-auto bg-violet-950 rounded-t-xl py-4 px-5"
        >
          <ULink to="/">
            <NuxtImg
              src="/icons/instagram.svg"
              class="size-9 bg-white rounded-lg p-1"
              alt="Logo"
            />
          </ULink>

          <ULink to="/">
            <NuxtImg
              src="/icons/linkedin.svg"
              class="size-9 bg-white rounded-lg p-1"
              alt="Logo"
            />
          </ULink>

          <ULink to="/">
            <NuxtImg
              src="/icons/linkedin.svg"
              class="size-9 bg-white rounded-lg p-1"
              alt="Logo"
            />
          </ULink>

          <ULink to="/">
            <NuxtImg
              src="/icons/instagram.svg"
              class="size-9 bg-white rounded-lg p-1"
              alt="Logo"
            />
          </ULink>

          <ULink to="/">
            <NuxtImg
              src="/icons/linkedin.svg"
              class="w-9 bg-white rounded-lg p-1"
              alt="Logo"
            />
          </ULink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
