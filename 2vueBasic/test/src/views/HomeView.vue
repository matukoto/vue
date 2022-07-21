<template>
  <div class="home">
    <MyButton></MyButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import MyButton from "@/components/MyButton.vue"; // @ is an alias to /src

@Component({
  components: {
    MyButton,
  },
})
export default class HomeView extends Vue {}
</script>
