<template>
  <div>
    <!-- noem hem niet id="app" tenzij het uw unieke root app is -->
    <h1>{{ msg }}</h1>
    kijk.. dit komt ook mee
    <ul>
      <li v-for="ninjaname in ninjaList">{{ ninjaname }}</li>
    </ul>
  </div>
</template>

<!-- template doesn't show -->

<script>
export default {
  name: "app",
  data() {
    return {
      ninjas: ["Yoshi", "Mario", "John"]
    };
  }
};
</script>
