<template>
  <body>
    <div id="app">
      <nav
        class="navbar fixed-top navbar-expand-md navbar-light bg-light"
        style="height: 40px; border-bottom: 1px solid #cacfd6"
      >
        <a class="navbar-brand" href="/" style="padding-left: 40px"
          ><i class="bi bi-gear-fill" style="padding-right: 10px"></i>КЗТЗ</a
        >

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav w-100 justify-content-end">
            <div>
              <div v-if="!token">
                <li class="nav-item" style="padding-top: 16px">
                  <a class="nav-link" href="login">Вход и регистрация </a>
                </li>
              </div>

              <div v-else></div>
            </div>

            <div>
              <div v-if="token">
                <li class="nav-item">
                  <a class="nav-link" href="profil" id="LKab">
                    <i
                      class="bi bi-person"
                      style="font-size: 1.9rem; color: grey"
                    ></i
                    >{{ FiO }}</a>
                </li>
              </div>

              <div v-else></div>
            </div>

            <div>
              <div v-if="token">
                <li class="nav-item">
                  <a class="nav-link" @click="logout()">
                    <i
                      class="bi bi-box-arrow-right"
                      style="font-size: 1.9rem; color: grey"
                    ></i>
                  </a>
                </li>
              </div>

              <div v-else></div>
            </div>
          </ul>
        </div>
      </nav>

      <!-- <div id="nav" style="margin-left: auto;">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/login">Вход</router-link>
    </div> -->
      <router-view />
      <!-- <p><button type="button" class="btn btn-outline-success" @click="register()">Кнопка</button> <br></p> -->
    </div>

    <div class="LeftNavbar">
      <div v-if="token">
        <form action="news">
          <button type="submit" class="LeftNavbarButton">
            <i class="bi bi-newspaper" style="padding-right: 5%"></i>
            Новости
          </button>
        </form>

        <form action="database">
          <button type="submit" class="LeftNavbarButton">
            <i class="bi bi-people" style="padding-right: 5%"></i>
            Сотрудники
          </button>
        </form>

        <!-- <form action="messages" >
            <button type="submit" class="LeftNavbarButton">
              <i class="bi bi-envelope-check" style="padding-right: 5%;"></i>
              Мессенджер</button>
        </form> -->

        <form action="registration">
          <button type="submit" class="LeftNavbarButton">
            <i class="bi bi-graph-up" style="padding-right: 5%"></i>
            Аналитика
          </button>
        </form>

        <form action="kalendar">
          <button type="submit" class="LeftNavbarButton">
            <i class="bi bi-calendar3" style="padding-right: 5%"></i>
            Календарь
          </button>
        </form>

        <form action="registration">
          <button type="submit" class="LeftNavbarButton">
            <i class="bi bi-question-octagon" style="padding-right: 5%"></i>
            Техподдержка
          </button>
        </form>
      </div>
    </div>
  </body>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

@Component({
  components: {},
})
export default class Home extends Vue {
  data() {
    return {
      fio: "",
    };
  }

  response = "ожидание";
  // ffio = "qwe"
  poi = "";
  token = "";
  FIO = "";
  FiO = "";

  async mounted() {
    this.token = localStorage.token;
    console.log(this.token);

    this.token = localStorage.token;
    const result = await this.$store.dispatch("me_inform");
    this.FIO = result.fio;
    var poi = this.FIO.split(" ");
    this.FiO = poi[0] + " " + poi[1][0] + "." + poi[2][0] + ".";
  }

  async logout() {
    const result = await this.$store.dispatch("logout");
    this.token = "";
    window.location.href = "login";
  }
}
</script>

<style lang="scss">
.LeftNavbar {
  background-color: #f8f9fa;
  width: 17%;
  height: 100%;
  border-right: 1px solid #cacfd6;
  text-align: center;

  position: fixed;
  top: 40px;
  z-index: 100;
}

.LeftNavbarButton {
  background-color: #e5ebf1;
  border: none;
  border-radius: 3px;
  width: 85%;
  height: 35px;
  color: #55677d;
  font-size: 15px;
  margin-top: 10px;
  text-align: left;
  padding-left: 10%;
}

.LeftNavbarButton:hover {
  background-color: #c2ced8;
}

.centr {
  vertical-align: middle;
}

nav {
  height: 40px;
  padding: 0 0 0 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: #eae7dc;
  // background-color: #a3b3c3;
}

#navb {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #b9c6d3;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
