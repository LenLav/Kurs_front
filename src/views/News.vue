<template>
<body>
  <div class="news" >
    <div>
      <p>Новость 1</p>
    <hr class="hrSt">
    </div>
    
    <div v-show="isElVisible" id="ap">
      <p>Новость 2</p>
    <hr class="hrSt">
    </div>
    
    <div>
      <p>Новость 3</p>
    </div>

    <p><button type="button" class="btn btn-outline-success" @click="click()">Click</button> <br></p>
        <!-- <p><button type="button" class="btn btn-outline-success" v-on:click="visible=!visible">Click2</button> <br></p> -->



 
    
  </div>
</body>  
</template>

<style lang="scss">

</style>



// <script lang="ts">
// import { Component, Vue } from "vue-property-decorator";
// import "bootstrap/dist/css/bootstrap.min.css";

// @Component({
//   components: {
//   },
// })
// export default class Home extends Vue {
  
// }
// </script>


<script>
export default {
  name : 'NewS',
  props : {
    msg: String
  },
  data: () => {
    return{
      isElVisible : true
    }
  },
  methods: {
    click(){
      // let name = this.$store.dispatch("SET_NAME", "имя")      
      // console.log(name);
console.log(this.$store.state.visible1)
      this.$store.commit('CHANGE_VISIBLE1', false)
    console.log(this.$store.state.visible1)
      this.isElVisible = this.$store.state.visible1
      
    }
  }
}
</script>


