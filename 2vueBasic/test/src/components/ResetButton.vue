<template>
  <button @click="onClick">Reset</button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class ResetButton extends vue {
  @Prop()
  public initialValue!: string;

  @Prop()
  public value!: string;

  @Emit()
  public input(value: string) {
    // 何もしない
  }

  public onClick() {
    this.input(this.initialValue);
  }
}
</script>
