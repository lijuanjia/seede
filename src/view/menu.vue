<template>
  <div class="menu">
    <div class="content">
      <div class="item-menu in-block" v-for="item in tabArr">
        <div
          class="in-block menu-img"
          :style="{ backgroundImage: 'url(' + item.img + ')' }"
        ></div>
        <div
          class="in-block font16"
          :class="item.id == currentTab.id ? 'active' : ''"
          @click="changeTab(item)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentTab: {
      type: Object,
      default: () => {
        return {
          id: "1",
          title: "设计案例",
          mark: "case",
          img: require("../assets/ice.png"),
        };
      },
    },
  },
  data() {
    return {
      tabArr: [
        {
          id: "1",
          title: "设计案例",
          mark: "case",
          img: require("../assets/ice.png"),
        },
        {
          id: "2",
          title: "工作室简介",
          mark: "desc",
          img: require("../assets/ren.png"),
        },
        {
          id: "3",
          title: "服务范围",
          mark: "range",
          img: require("../assets/hand.png"),
        },
        {
          id: "4",
          title: "联系我们",
          mark: "we",
          img: require("../assets/poster.png"),
        },
      ],
    };
  },
  methods: {
    changeTab(item) {
      console.log(item);
      // this.currentTab = item;
      this.$emit("update:currentTab", item);
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .menu {
    display: none;
  }
}
@media screen and (min-width: 500px) {
  .menu {
    position: fixed;
    width: 1440px;
    height: 130px;
    top: 150px;
    overflow: hidden;
    background: #fafafa;
    z-index: 1;
    .content {
      padding-left: 80px;
      text-align: left;
      // display: flex;
      // justify-content: flex-start;
      // align-items: center;
      // width: 1440px;
    }
    .item-menu {
      height: 130px;
      line-height: 130px;
      margin-right: 80px;

    }
    .menu-img {
      background-repeat: no-repeat;
      background-position: center;
      background-blend-mode: darken;
      width: 56px;
      height: 50px;
      vertical-align: middle;
    }
    .font16 {
      font-family: "Source Han Sans CN";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #000000;
      cursor: pointer;
    }
  }
}
.active {
  color: #53dfe0 !important;
}
</style>
