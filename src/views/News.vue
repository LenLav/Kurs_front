<template>
<body>

<div v-show="OK_TRUE" class="push" >
        <div class="push_content">
        
        <div class="push_content_news">
          <i class="bi bi-plus-circle" style="padding-right: 10px;"></i>
            <span>Добавить новость</span>     
        </div>
        </div>
    </div>

  <div class="news" >
    <div>
      <p>Новость 1</p>
    <hr class="hrSt">
    </div>
    
    <div>
      <p>Новость 2</p>
    <hr class="hrSt">
    </div>
    
    <div>
      <p>Новость 3</p>
    </div>

  </div>
</body>  
</template>





<script lang="ts">
import {
    Component,
    Vue
} from "vue-property-decorator";
import "bootstrap/dist/css/bootstrap.min.css";

@Component({
    components: {},
})

export default class Home extends Vue {

  data(){
        return {
OK_TRUE: false,
        } 
        
    }

token = "";


OK_TRUE = "false"

async mounted() {
    this.token = localStorage.token;

    const result = await this.$store.dispatch("me_inform");
    console.log(result.isAdmin)

    if (result.isAdmin === true) {
            this.OK_TRUE = "true"
            console.log(this.OK_TRUE)            
        }
  }
}
</script>


