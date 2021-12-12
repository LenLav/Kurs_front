<template>
<body>
    <div class="profil">
        <div class="formaPolzovatelya">
            <div style="padding:  3% 0% 3% 0%;">
                <img class="card-photo" src="../img/Profil3.jpg" alt="Фото пользователя">
            </div>
            <h5 style="color: black; padding-bottom: 20px;">{{FIO}}Петров Станислав Александрович</h5>

            <p class="Profil_info_blok">Основная информация</p>
            <hr class="Profil_info_Hr" style="margin-top: -20px;">

            
            
            <table class="TableCheck">
          <tr>
            <td class="TdLev">Должность:</td>
            <td class="TdPrav">{{d}}директор</td>
          </tr>
          <tr>
            <td class="TdLev">Дата рождения:</td>
            <td class="TdPrav">{{dr}} 01.01.2001</td>
          </tr>
          <tr>
            <td class="TdLev">Email:</td>
            <td class="TdPrav">{{em}} 1@mail.ru</td>
          </tr>
          <tr>
            <td class="TdLev">Пол:</td>
            <td class="TdPrav">{{pol}}мужской</td>
          </tr>
           </table>



            <!-- <div class="containerInfo">
                <div class="razmer">
                    <p class="infoLev">Должность:</p>
                    <p class="infoLev">Дата рождения:</p>
                    <p class="infoLev">Email:</p>
                    <p class="infoLev">Пол:</p>
                </div>

                <div class="razmer">
                    <p class="infoPrav">{{d}}директор</p>
                    <p class="infoPrav">{{dr}} 01.01.2001</p>
                    <p class="infoPrav">{{em}} 1@mail.ru</p>
                    <p class="infoPrav">{{pol}}мужской</p>
                </div>
            </div> -->

            <div class="editDiv">
                <a class="edit" href="/profil_edit">Редактировать <i class="bi bi-pencil-fill" style="font-size: 1rem;"></i></a>
            </div>

            <p class="Profil_info_blok">Дополнительная информация</p>
            <hr class="Profil_info_Hr" style="margin-top: -20px;">


            <table class="TableCheck">
          <tr>
            <td class="TdLev">Заработная плата:</td>
            <td class="TdPrav">{{zp}}35 000</td>
          </tr>
          <tr>
            <td class="TdLev">Дата приема на работу:</td>
            <td class="TdPrav">{{dpr}} 01.01.2021</td>
          </tr>
          <tr>
            <td class="TdLev">Семейное положение:</td>
            <td class="TdPrav">{{sp}}женат</td>
          </tr>
          <tr>
            <td class="TdLev">Количество детей:</td>
            <td class="TdPrav">{{kd}}2</td>
          </tr>
           </table>



            <!-- <div class="containerInfo">
                <div class="razmer">
                    <p class="infoLev">Заработная <br>плата:</p>
                    <p class="infoLev">Дата приема на <br>работу:</p>
                    <p class="infoLev">Семейное <br>положение:</p>
                    <p class="infoLev">Количество <br>детей:</p>
                </div>

                <div class="razmer">
                    <p class="infoPrav">{{zp}}<br>35 000</p>
                    <p class="infoPrav">{{dpr}} <br>01.01.2021</p>
                    <p class="infoPrav">{{sp}}<br>женат</p>
                    <p class="infoPrav">{{kd}}<br>2</p>
                </div>
            </div> -->
           
            <div class="editDiv">
                <a class="edit" href="/profil_edit">Редактировать <i class="bi bi-pencil-fill" style="font-size: 1rem;"></i></a>
            </div>
            
            <p ><button type="button" class="osnovnButton" @click="delete_profil()" >Удалить профиль</button> <br></p>
            <!-- <p style="padding-bottom: 20px;"><button type="button" class="btn btn-outline-success" @click="edit()">Удалить профиль</button> <br></p> -->

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
async edit() {
// window.location.href += ''
}
}
</script>

<style lang="scss">

</style>
