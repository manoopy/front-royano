<script lang="ts" setup></script>

<template>
  <div>
    <UContainer>
      <div class="grid grid-cols-12 gap-12">
        <!-- Content -->
        <div class="col-span-8 space-y-20">
          <!-- Video -->
          <div>
            <video
              src="https://sokanacademy.arvanvod.ir/a5e4oNqm0K/Pv5Egy3p6X/origin_sOApUGgFDyrTkCGWAd4QAjReFiPNpM7oBz0ZZyBd.mp4"
              poster="https://sokanacademy.s3.ir-thr-at1.arvanstorage.ir/32873/conversions/Importing-Web-Data-inPython-small.webp"
              controls
              class="w-full h-96 bg-black rounded-xl"
            ></video>

            <h1 class="text-[2.5rem] font-bold mt-5">
              ۹۷ چیزی که هر برنامه‌نویسی باید بداند
            </h1>
          </div>

          <!-- Intro -->
          <div>
            <BaseSectionTitle
              mode2
              title="معرفی"
              description="آخرین بروزرسانی دوره: 22 آبان 1403"
              icon="s:intro"
            />

            <p>
              پاکسازی (Data Cleaning) و پیش پردازش داده‌ها (Data pre-processing)
              یک امر ضرورى در علم داده است زیرا بدون داده‌هاى تمیز شده، نتایج هر
              مدل تحلیل داده یا یادگیری ماشین ممكن است نادرست باشد.
              <br />
              <br />
              در این دوره آموزشی، با تکنیک‌های ضروری پیش پردازش داده‌ها آشنا شده
              و نحوه شناسایى، تشخیص و اصلاح انواع مشكلات مربوط به پاکسازی
              داده‌ها را در پایتون، از ساده تا پیشرفته را یاد خواهید گرفت.
            </p>
          </div>

          <!-- Headlines -->
          <div>
            <BaseSectionTitle
              mode2
              title="سرفصل‌ها"
              description="6 سرفصل | 41 قسمت"
              icon="s:lessons"
            />

            <CourseHeadLines />
          </div>

          <!-- Teacher -->
          <div>
            <BaseSectionTitle mode2 title="مدرس‌ها" icon="s:user" />

            <UCarousel
              dir="rtl"
              :items="[1, 2]"
              :ui="{
                item: 'basis-full',
                arrows: {
                  wrapper: 'justify-evenly mt-4',
                },
                indicators: {
                  wrapper: 'gap-2 inset-x-1/3 bottom-2',
                  active: 'bg-sky-500 dark:bg-sky-400',
                  inactive: 'bg-gray-200 dark:bg-gray-800',
                },
              }"
              indicators
              arrows
              class="rounded-lg overflow-hidden"
            >
              <template #default="{ item }">
                <div class="flex gap-6 border-2 rounded-xl py-4 px-6">
                  <ULink to="/">
                    <NuxtImg
                      src="https://sokanacademy.s3.ir-thr-at1.arvanstorage.ir/24624/conversions/photo_2023-04-24_15-14-57-(2)-thumbnail.webp"
                      class="size-32 rounded-xl"
                    />
                  </ULink>

                  <div class="flex-1 h-32 flex flex-col justify-between py-1">
                    <p class="font-bold">محمد علی نورمحمدی</p>

                    <p class="line-clamp-2">
                      به عنوان یک توسعه دهنده Frontend، شیفته‌ی ایجاد رابط
                      کاربری زیبا و کاربردی هستم؛ با تمرکز بر همکاری و ارتباط،
                      در محیط های تیمی رشد می کنم و از همکاری با دیگران برای به
                      واقعیت پیوستن پروژه ها لذت می برم. در حال حاضر در سکان
                      آکادمی مشغول به کار هستم. خوره‌ی تکنولوژی و عاشق امتحان
                      کردن چیزهای جدیدم و حل کردن چالش‌ها و مسائل مختلف خوشحالم
                      می‌کنه.
                    </p>

                    <div class="text-left">
                      <UButton
                        variant="soft"
                        size="xs"
                        label="مشاهده پروفایل"
                        to="/"
                      />
                    </div>
                  </div>
                </div>
              </template>

              <template #prev="{ onClick, disabled }">
                <UButton
                  :disabled="disabled"
                  @click="onClick"
                  variant="soft"
                  icon="i-solar-arrow-right-broken"
                />
              </template>

              <template #next="{ onClick, disabled }">
                <UButton
                  :disabled="disabled"
                  @click="onClick"
                  variant="soft"
                  icon="i-solar-arrow-left-broken"
                />
              </template>
            </UCarousel>
          </div>

          <!-- FAQ -->
          <div>
            <BaseSectionTitle mode2 title="سوالات متداول" icon="s:lessons" />

            <BaseFAQ />
          </div>

          <!-- Comments -->
          <div>
            <BaseSectionTitle
              mode2
              title="آخرین گفت‌و‌گو‌های دوره"
              description="۲۹ دیدگاه"
              icon="s:lessons"
            />

            <Comment />
          </div>
        </div>

        <!-- Sidebar -->
        <div class="col-span-4">
          <CourseSidebar />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style lang="scss" scoped></style>
