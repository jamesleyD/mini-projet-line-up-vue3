<script setup>
  // Props for generating the cards
  const props = defineProps(['author', 'img', 'title']);

</script>

<template>
  <!-- Meme -->
  <div class="meme_container">
    <div class="meme_content_container">
      <h1 class="meme_title"> {{props.title}}</h1>
      <div class="meme_content">
          <img :src="props.img"/>
          <p class="meme_title"> Made by {{props.author}}</p>
      </div>
    </div>
  </div>
</template>

<style>
  .meme_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 19px 30px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    border-radius: 20px;
    max-height: 900px;
  }

  .meme_content_container, .meme_content {
    display: flex;
    flex-direction: column;
  }

  .meme_title {
    font-size: 25px;
    font-weight: 500;
    color: #4A148C;
    text-align: center;
  }
  .meme_content {
    min-width: 100%;
  }

  .meme_content p {
    font-size: 15px;
  }

  .meme_title, .meme_content p, img {
    margin: 10px 10px 10px 10px;
  }

</style>
