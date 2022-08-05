<template>
  <form>
    <input type="text" placeholder="都市名を英語で入力" />
    {{ city }}
    <button>Get Weather</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
const city = ref("");
</script>
