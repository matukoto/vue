<template>
  <div class="home">
    <p>挨拶した回数 : {{ count }}回</p>
    <p>{{ greetText }}</p>
    <p v-if="isRegulars">いつもありがとうございます</p>
    <p>
      <MyButton class="my-button" :greet="greetText" @click="onMyButtonClicked"
        >挨拶する</MyButton
      >
    </p>
    <p>
      <ResetButton v-model="greetText"></ResetButton>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
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
  public greetText = "Hello";

  public get isRegulars(): boolean {
    return this.count > 5;
  }

  @Watch("count")
  public countChanged() {
    if (this.count === 5) {
      alert("あなたは常連です");
    }
  }

  public onMyButtonClicked(count: number) {
    this.count = count;
    this.greetText = "こんにちは";
  }
}
</script>
