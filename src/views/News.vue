<template>
<body>

    <div v-show="ADMIN" class="push" @click="add_new()">
        <div class="push_content">
            <div class="push_content_news">
                <i class="bi bi-plus-circle" style="padding-right: 10px;"></i>
                <span>Добавить новость</span>
            </div>
        </div>
    </div>

    <div v-show="Push_add_new" class="push">
        <div class="push_content">
            <div class="push_content_true">
                <span>{{info_push}}</span>
                <i class="bi bi-x-circle" style="padding-left: 10px;" @click="ADMIN = !ADMIN"></i>
            </div>
        </div>
    </div>

    <div v-show="question_TRUE" class="add_news">

        <div class="add_content_news" >
            <h4 class="h4_new">Вы уверены, что хотите удалить новость? <i class="bi bi-x-lg close_icon" @click="question_TRUE = !question_TRUE"></i></h4>

            <p><button type="button" class="osnovnButton But_Yes" style="" @click="newDelete()">Да</button>
                <button type="button" class="osnovnButton But_No" style="" @click="question_TRUE = !question_TRUE">Нет</button></p>
        </div>

    </div>

    <div v-show="add_news_TRUE" class="add_news">

        <div class="add_content_news">
            <h4 class="h4_new">Форма добавления новости <i class="bi bi-x-lg close_icon" @click="add_news_TRUE = !add_news_TRUE"></i></h4>

            <div class="container_add_new">
                <p class="p_add_new">Поле для ввода заголовка новости</p>
                <p><input class="Head_add_new" type="text" v-model="form.Head"></p>

                <p class="p_add_new">Поле для ввода текса новости</p>
                <p><textarea class="info_add_new" v-model="form.info"></textarea></p>
            </div>

            <p><button type="button" class="osnovnButton" style="" @click="save_new()">Сохранить</button></p>
        </div>
    </div>

    <div class="news">

        <!-- <div v-show="Block_news_TRUE"> -->

        <div v-for="neew in news.slice().reverse()" :key="neew.id">

            <div class="block_news color_DB">
                <h4 class="h4_new">{{neew.Head}}</h4>
                <hr class="HR_news">
                <p class="block_news_P">{{neew.info}}</p>
                <hr v-show="!ADMIN" class="HR_news" style="margin-bottom: 0;">  

                <p v-show="ADMIN" class="del_news" @click="get_id_new(neew.id)">удалить</p>
                <hr v-show="ADMIN" class="HR_news" style="margin-bottom: 0; margin-top: 0;">    

                <p class="data_news">{{ new Date(neew.createdAt).toLocaleString() }} </p>
                <!-- <table class="tabl_news_data_del">
                <tr>
                    <td class="data_news">{{ new Date(neew.createdAt).toLocaleString() }}</td>
                    <td class="del_news">удалить</td>
                </tr>
                </table> -->
               

                <!-- <p v-show="ADMIN"><button class="osnovnButton" @click="get_id_new(neew.id)">Удалить </button></p> -->
            </div>

            <hr class="hrSt color_LB">
        </div>

        <!-- <div class="block_news color_DB">
                <h4>Заголовок</h4>
                <hr class="HR_news">
                <p class="block_news_P">Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Равным образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.
                    Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия.
                    Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.</p>
                <hr class="HR_news">
                <p class="data_news">21.07.2021</p>
            </div>

            <hr class="hrSt color_LB">

            <div class="block_news color_DB">
                <h4>Заголовок</h4>
                <hr class="HR_news">
                <p class="block_news_P">Товарищи! сложившаяся структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития. Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.
                    Равным образом консультация с широким активом требуют определения и уточнения модели развития. С другой стороны рамки и место обучения кадров способствует подготовки и реализации модели развития. Равным образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.
                    С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия. Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.</p>
                <hr class="HR_news">
                <p class="data_news">21.07.2021</p>
            </div> -->

    </div>

    <!-- </div> -->
</body>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="jquery.maskedinput.js" type="text/javascript"></script>

<script lang="ts">
import {
    Component,
    Vue
} from "vue-property-decorator";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

@Component({
    components: {},
})

export default class Home extends Vue {

    data() {
        return {
            ADMIN: false,
            add_news_TRUE: false,
            Block_news_TRUE: true,
            Push_add_new: false,
            question_TRUE: false,
            info_push: "",
        }
    }

    token = "";

    ADMIN = "false"
    add_news_TRUE = false
    Block_news_TRUE = "true"
    Push_add_new = "false"
    question_TRUE = false
    info_push = ""
    news = []
    URL = ""
    qwe = ""

    form = {
        Head: "1",
        info: "11"
    }

    async mounted() {
        this.token = localStorage.token;

        const result = await this.$store.dispatch("me_inform");

        const result_news = await this.$store.dispatch("newsList");
        this.news = result_news.data;
        console.log(this.news)
        console.log(result_news.data[1].info)

        if (result.isAdmin === true) {
            this.ADMIN = "true"
        }

    }

    async add_new() {
        this.add_news_TRUE = true
               
    }

    async save_new() {
        const result = await this.$store.dispatch("create_new", this.form);
        console.log(result)
        if (result.success === true) {
            this.add_news_TRUE = false
            this.Push_add_new = "true"
            this.info_push = "Новость успешно добавлена"

            let vm = this;
        setTimeout(function () {
            vm.Push_add_new = "false"
            window.location.reload();
        }, 2000);
            
        }
    }

    ID_new = ''

    async get_id_new(id: any) {
      this.question_TRUE = !this.question_TRUE
      this.ID_new = id

        // this.token = localStorage.token;

        // const result = await this.$store.dispatch("delete_new", id);
        // this.Push_add_new = "true"
        // this.info_push = "Новость успешно удалена"

        // let vm = this;
        // setTimeout(function () {
        //     vm.Push_add_new = "false"
        //     window.location.reload();
        // }, 2000);
        // console.log(result)
    }

    async newDelete(){
      const result = await this.$store.dispatch("delete_new", this.ID_new);
      this.question_TRUE = !this.question_TRUE
        this.Push_add_new = "true"
        this.info_push = "Новость успешно удалена"

        let vm = this;
        setTimeout(function () {
            vm.Push_add_new = "false"
            window.location.reload();
        }, 2000);
        console.log(result)
    }

}
</script>
