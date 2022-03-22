<template>
  <div class="about-us">
    <div>
      <img class="wall" :src="wall" alt="" />
    </div>
    <div class="right">
      <div class="title">工作室简介</div>
      <div class="zh">
        兮得是由90后团队组成的设计咨询公司，拥有高等院校留学背景的专业设计人才，和资深的技术顾问，为国内外不同行业领域提供专业的设计解决方案。设计思维为企业不同发展时期遇到的问题提供了新的解决思路，我们坚信好的设计就是好的商业，秉承以用户为中心的设计理念，为客户提供高质量、定制化的设计服务。
      </div>
      <div class="en">
        Seeed is a design consulting company composed of post-90s teams. We have
        professional design talents with overseas study background in colleges
        and senior technical consultants to provide professional design
        solutions for different industries at native and abroad. Design thinking
        provides new solutions to the problems encountered by enterprises in
        different development periods. We firmly believe that good design is
        good business. Adhering to the user-centered design concept, we provide
        customers with high-quality and customized design services.
      </div>
      <div class="originator">
        <div>
          <img class="girl" :src="girl" alt="" />
        </div>
        <div>
          <div class="title">兮得创始人 吴迪 Dee</div>
          <div class="zh">
            2021年的疫情还在反复，在不确定的环境中确定了创立工作室的目标。于是辞掉了IBM设计顾问的工作，在28岁的时候拥有了自己的工作室。从小学习绘画让我积累了深厚的美术功底，中学就读于清华附中美术班，本科毕业于上海同济大学，工业设计系，研究生毕业于英国拉夫堡大学。工作后服务过不同行业、不同领域的全球500强公司。创立兮得的目标就是希望能传递更多设计的价值，让更多人感受到设计的力量。
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
      wall: require("../assets/wall.png"),
      girl: require("../assets/girl.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.title,
.en,
.zh {
  text-align: left;
}
.en,
.zh {
  font-family: "Source Han Sans CN";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
}
.zh {
  margin-bottom: 26px;
}
.title {
  font-family: "Source Han Sans CN";
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  height: 21px;
  line-height: 21px;
  margin-bottom: 20px;
  text-align: left;
  color: #000000;
}
@media screen and (max-width: 500px) {
  .about-us {
    display: block;
    .wall {
      width: 100%;
    }
    .right {
      padding: 20px;
    }
    .girl {
      margin: 20px 0;
    }
    .title {
      margin-bottom: 14px;
    }
  }
}
@media screen and (min-width: 500px) {
  .about-us {
    display: flex;
    justify-content: space-between;
    padding: 0 80px;
    padding-bottom: 100px;
    .wall {
      width: 516px;
      height: 580px;
      margin-right: 40px;
    }
    .originator {
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
    }
    .girl {
      width: 265px;
      height: 198px;
      margin-right: 20px;
    }
    .right {
      position: relative;
    }
  }
}
</style>
