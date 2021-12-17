<template>
<body>

<div v-show="OK_TRUE" class="push" @click="add_new()">
        <div class="push_content">
        
        <div class="push_content_news" >
          <i class="bi bi-plus-circle" style="padding-right: 10px;"></i>
            <span>Добавить новость</span>     
        </div>
        </div>
    </div>

    <div v-show="add_news_TRUE" class="add_news" >
        <!-- <div class="add_news_content"> -->
        
        <div class="add_content_news">
          <h4>Форма добавления новости <i class="bi bi-x-lg close_icon" @click="add_news_TRUE = !add_news_TRUE"></i></h4>
          
            <span>Добавление новой записи</span> 
            <p ><button type="button" class="osnovnButton" @click="logout()" >Сохранить</button></p>    
        </div>
        <!-- </div> -->
    </div>

  <div class="news" >

<div v-show="Block_news_TRUE">

<div class="block_news color_DB">
  <h4>Заголовок</h4>
  <hr class="HR_news">
  <p class="block_news_P">Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Равным образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.
Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия.
Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.</p>  
<hr  class="HR_news">
  <p class="data_news">21.07.2021</p>
</div>


<hr class="hrSt">


<div class="block_news color_DB">
  <h4>Заголовок</h4>
  <hr class="HR_news">
  <p class="block_news_P">Товарищи! сложившаяся структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития. Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.
Равным образом консультация с широким активом требуют определения и уточнения модели развития. С другой стороны рамки и место обучения кадров способствует подготовки и реализации модели развития. Равным образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.
С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия. Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.</p>  
<hr  class="HR_news">
  <p class="data_news">21.07.2021</p>
</div>


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
add_news_TRUE : false,
Block_news_TRUE : true,
        }         
    }

token = "";

OK_TRUE = "false"
add_news_TRUE = "false"
Block_news_TRUE = "true"

async mounted() {
    this.token = localStorage.token;

    const result = await this.$store.dispatch("me_inform");
    console.log(result.isAdmin)

    if (result.isAdmin === true) {
            this.OK_TRUE = "true"
            console.log(this.OK_TRUE)            
        }
  }

  async add_new() {
    this.add_news_TRUE = "true"
    // this.Block_news_TRUE = "false"
    // this.OK_TRUE = 'false'
    // console.log(this.Block_news_TRUE)
  // alert ("rtyu")
}
}


</script>


