<script setup>
  import { ref } from 'vue';
  import { RouterView } from 'vue-router';
  import NavBar from './components/NavBar.vue';

  // NavBar elements associated with an endpoints
  const navElements = [
    {
      id: 0,
      title: 'MEME slideshow',
      is_active: ref(false),
      path: '/meme',
    },
    {
      id: 1,
      title: 'NBA',
      is_active: ref(false),
      path: '/anime',
    },
  ];

</script>

<template>
  <div class="app">
    <NavBar class="navbar" :navElements="navElements"></NavBar>
    <RouterView/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,300&display=swap');

  * {
    font-family: 'Roboto', sans-serif;
  }
  .app {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .navbar {
    margin: 25px 0 50px 0 ;
  }
  .txt_large {
    font-size: 30px;
    font-weight: 500;
    color: #4A148C;
  }
  .is_active {
    color: white !important;
    background-color: #8E24AA;
    border-radius: 10px;
  }
</style>
