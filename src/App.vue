<template>
  <div class='bg'>
    <headerTop></headerTop>
    <section class="bg__middle">
      <router-view class=""></router-view>
      <sectionRight></sectionRight>
    </section>
    <footerBottom></footerBottom>
  </div>
</template>

<script>
import headerTop from "@/components/headertop";
import sectionRight from "@/components/sectionright";
import footerBottom from "@/components/footerbottom";
export default {
  name: '',
  data(){
    return {}
  },
  components: {
    headerTop,
    footerBottom,
    sectionRight
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
 caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
}

  .bg {
    &__middle {
      display: flex;
    }
  }
</style>
