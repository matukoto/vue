<template>
  <button @click="onClick">test</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MyButton extends Vue {
  @Prop()
  public greet?: string;

  public onClick() {
    alert(this.greet);
  }
}
</script>
