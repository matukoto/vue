<template>
  <div class="home">
    <p>{{ greetText }}</p>
    <p>
      <MyButton :greet="greetText" @click="onMyButtonClicked"></MyButton>
    </p>
    <p>
      <ResetButton initialValue="Hello" v-model="greetText"></ResetButton>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyButton from "@/components/MyButton.vue"; // @ is an alias to /src
import ResetButton from "@components/ResetButton.vue";

@Component({
  components: {
    MyButton,
    ResetButton,
  },
})
export default class HomeView extends Vue {
  public greetText = "Hello";

  public onMyButtonClicked() {
    this.greetText = "こんにちは";
  }
}
</script>
