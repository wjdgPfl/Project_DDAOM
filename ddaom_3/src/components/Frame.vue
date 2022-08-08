<template>
  <div id="body">
    <header>
      <div>
        <button @click="Isnone()">햄버거</button>
      </div>
      <router-link to="/main"><h1>DDAOM</h1></router-link>
      <div style="display: flex; flex-direction: row">
        <p>{{ username }}님 환영합니다.</p>
        <button class="navbutton" @click="MoveProjectList()">List</button>
      </div>
    </header>

    <nav :class="{ navv: isnone }">
      <div>
        <button class="navbutton" @click="MoveMakeProject()">
          Make Project
        </button>
        <button class="navbutton" @click="MoveMakePlan()">Make Plan</button>
      </div>
      <div>
        <button class="navbutton" @click="MoveLogin()">로그아웃하기</button>
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
      username: '채원'
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
    }
  }
}
</script>

<style scoped>
/* tmplate */
template {
  height: 100%;
  width: 100%;
  margin: 0;
}

/* header */
header {
  height: 55px;
  width: 100%;
  background-color: aquamarine;

  display: flex;
  justify-content: space-between;
}

/* nav */
nav {
  background-color: blueviolet;
  height: calc(100vh - 55px);
  width: 250px;
  float: left;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.navv {
  display: none;
}

.navbutton {
  width: 100%;
  height: 60px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 25px;
}

.navbutton:hover {
  background-color: aquamarine;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
