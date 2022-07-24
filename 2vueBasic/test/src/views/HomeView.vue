<template>
  <div class="home">
    <p>{{ greetText }}</p>
    <MyButton :greet="greetText" @click="onMyButtonClicked"></MyButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyButton from "@/components/MyButton.vue"; // @ is an alias to /src

@Component({
  components: {
    MyButton,
  },
})
export default class HomeView extends Vue {
  public greetText = "Hello";

  public onMyButtonClicked() {
    this.greetText = "こんにちは";
  }
}
</script>
