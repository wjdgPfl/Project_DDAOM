<template>
  <div id="body">
    <header>
      <button @click="Isnone()" id="asideBarButton">
        <v-icon>mdi-menu</v-icon>
      </button>
      <div id="mainLogo">
        <router-link to="/main" id="logo">DDAOM</router-link>
      </div>
      <div id="rightItem">
        <div id="userNameBox">
          {{ logininf.loginaccount.name }}님 환영합니다.
        </div>
        <div style="display: flex; flex-direction: row; align-content: center">
          <button class="navbutton" id="listButton" @click="MoveLogin()">
            Log Out
          </button>
          <button id="infoButton" @click="MoveManual()">
            <v-icon large> mdi-comment-question-outline</v-icon>
          </button>
        </div>
      </div>
    </header>

    <nav :class="{ navv: this.isnone }">
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
        <ul>
          <li>
            <div class="filterList">
              <input type="checkbox" @change="updateParentValue(i)" />
              {{ logininf.loginaccount.name }}
              <input
                type="color"
                :value="state.Project_User[0].color"
                :id="logininf.loginaccount.name"
                class="color"
                @change="changePersonalColor()"
              />
            </div>
          </li>
          <li>
            <hr style="width: 80%; border-top: 1px dashed black" />
          </li>
          <li :key="i" v-for="(project, i) in state.Project">
            <div class="filterList">
              <input type="checkbox" @change="updateParentValue(i)" />{{
                project.name
              }}
              <input
                type="color"
                :value="state.Project_User[i + 1].color"
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
    return {
      isnone: false
      // Projects: [
      //   { name: 'qwe', color: '#00ff00', checked: false },
      //   { name: 'project_1', color: '#ff9214', checked: false },
      //   { name: 'chae', color: '#67AB27', checked: false },
      //   { name: 'project_3', color: '#7B9BE5', checked: false }
      // ]
    }
  },
  setup() {
    const logininf = reactive({
      loginaccount: {
        // 사용자 계정
        id: null,
        name: null
      }
    })

    axios.get('/api/login').then((res) => {
      // 사용자 계정 쿠키로 받아옴
      logininf.loginaccount = res.data
    })

    const state = reactive({
      Project: {},
      Project_User: {}
    })

    axios.post('/api/frame/color').then((res) => {
      // 색상과 체크 여부 보유
      state.Project_User = res.data
    })

    axios.post('/api/frame/project_name').then((res) => {
      // 프로젝트 이름
      state.Project = res.data
    })

    return { state, logininf }
  },
  created() {},
  mounted() {},
  methods: {
    updateParentValue(i) {
      const checkValue = []
      checkValue[0] = this.state.Project[i].name
      checkValue[1] = this.state.Project[i].checked
      if (checkValue[1] === false) {
        checkValue[1] = true
        this.state.Project[i].checked = true
      } else if (checkValue[1] === true) {
        checkValue[1] = false
        this.state.Projects[i].checked = false
      }
      this.$emit('checkValue', checkValue) // 이름과 checked 여부 쌍으로 보내기
    },
    changeColor(i) {
      const colorValue = []
      colorValue[0] = this.state.Project[i].name
      colorValue[1] = document.getElementById(this.state.Project[i].name).value // 현재의 색상 변경 값
      // this.state.Project[i].color = colorValue[1] 데이터베이스 바로 색상 바꾸도록!!!!

      this.$emit('projectColor', colorValue) // 이름과 색상 쌍으로 보내기
    },
    changePersonalColor(i) {
      const colorValue = []
      colorValue[0] = this.logininf.loginaccount.name
      colorValue[1] = document.getElementById(
        this.logininf.loginaccount.name
      ).value // 현재의 색상 변경 값
      // this.state.Project_User[0].color = colorValue[1] 데이터베이스 바로 색상 바꾸도록!!!!

      this.$emit('projectPersonalColor', colorValue) // 이름과 색상 쌍으로 보내기
    },
    Isnone() {
      this.isnone = !this.isnone
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
  justify-content: space-between;
}

#rightItem {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#asideBarButton {
  margin-left: 15px;
  width: 50px;
}

#mainLogo {
  display: flex;
  align-self: center;
}

#logo {
  color: #c96440;
  text-decoration: none;

  font-size: 30px;
  font-weight: bold;
  position: absolute;
  left: 45%;
  top: 5px;
}

#userNameBox {
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
