<template>
  <div class="home">
    <p>挨拶した回数 : {{ count }}回</p>
    <p>{{ greetText }}</p>
    <p v-if="isRegulars">いつもありがとうございます</p>
    <p>
      <MyButton :greet="greetText" @click="onMyButtonClicked"></MyButton>
    </p>
    <p>
      <ResetButton v-model="greetText"></ResetButton>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyButton from "@/components/MyButton.vue"; // @ is an alias to /src
import ResetButton from "@/components/ResetButton.vue";

@Component({
  components: {
    MyButton,
    ResetButton,
  },
})
export default class HomeView extends Vue {
  public count = 0;
  public isRegulars = false;
  public greetText = "Hello";

  public onMyButtonClicked(count: number) {
    this.count = count;
    if (this.count > 5) {
      this.isRegulars = true;
    }
    this.greetText = "こんにちは";
  }
}
</script>
