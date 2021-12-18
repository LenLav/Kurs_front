<template>
<body>

    <div v-show="OK_TRUE" class="push">
        <div class="push_content">

            <div class="push_content_true">
                <span>{{info_push}}</span>
                <i class="bi bi-x-circle" style="padding-left: 10px;" @click="OK_TRUE = !OK_TRUE"></i>
            </div>
        </div>
    </div>

    <div class="profil">
        <div class="formaPolzovatelya">
            <div style="padding:  3% 0% 3% 0%;">
                <img class="card-photo" src="../img/Profil3.jpg" alt="Фото пользователя">
            </div>
            <h5 style="color: black; padding-bottom: 20px;">{{FIO}}
                <i v-show="ADMIN" class="bi bi-check-circle" style="color: green;" data-bs-toggle="tooltip" title="Администратор"></i>
            </h5>
            

            <p class="Profil_info_blok">Основная информация</p>
            <hr class="Profil_info_Hr" style="margin-top: -20px;">

            <table class="TableCheck">
                <tr>
                    <td class="TdLev">Должность:</td>
                    <td class="TdPrav">{{JOB}}</td>
                </tr>
                <tr>
                    <td class="TdLev">Паспортные данные:</td>
                    <td class="TdPrav">{{PASPORT}}</td>
                </tr>
                <tr>
                    <td class="TdLev">Дата рождения:</td>
                    <td class="TdPrav">{{BIRTHDAY}}</td>
                </tr>
                <tr>
                    <td class="TdLev">Email:</td>
                    <td v-show="LODIN_SHOW" class="TdPrav">{{LODIN}} <i class="bi bi-eye-slash" style="padding-left: 10px;" @click="LODIN_SHOW = !LODIN_SHOW; EMAIL_SHOW = !EMAIL_SHOW"></i></td>
                    <td v-show="EMAIL_SHOW" class="TdPrav">{{EMAIL}} <i class="bi bi-eye-slash" style="padding-left: 10px;" @click="LODIN_SHOW = !LODIN_SHOW; EMAIL_SHOW = !EMAIL_SHOW"></i></td>
                </tr>
                <tr>
                    <td class="TdLev">Пол:</td>
                    <td class="TdPrav">{{MALE}}</td>
                </tr>
            </table>

            <div class="editDiv">
                <a class="edit" href="/profil_edit">Редактировать <i class="bi bi-pencil-fill" style="font-size: 1rem;"></i></a>
            </div>

            <p class="Profil_info_blok">Дополнительная информация</p>
            <hr class="Profil_info_Hr" style="margin-top: -20px;">

            <table class="TableCheck">
                <tr>
                    <td class="TdLev">Заработная плата:</td>
                    <td class="TdPrav">{{SALARY}}</td>
                </tr>
                <tr>
                    <td class="TdLev">Дата приема на работу:</td>
                    <td class="TdPrav">{{DATE_OF_RECEIPT}}</td>
                </tr>
                <tr>
                    <td class="TdLev">Семейное положение:</td>
                    <td class="TdPrav">{{MARITAL_STATUS}}</td>
                </tr>
                <tr>
                    <td class="TdLev">Количество детей:</td>
                    <td class="TdPrav">{{AMOUNT_OF_CHILDREN}}</td>
                </tr>
            </table>

            <div class="editDiv">
                <a class="edit" href="/profil_edit">Редактировать <i class="bi bi-pencil-fill" style="font-size: 1rem;"></i></a>
            </div>

            <p><button type="button" class="osnovnButton" @click="delete_profil()">Удалить профиль <i class="bi bi-trash-fill"></i></button></p>
            <!-- <p ><button type="button" class="osnovnButton" @click="logout()" >Выйти <i class="bi bi-box-arrow-right"></i></button></p> -->

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

@Component({
    components: {},
})

export default class Home extends Vue {

    data() {
        return {
            OK_TRUE: false,
            ADMIN: false,
            LODIN_SHOW: true,
            EMAIL_SHOW: false,
            info_push: "Успешная аутентификация",
        }
    }

    token = "";
    FIO = ""
    BIRTHDAY = ""
    MALE = ""
    EMAIL = ""
    JOB = ""
    SALARY = ""
    DATE_OF_RECEIPT = ""
    AMOUNT_OF_CHILDREN = ""
    MARITAL_STATUS = ""
    PASPORT = ""
    LODIN = ""

    OK_TRUE = false
    ADMIN = false
    info_push = ""

    async mounted() {
        this.token = localStorage.token;

        const result = await this.$store.dispatch("me_inform");

        
            this.OK_TRUE = true
            let vm = this;
            setTimeout(function () {
                vm.OK_TRUE = false
            }, 2000);
        

        if (result.isAdmin === true) {
            this.ADMIN = true
        }

        this.FIO = result.fio
        this.BIRTHDAY = result.birthday
        this.MALE = result.male
        this.EMAIL = result.email
        this.JOB = result.job
        this.DATE_OF_RECEIPT = result.date_of_receipt
        this.AMOUNT_OF_CHILDREN = result.amount_of_children
        this.SALARY = result.salary
        this.MARITAL_STATUS = result.marital_status
        this.PASPORT = result.pasport

        var poi = this.EMAIL.split("@");
        console.log(poi[0])
        console.log(poi[1])
        var log = poi[0][0] + poi[0][1]

         for (let i = 2; i < poi[0].length; i++) {log += '*'}

        log += '@' + poi[1]
        console.log(log)
        this.LODIN = log
    }

    async logout() {
        const result = await this.$store.dispatch("logout");
        this.token = "";
        window.location.href = 'login'

    }

    async delete_profil() {
        const result = await this.$store.dispatch("logout");
        this.token = "";
        window.location.href = 'login'

    }

}
</script>

<style lang="scss">

</style>
