<template>
  <div class="top">
    <Promo/>
    <Header/>
  </div>

  <router-view></router-view>

  <Questions :questions="this.questions"/>
  <Footer/>
  <Terms/>
</template>

<script>
import Promo from "@/components/common/MainPromo/MainPromo.vue";
import Header from "@/components/common/MainHeader/MainHeader.vue";
import Footer from "@/components/common/AppFooter/AppFooter.vue";
import Terms from "@/components/common/AppTerms/AppTerms.vue";
import Questions from "@/components/common/AppQuestions/AppQuestions.vue";

import {questions} from '@/static/home.js';


export default {
  name: 'HomePage',
  components: {
    Promo,
    Header,
    Footer,
    Terms,
    Questions,
  },
  data() {
    return {
      questions,
    };
  },
};
</script>

<style scoped lang="scss">
.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 666;
}
</style>
