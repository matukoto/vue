<template>
  <WetherTitle />
  <WetherForm />
  <button @click="getWeather">getWetherテスト</button>
</template>

<script lang="ts">
// import WeatherTitle from "@components/WeatherTitle.vue";
// import WetherForm from "@components/WeatherForm.vue";
import axios from "axios";

const getWeather = () => {
  axios
    .get(
      "https://api.weatherapi.com/v1/current.json?key=84f5439c0b48419eb81103125220608&q=London&aqi=no"
    )
    .then((res) => console.log(res));
};
</script>
//
<style></style>
