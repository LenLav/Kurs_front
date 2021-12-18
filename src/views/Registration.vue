<template>
<body>

    <div v-show="OK_TRUE" class="push">
        <div class="push_content">

            <div id="text_push_id" class="push_content_true">
                <span>{{info_push}}</span>
                <i class="bi bi-x-circle" style="padding-left: 10px;" @click="OK_TRUE = !OK_TRUE"></i>
            </div>
        </div>
    </div>

    <div v-show="OK_FALSE" class="push">
        <div class="push_content">

            <div id="text_push_id" class="push_content_false">
                <span>{{info_push}}</span>
                <i class="bi bi-x-circle" style="padding-left: 10px;" @click="OK_FALSE = !OK_FALSE"></i>
            </div>
        </div>
    </div>

    <div class="registration">
        <div class="registr">

            <div style="padding-top: 15px;">
                <table class="text">
                    <tr>
                        <td class="leftcol">
                            <h3><a href="login" class="backIcon"><i class="bi bi-arrow-bar-left"></i></a></h3>
                        </td>
                        <td class="rightcol">
                            <h2>Регистрация</h2>
                        </td>
                    </tr>
                </table>
            </div>

            <hr class="hrSt">

            <p><input v-model="form.fio" class="inpStyle" placeholder="Фамилия Имя Отчество"> <br></p>
            <p><input v-model="form.pasport" type="text" class="inpStyle mask-pasport" id="pasport" placeholder="Паспорт: (серия, номер)"> <br></p>
            <p><input v-model="form.email" class="inpStyle" placeholder="Email"> <br></p>
            <p><input v-model="form.password" class="inpStyle" placeholder="Пароль"> <br></p>

            <!-- <form action="profil" style="padding-bottom: 20px;">
            <button type="submit" class="btn btn-outline-success">Зарегистрироваться</button>
        </form> -->
            <p><button type="button" class="osnovnButton" @click="registr()">Зарегистрироваться</button> <br></p>
            <hr class="hrSt">
        </div>
    </div>

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
            OK_TRUE: false,
            OK_FALSE: false,
            info_push: "Успешная регистрация!!!",
        }
    }

    form = {
        fio: "Кузнецов Семен Валерьевич",
        pasport: "97 20 859220",
        email: "leader@mail.ru",
        password: "123456"
    }

    response = "ожидание"
    token = "";
    OK_TRUE = false
    OK_FALSE = false
    info_push = ""
    color_push = ""

    async registr() {
        const result = await this.$store.dispatch("registration", this.form);
        this.token = result.token;

        if (result.success === true) {
            this.OK_TRUE = true
            this.info_push = result.message

            setTimeout(function () {
                window.location.href = 'profil'
            }, 1000);            
        } 
        else {
            this.OK_FALSE = true
            this.info_push = result.message

            let vm = this;
            setTimeout(function () {
                vm.OK_FALSE = false
            }, 4000);
        }

        console.log(result)
        console.log(result.success)

    }

}
</script>