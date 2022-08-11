<template>
  <div>
    <title>DDAOM_Password</title>
    <div class="totalContainer">
      <span id="logo">? Forgot your password</span>
      <div class="passwordContainer">
        <label for="userName"><b>이름</b></label>
        <input type="text" placeholder="Enter Username" name="userName" required />
        <label for="psw"><b>아이디</b></label>
        <input
          type="text"
          placeholder="Enter ID"
          name="ID"
          required
        />
        <button type="submit" @click="Gobackend()">비밀번호찾기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}

/* header */
#logo {
  color: black;
  font-size: 30px;
  font-weight: bold;

  display: flex;
  justify-content: center;
}

/* container */
.totalContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.passwordContainer {
  margin-top: 15px;
  padding-top: 15px;
  border-top: solid rgb(53, 99, 16);
}

/* input box */
input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid rgb(172, 171, 171);
  box-sizing: border-box;
}

/* 비밀번호찾기 button*/
button[type='submit'] {
  background-color: #fcc820;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
/*button hover*/
button:hover {
  opacity: 0.3;
}
</style>
