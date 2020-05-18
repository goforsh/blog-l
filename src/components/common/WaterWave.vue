<template>
  <div class='l-water'>
      <h1>About Me</h1>
      <h1>About Me</h1>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
.l-water {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    h1 {
        position: absolute;
        color: white;
        font-size: 4rem;
        font-weight: 900;
        top: 10px;
    }
    h1:nth-child(1) {
        color: transparent;
        -webkit-text-stroke: 2px #03a9f4;
    }
    h1:nth-child(2) {
        color: #03a9f4;
        animation: animate 4s ease-in-out infinite;
    }
    @keyframes animate {
        0%, 100% {
            clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
        }
        50% {
            clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
        }
    }
}
</style>
