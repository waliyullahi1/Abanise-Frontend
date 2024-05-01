<template>
  <NuxtNotifications position="top right" :speed="500" />
  <NuxtLayout>
    <UContainer>
      <NuxtPage />
    </UContainer>

    <UNotifications />
    <NuxtPage/>
  </NuxtLayout>
</template>
