<template>
<div class="database">
    <h1 class="color_LB">Список сотрудников</h1>

    <div class="tableContainer">
        <table id="myTable" class="table tablesorter table-hover table-bordered table-striped table-light">
            <thead>
                <tr class="tableSize">
                    <th v-show="ADMIN" scope="col"></th>
                    <th scope="col">ФИО</th>
                    <th v-show="ADMIN" scope="col">Паспорт</th>
                    <th scope="col">Дата рождения</th>
                    <th scope="col">Пол</th>
                    <th scope="col">Должность</th>
                    <th v-show="ADMIN" scope="col">Дата приема на работу</th>
                    <th v-show="ADMIN" scope="col">Дата увольнения</th>
                    <th v-show="ADMIN" scope="col">З/п</th>
                    <th v-show="ADMIN" scope="col">Семейное положение</th>
                    <th v-show="ADMIN" scope="col">Дети</th>
                    <th v-show="ADMIN" scope="col">Логин</th>
                </tr>
            </thead>
            <tbody>
                <tr class="tableSize" v-for="user in users" :key="user.id">
                    <td v-show="ADMIN" class="align-middle "><i class="bi bi-pencil-fill" @click="userEdit(user.id)"></i></td>
                    <td class="align-middle ">{{ user.fio }}</td>
                    <td v-show="ADMIN" class="align-middle">{{ user.pasport }}</td>
                    <td class="align-middle">{{ user.birthday }}</td>
                    <td class="align-middle">{{ user.male }}</td>
                    <td class="align-middle">{{ user.job }}</td>
                    <td v-show="ADMIN" class="align-middle">{{ user.date_of_receipt }}</td>
                    <td v-show="ADMIN" class="align-middle">{{ user.date_of_dismissal }}</td>
                    <td v-show="ADMIN" class="align-middle">{{ user.salary }}</td>
                    <td v-show="ADMIN" class="align-middle">{{ user.marital_status }}</td>
                    <td v-show="ADMIN" class="align-middle">{{ user.amount_of_children }}</td>
                    <td v-show="ADMIN" class="align-middle">{{ user.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="jquery.maskedinput.js" type="text/javascript"></script>

<script lang="ts">
import axios from "axios";
// import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

import {
    Component,
    Vue
} from "vue-property-decorator";

@Component({
    components: {},
})
export default class Home extends Vue {
  data() {
        return {
            ADMIN: false,
        }
    }

    response = "Сервер с базой данных не запущен";
    users = [];
    users_message = [];
    token = ""
    ADMIN = false
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

    async mounted() {
      this.token = localStorage.token;
        const result = await this.$store.dispatch("usersList");
        this.users = result.data;
        
        this.func_me_inf()

    }

    async func_me_inf(){
      const result = await this.$store.dispatch("me_inform");

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
    }

    async userDelete(id: any) {
        alert(`Удаление пользователя id:${id}`);
        // this.$router.push("/");
    }
}
</script>

<style lang="scss">

</style>
