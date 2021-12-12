<template>
<body class="body">
    <div class="EditProfil">
        <div class="Profil">

            <div class="formaPolzovatelya">
                <div style="padding:  3% 0% 3% 0%;">
                    <img class="card-photo" src="../img/Profil3.jpg" alt="Фото пользователя">
                </div>
                <h5 style="color: black; padding-bottom: 20px;">
                    <input type="text" class="Input_fio_edit_profil" v-model="form.fio">
                    </h5>

                <p class="Profil_info_blok">Основная информация</p>
                <hr class="Profil_info_Hr" style="margin-top: -20px;">



                




                <div class="containerInfo">
                    <div class="razmer">
                        <p class="infoLev">Должность:</p>
                        <p class="infoLev">Дата рождения:</p>
                        <p class="infoLev">Email:</p>
                        <p class="infoLev">Пол:</p>
                    </div>

                    <div class="razmer">
                        <p class="infoPrav">
                            <input type="text" class="Input_edit_profil" v-model="form.job" autofocus>
                            </p>
                        <p class="infoPrav">
                            <input type="text" class="Input_edit_profil" v-model="form.birthday">
                            </p>
                        <p class="infoPrav">
                            <input type="text" class="Input_edit_profil" v-model="form.email">
                            </p>
                        <p class="infoPrav">
                            <input type="text" class="Input_edit_profil" v-model="form.male">
                            </p>
                    </div>

                </div>
                

                <p class="Profil_info_blok">Дополнительная информация</p>
                <hr class="Profil_info_Hr" style="margin-top: -20px;">

                <div class="containerInfo">
                    <div class="razmer">
                        <p class="infoLev">Заработная <br>плата:</p>
                        <p class="infoLev">Дата приема на <br>работу:</p>
                        <p class="infoLev">Семейное <br>положение:</p>
                        <p class="infoLev">Количество <br>детей:</p>
                    </div>

                    <div class="razmer">
                        <p class="infoPrav"><br>
                        <input type="text" class="Input_edit_profil" v-model="form.salary">
                        </p>
                        <p class="infoPrav"><br>
                        <input type="text" class="Input_edit_profil" v-model="form.date_of_receipt">
                        </p>
                        <p class="infoPrav"><br>
                        <input type="text" class="Input_edit_profil" v-model="form.marital_status">
                        </p>
                        <p class="infoPrav"><br>
                        <input type="text" class="Input_edit_profil" v-model="form.amount_of_children">
                        </p>
                    </div>
                </div>

               

                <p><button type="button" class="osnovnButton" @click="delete_profil()">Сохранить изменения</button> <br></p>
                <!-- <p style="padding-bottom: 20px;"><button type="button" class="btn btn-outline-success" @click="edit()">Удалить профиль</button> <br></p> -->

            </div>
        </div>
    </div>
</body>
</template>

<script lang="ts">
import axios from 'axios';
import {
    Component,
    Vue
} from "vue-property-decorator";

@Component({
    components: {},
})

export default class Home extends Vue {
    form = {
        fio: "Петров Станислав Александрович",
        job: "Директор",
        birthday: "20.04.1985",
        email: "nikolaev27@mail.ru",
        male: "мужской",
        salary: "35 000",
        date_of_receipt: "25.08.2010",
        marital_status: "женат",
        amount_of_children: "1"
    }
    // response = "ожидание действий пользователя"
    // responseMass = "массив"
    // message_false = ""

    // async addMessage() {
    //     this.message_false = ""
    //     const result = await axios.post('http://localhost:4116/messages', this.form)
    //     this.response = result.data

    //     if (result.data.success === false) {
    //         this.message_false = result.data.message
    //     }
    //     console.log(this.message_false)
    // }

    
}
</script>

<style lang="scss">

</style>
