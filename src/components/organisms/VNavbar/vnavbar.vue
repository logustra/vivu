<template>
  <div class="v-navbar">
    <RouterLink :to="{ name: 'home.index' }">
      home
    </RouterLink>
    <RouterLink :to="{ name: 'about.index' }">
      about
    </RouterLink>
  </div>
</template>

<style lang="scss">
.v-navbar {
  text-align: center;
}
</style>
