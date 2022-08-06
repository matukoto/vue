<template>
  <form @submit.prevent="submitForm">
    <input type="text" placeholder="都市名を英語で入力" />
    <button>Get Weather</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
const city = ref("");
const submitForm = () => {
  emits("submit-form");
};
const emits = defineEmits(["submit-form"]);
</script>
