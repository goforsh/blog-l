<template>
  <div>
    <div class='l-about'>
      <WaterWave></WaterWave>
      <div class='l-about__word'>
        <p>
          三十当立而未立的前端工程师，水平如题，一瓶不满，半瓶晃荡
        </p>
        <p>
          但愿学有所成        
        </p>
      </div>     
    </div>
    <CommentBoard :title="'吐槽一下'"></CommentBoard>
  </div>
      <!-- <div class="wave wave5"></div>
<div class="wave wave4"></div>
<div class="wave wave3"></div>
<div class="wave wave2"></div>
<div class="wave wave1"></div>
<div class="wave wave0"></div> -->
</template>

<script>
import WaterWave from '../../components/common/WaterWave';
import CommentBoard from '../../components/common/CommentBoard';
export default {
  name: '',
  data(){
    return {}
  },
  components: {
    WaterWave,
    CommentBoard
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
.l-about {
  width: 90%;
  margin: 0 auto 10px;
  background-color: #fff;
  border-radius: 5px;
  transition: all .3s linear;
  position: relative;
  
  &:hover {
      box-shadow:0 15px 30px rgba(0,0,0,.1);
      transform: translateY(-2px);   
  }
  &__word {
    padding: 150px 10px 10px;
    text-indent: 2em;
    line-height: 2em;
    font-size: .8rem;
    color: rgb(68, 68, 68);
  }
}








// .wave{
//   position:absolute;
//   top:calc((100% - 30px)/2);
//   left:calc((100% - 30px)/2);
//   width:30px;
//   height:30px;
//   border-radius:300px;
// }
// .wave0{
//   background:#f00;
//   z-index:2;
//   background-size:auto 106%;
//   animation:w 1s forwards;
// }
// .wave1{
//   background:#d00;
//   z-index:3;
//   animation:w 1s .2s forwards;
// }
// .wave2{
//   background:#b00;
//   z-index:4;
//   animation:w 1s .4s forwards;
// }
// .wave3{
//   background:#900;
//   z-index:5;
//   animation:w 1s .5s forwards;
// }
// .wave4{
//   background:#700;
//   z-index:6;
//   animation:w 1s .8s forwards;
// }
// .wave5{
//   background:#500;
//   z-index:7;
//   animation:w 1s 1s forwards;
// }
// @keyframes w{
//   0%{
//     top:calc((100% - 30px)/2);
//     left:calc((100% - 30px)/2);
//     width:30px;
//     height:30px;
//   }
//   100%{
//     top:calc((100% - 300px)/2);
//     left:calc((100% - 300px)/2);
//     width:300px;
//     height:300px;
//   }
// }
</style>
