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
        <span>{{ username }}님 환영합니다.</span>
      </div>
      <div style="display: flex; flex-direction: row; align-content: center">
        <button class="navbutton" id="listButton" @click="MoveLogin()">
          Log Out
        </button>
        <button id="infoButton" @click="MoveInformation()">
          <v-icon large> mdi-comment-question-outline</v-icon>
        </button>
      </div>
    </header>

    <nav :class="{ navv: isnone }">
      <div>
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
        <ul :key="i" v-for="(project, i) in projectname">
          <li>
            <input type="checkbox" name="" id="" />{{ projectname[i] }}
            <!-- <v-color-picker v-model="color" /> -->
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  conponents: {},
  data() {
    return {
      isnone: false,
      username: '채원',
      projectname: ['qwe', 'project_1', 'chae', 'project_3']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  methods: {
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
    MoveInformation() {
      this.$router.push('/information')
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
input[type='checkbox'] {
  margin-right: 20px;
}
</style>
