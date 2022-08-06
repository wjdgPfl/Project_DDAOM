<template>
  <div id="body">
    <header>
      <button @click="goaqjrj">햄버거</button>
    </header>

    <nav :class="{ navv: isnone }">
      <button class="navbutton">
        <router-link to="/makeproject">Make Project</router-link>
      </button>
      <button class="navbutton">
        <router-link to="/makeplan">Make Plan</router-link>
      </button>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  conponents: {},
  data() {
    return {
      isnone: false
    }
  },
  setup() {},
  created() {},
  mounted() {},
  methods: {
    goaqjrj() {
      this.isnone = !this.isnone
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

template {
  height: 100vh;
  width: 100vw;
  margin: 0;
}

header {
  height: 55px;
  width: 100%;
  background-color: aquamarine;
}

nav {
  background-color: blueviolet;
  height: calc(100vh - 55px);
  width: 250px;
  float: left;
}
.navv {
  display: none;
}
.navbutton {
  width: 100%;
  height: 60px;
  background-color: transparent;
  border: 3px solid greenyellow;
}
.navbutton:hover {
  background-color: aquamarine;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
