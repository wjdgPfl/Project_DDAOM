<template>
  <div id="body">
    <header>
      <button @click="Isnone()" id="asideBarButton">
        <v-icon>mdi-menu</v-icon>
      </button>
      <div style="width: 70px"></div>
      <div id="mainLogo">
        <router-link to="/main" id="logo">DDAOM</router-link>
      </div>
      <div id="userNameBox">
        <span>{{ state.username }}님 환영합니다.</span>
      </div>
      <div style="display: flex; flex-direction: row; align-content: center">
        <button class="navbutton" id="listButton" @click="MoveLogin()">
          Log Out
        </button>
        <button id="infoButton" @click="MoveManual()">
          <v-icon large> mdi-comment-question-outline</v-icon>
        </button>
      </div>
    </header>

    <nav :class="{ navv: state.isnone }">
      <div>
        <!-- <button> text </button> -->
        <button class="navbutton" @click="MoveMakeProject()">
          Make Project
        </button>
        <button class="navbutton" @click="MoveMakePlan()">Make Plan</button>
        <button class="navbutton" @click="MoveProjectList()">
          Project List
        </button>
      </div>
      <div id="filter">
        <p>필터</p>
        <ul :key="i" v-for="(project, i) in state.Projects">
          <li>
            <div class="filterList">
              <input type="checkbox" @change="updateParentValue(i)" />{{
                project.name
              }}
              <input
                type="color"
                :value="project.color"
                :id="project.name"
                class="color"
                @change="changeColor(i)"
              />
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
import axios from 'axios'

import { reactive } from 'vue'

export default {
  conponents: {},
  data() {
    return {}
  },
  setup() {
    const state = reactive({
      isnone: false,
      username: '',
      Projects: []
    })

    axios.get('/api/frame').then((res) => {
      state.isnone = res.data.isnone
      state.username = res.data.username
      state.Projects = res.data.Projects
    })
    return { state }
  },
  created() {},
  mounted() {},
  methods: {
    updateParentValue(i) {
      const checkValue = []
      checkValue[0] = this.state.Projects[i].name
      checkValue[1] = this.state.Projects[i].checked
      if (checkValue[1] === false) {
        checkValue[1] = true
        this.state.Projects[i].checked = true
      } else if (checkValue[1] === true) {
        checkValue[1] = false
        this.state.Projects[i].checked = false
      }
      this.$emit('checkValue', checkValue)
    },
    changeColor(i) {
      const colorValue = []
      colorValue[0] = this.state.Projects[i].name
      colorValue[1] = document.getElementById(this.state.Projects[i].name).value
      this.state.Projects[i].color = colorValue[1]

      this.$emit('projectColor', colorValue)
    },
    Isnone() {
      this.state.isnone = !this.state.isnone
    },
    MoveMakeProject() {
      this.$router.push('/makeproject')
    },
    MoveMakePlan() {
      this.$router.push('/makeplan')
    },
    MoveLogin() {
      this.$router.push('/')
    },
    MoveProjectList() {
      this.$router.push('/project')
    },
    MoveManual() {
      this.$router.push('/manual')
    }
  }
}
</script>

<style scoped>
* {
  list-style: none;
}
/* tmplate */
template {
  height: 100vh;
  width: 100vw;
  margin: 0;
}

/* header */
header {
  height: 55px;
  width: 100%;
  background-color: #fcc820;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#asideBarButton {
  margin-left: 15px;
  width: 50px;
}

#mainLogo {
  width: calc(100% - 400px);
  padding-left: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#logo {
  color: #c96440;
  text-decoration: none;

  font-size: 30px;
  font-weight: bold;
}

#userNameBox {
  width: 180px;
  height: 55px;
  margin-right: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

#listButton {
  margin: 0px 15px 0px 0px;
  height: 30px;
  width: 90px;
  border: none;
}

#infoButton {
  margin: 0px 20px 0px 0px;
  height: 30px;
  width: 30px;
  border: none;
}

/* nav */
nav {
  background-color: rgb(235, 235, 235);
  height: calc(100vh - 55px);
  width: 250px;
  padding-top: 15px;
  padding-bottom: 25px;
  margin: 0;

  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.navv {
  display: none;
}
/* nav 버튼들 */
.navbutton {
  width: 200px;
  height: 50px;
  margin: 15px 25px 0px 25px;

  background-color: white;
  border: 1px solid rgb(84, 84, 84);
  border-radius: 10px;
}

.navbutton:hover {
  color: white;
  background-color: rgb(53, 99, 16);
}

#filter p {
  margin-left: 20px;
}

#filter {
  margin-left: 20px;
}

.filterList {
  display: flex;
  justify-content: space-between;
}

.color {
  width: 25px;
  height: 25px;
  margin-right: 20px;
}

input[type='checkbox'] {
  margin-right: 20px;
}
</style>
