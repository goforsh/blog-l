<template>
  <div class='l-header'>
    <NavBar class="l-header__menu"></NavBar>
    <section class="l-header__board">
      <IconPortrait :url="url"></IconPortrait>
      <div id="vader"></div>
    </section>
    <NavMobile class="l-header__mobile"></NavMobile>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import theaterJS from "theaterjs";
import IconPortrait from '../../components/common/IconPortrait';
import NavMobile from './NavBar/NavMobile';
export default {
  name: '',
  data(){
    return {
      url:require('../../assets/pic/por.jpg')
    }
  },
  components: {
    NavBar,
    IconPortrait,
    NavMobile    
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
  background: url('../../assets/pic/fate.jpg') no-repeat;
  background-size: 100% 90%;
  background-clip: border-box;
  position: relative;
  
  &__menu {
    position:sticky;
    top: 0;
    z-index: 1;
  }

  &__board {
    width: 70%;
    background-color: rgba(230, 244, 249, 0.8);
    border-radius: 5px;
    height: 300px;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
      font-size: 1.2rem;
      font-family:hwxk;
    }
  }
}
</style>
