<template>
  <div class="main">
    <topHeader></topHeader>
    <topMenu></topMenu>
  </div>
</template>

<script>
import topHeader from "./header.vue";
import topMenu from "./menu.vue";
export default {
  components: { topHeader, topMenu },
  data() {
    return {
      msg: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
