<template>
  <div class="main">
    <top-header></top-header>
    <top-menu @menuChange="menuChange" :currentTab.sync="currentTab"></top-menu>
    <div class="content">
      <scheme v-show="currentTab.id == 1"></scheme>
      <about-us v-show="currentTab.id == 2"></about-us>
      <range v-show="currentTab.id == 3"></range>
      <contact-us v-show="currentTab.id == 4"></contact-us>
    </div>
    <div class="main-bottom">Do What Makes Your Soul Happy @ Seeed studio</div>
  </div>
</template>

<script>
import topHeader from "./header.vue";
import topMenu from "./menu.vue";
import scheme from "./scheme.vue";
import aboutUs from "./aboutUs.vue";
import range from "./range.vue";
import contactUs from "./contactUs.vue";
export default {
  components: {scheme, topHeader, topMenu, aboutUs, range, contactUs },
  data() {
    return {
      msg: "",
      currentTab: {
        id: "1",
        title: "设计案例",
        mark: "case",
        img: require("../assets/ice.png"),
      },
    };
  },
  watch: {
    currentTab: {
      handler(val) {
        console.log(val, "watch");
      },
      deep: true,
    },
  },
  methods: {
    menuChange(data) {
      this.currentTab = data;
    },
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
