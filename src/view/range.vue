<template>
  <div class="range">
    <div class="web">
      <div class="web-item in-block" v-for="item in caseArr">
        <div class="title">{{ item.nameZh }}</div>
        <div class="title">{{ item.nameEn }}</div>
        <div class="desc">
          <div class="desc-item" v-for="ele in item.descArr">
            {{ ele.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="h5">
      <div class="h5-item" v-for="item in caseArr">
        <div class="title">{{ item.nameZh }}</div>
        <div class="title">{{ item.nameEn }}</div>
        <div class="desc">
          <div class="desc-item" v-for="ele in item.descArr">
            {{ ele.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caseArr: [
        {
          nameZh: "数字化设计",
          nameEn: "UI/UX Design",
          descArr: [
            {
              name: "界面交互设计",
            },
            {
              name: "用户体验优化",
            },
            {
              name: "小程序设计",
            },
            {
              name: "APP应用设计",
            },
            {
              name: "人机交互设计",
            },
          ],
        },
        {
          nameZh: "视觉设计",
          nameEn: "Visual Design",
          descArr: [
            {
              name: "Logo设计",
            },
            {
              name: "VI、KV设计",
            },
            {
              name: "包装设计",
            },
            {
              name: "品牌设计",
            },
            {
              name: "手绘、插画",
            },
            {
              name: "产品外观设计",
            },
          ],
        },
        {
          nameZh: "创意策划",
          nameEn: "Creative Design",
          descArr: [
            {
              name: "品牌策划",
            },
            {
              name: "创意事件策划",
            },
            {
              name: "设计思维工作坊",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.range {
  width: 100%;
  .title {
    font-family: "Source Han Sans CN";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 60px;
    color: #ffffff;
  }
  .desc {
    margin-top: 30px;
    margin-bottom: 40px;
    .desc-item {
      font-family: "Source Han Sans CN";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #ffffff;
    }
  }
}
@media screen and (max-width: 500px) {
  .web {
    display: none;
  }
  .range {
    margin-top: 60px;
  }
  .h5 {
    width: 100%;
    padding: 40px 0;
    background: linear-gradient(
      180deg,
      #3598d0 47.92%,
      rgba(193, 228, 249, 0) 100%
    );
    .h5-item{
      text-align: left;
      margin: 0 35px;
    }
    .title{
      font-size: 40px;
    }
    .desc{
      margin-top: 15px;
    }
  }
}
@media screen and (min-width: 500px) {
  .h5 {
    display: none;
  }
  .range {
    margin-bottom: 66px;
    .web {
      .web-item {
        width: 24%;
        height: 604px;
        margin-right: 40px;
        &:nth-child(3) {
          margin-right: 0;
        }
        padding: 26px 10px 26px 36px;
        text-align: left;
        vertical-align: top;
        background: linear-gradient(
          180deg,
          #3598d0 47.92%,
          rgba(193, 228, 249, 0) 100%
        );
      }
    }
  }
}
</style>
