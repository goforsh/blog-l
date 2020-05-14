<template>
  <div class='l-header'>
    <NavBar class="l-header__menu"></NavBar>
    <section class="l-header__board">
      <IconPortrait :url="url"></IconPortrait>
      <div id="vader"></div>
    </section>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import theaterJS from "theaterjs";
import IconPortrait from '../../components/common/IconPortrait';
export default {
  name: '',
  data(){
    return {
      url:require('../../assets/logo.png')
    }
  },
  components: {
    NavBar,
    IconPortrait
  },
  created(){},
  mounted(){
    var theater = theaterJS();

    theater
      .on("type:start, erase:start", function() {
        // add a class to actor's dom element when he starts typing/erasing
        var actor = theater.getCurrentActor();
        actor.$element.classList.add("is-typing");
      })
      .on("type:end, erase:end", function() {
        // and then remove it when he's done
        var actor = theater.getCurrentActor();
        actor.$element.classList.remove("is-typing");
      });

    theater.addActor("vader");

    theater
      .addScene("vader:我走的", 200, "很慢,",400,"但我", 200, "一直", 200, "在走", 200, "... ")
      
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
 @import "../../assets/font.css";
.l-header {
  height: 500px;
  width: 100%;
  background: url('../../assets/timg.jpeg') no-repeat;
  background-size: 100% 80%;
  background-clip: border-box;
  
  &__menu {
    position:sticky;
    top: 0;
    z-index: 1;
  }

  &__board {
    width: 70%;
    background-color: rgba(230, 244, 249, 0.8);
    border-radius: 5px;
    margin: 0 auto;
    height: 300px;
    position: relative;
    top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .l-header__portrait {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-size: 100% 100%;
    }
    #vader {
      background: linear-gradient(to right, #DF2050, #48456D);
      -webkit-background-clip: text;
      color: transparent;      
      font-size: 25px;
      font-family:hwxk;
    }
  }
}
</style>
