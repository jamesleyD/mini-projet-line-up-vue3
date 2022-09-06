<script setup>
  import {
    reactive, ref, computed, onMounted,
  } from 'vue';

  import MemeCard from '../components/MemeCard.vue';
  import { getMeme } from '../axios/query';

  // Reactive state that store the actual meme and the history of meme we viewed
  const state = reactive({
    history: [],
    meme: {
      img: '',
      author: 'loading',
      title: 'loading',
    },
  });

  // This cursor is the cursor of the actual slideshow position in the array state.history
  const cursor = ref(0);

  // Caculate if there is a previous meme in the slideshow based on the cursor
  const thereIsAPrevious = computed(() => (cursor.value !== 1));

  // Change the svg arrow color by adding/remove the class: arrow_hover
  function changeColor(event) {
    if (!event.target.classList.contains('arrow_hover')) {
      event.target.classList.add('arrow_hover');
    } else {
      event.target.classList.remove('arrow_hover');
    }
  }

  // Retrieve a new random meme
  async function setMeme() {
    const newMeme = await getMeme();
    state.history.push(newMeme);
    cursor.value = state.history.length;
    state.meme = newMeme;
  }

  // return to previous()
  function previous() {
    cursor.value -= 1;
    const previousMeme = state.history[cursor.value - 1];
    state.meme = previousMeme;
  }

  // go to the next meme or create a new one if there is no next
  function next() {
    if (cursor.value !== state.history.length) {
      const nextMeme = state.history[cursor.value];
      cursor.value += 1;
      state.meme = nextMeme;
    } else {
      setMeme();
    }
  }

  // create a first meme at when the vue is mount
  onMounted(() => {
    setMeme();
  });

</script>

<template>
  <div class="slideshow">
    <!-- Previous -->
    <img
        src="../assets/icon/left-arrow.svg"
        alt="left-arrow" class="arrow"
        @mouseover="changeColor"
        @mouseleave="changeColor"
        v-show="thereIsAPrevious"
        @click="previous"
    />
    <!-- Meme -->
    <MemeCard :img="state.meme.img" :author="state.meme.author" :title="state.meme.title" />
    <!-- Next -->
    <img src="../assets/icon/right-arrow.svg"
        alt="right-arrow.svg" class="arrow"
        @mouseover="changeColor"
        @mouseleave="changeColor"
        @click="next"
    />
  </div>
</template>

<style>
  .slideshow {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .arrow {
    max-height: 80px;
  }
  .arrow_hover {
    filter: invert(14%) sepia(45%) saturate(5717%) hue-rotate(279deg) brightness(111%) contrast(91%);
  }
  .meme_container {
    display: flex;
    max-width: 700px;
    max-height: 900px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 19px 30px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    border-radius: 20px;
  }

  .meme_content_container {
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
    display: flex;
  }

  .meme_content img {
    max-height: 550px;
    border-radius: 10px;
  }
  .meme_content p {
    font-size: 15px;
  }

  .meme_title, .meme_content p, img {
    margin: 10px 10px 10px 10px;
  }

</style>
