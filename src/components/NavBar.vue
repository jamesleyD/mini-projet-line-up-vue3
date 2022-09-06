<!-- eslint-disable no-param-reassign -->
<script setup>
  import { useRouter } from 'vue-router';
  import { onMounted } from 'vue';

  const router = useRouter();

  // Props for generating the nav bar
  const props = defineProps(['navElements']);

  // Switch to the nav bar element vue
  function changeVue(element) {
    console.log(`changing to ${element.title}`);

    props.navElements.forEach((item) => {
      item.is_active.value = false;
    });
    element.is_active.value = true;

    router.push(element.path);
  }

  // TODO
  onMounted(() => {

  });

</script>

<template>
  <div class="flex flex-row">
    <button
        @click="changeVue(element)"
        :key="element.id"
        class="txt_large nav_element"
        :class="{'is_active': element.is_active.value}"
        v-for="element in props.navElements"
    >
      {{ element.title }}
    </button>
  </div>
</template>

<style>
  .nav_element {
    margin:0 40px 0 40px;
    padding: 5px 5px 5px 5px;
  }
</style>
