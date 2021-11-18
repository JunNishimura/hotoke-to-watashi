<template>
  <div class="home">
    <div class="home-link">
      <router-link :to="{ name: 'Idea1' }">Idea1</router-link>
      <router-link :to="{ name: 'Idea2' }">Idea2</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    font-size: 1.1618rem;
    color: #fff;
    text-decoration: none;
    margin: 0 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
