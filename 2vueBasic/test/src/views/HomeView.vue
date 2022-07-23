<template>
  <div class="home">
    <MyButton :greet="greetText"></MyButton>
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
}
</script>
