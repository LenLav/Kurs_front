<template>
  <div class="database">
    <h1 class="color_LB">Список сотрудников</h1>

<div class="tableContainer">
    <table id="myTable" class="table tablesorter table-hover table-bordered table-striped table-light">
          <thead>
            <tr class="tableSize">
              <th scope="col">ФИО</th>
              <th scope="col">Паспорт</th>
              <th scope="col">Дата рождения</th>
              <th scope="col">Пол</th>
              <th scope="col">Должность</th>
              <th scope="col">Дата приема на работу</th>
              <th scope="col">Дата увольнения</th>
              <th scope="col">З/п</th>
              <th scope="col">Семейное положение</th>
              <th scope="col">Дети</th>


              <!-- <th scope="col">Сообщения</th> -->
              <!-- <th scope="col">Хобби</th> -->
              <th scope="col">Логин</th>
              <!-- <th scope="col">Удалить</th> -->
            </tr>
          </thead>
          <tbody>
            <tr class="tableSize" v-for="user in users" :key="user.id">
                <td class="align-middle ">{{ user.fio }}</td>
              <td class="align-middle">{{ user.pasport }}</td>
              <td class="align-middle">{{ user.birthday }}</td>
              <td class="align-middle">{{ user.male }}</td>
              <td class="align-middle">{{ user.job }}</td>
              <td class="align-middle">{{ user.date_of_receipt }}</td>
              <td class="align-middle">{{ user.date_of_dismissal }}</td>
              <td class="align-middle">{{ user.salary }}</td>
              <td class="align-middle">{{ user.marital_status }}</td>
              <td class="align-middle">{{ user.amount_of_children }}</td>
              
              <!-- <td class="align-middle">{{ user.email }}</td>
              <td class="align-middle">{{ user.password }}</td> -->

              <!-- <td class="align-middle">{{ user.message }}</td> -->
              <!-- <td>
                  <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.fio }}</td>
              </tr>
              </td> -->


              <!-- <td><tr v-for="mes in users_message" :key="mes.id">
                  </tr>{{}}</td>
              <td>{{}}</td> -->
              <!-- <td class="align-middle">{{ new Date(user.createdAt).toLocaleString() }}</td> -->
              <td class="align-middle">{{ user.email }}</td>
              <!-- <td class="align-middle"><button type="button" class="btn btn-outline-danger">Удалить</button></td> -->
            </tr>
          </tbody>
        </table>
</div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
// import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";


import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {
  response = "Сервер с базой данных не запущен";
  users = [];
  users_message = [];

  async mounted() {
    const result = await this.$store.dispatch("usersList");
    this.users = result.data;


    // await axios({ method: "GET", url: "http://localhost:4200/users" }).then(
    //   (result) => {
    //     this.users = result.data.data;
    //     // console.log(this.users);
    //     // console.log(this.users_message);
    //   }
    // );
  };  
}
</script>

<style lang="scss">

</style>