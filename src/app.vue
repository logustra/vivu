<template>
  <div>
    <div class="text-center">
      <RouterLink :to="{ name: 'home.index' }">
        home
      </RouterLink>
      <RouterLink :to="{ name: 'about.index' }">
        about
      </RouterLink>
    </div>

    <RouterView />
  </div>
</template>
