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
        <label for="psw"><b>비밀번호 힌트 답변</b></label>
        <input
          type="text"
          placeholder="Enter Answer"
          name="Answer"
          required
        />
        <table>
          <td>
            <button type="submit" @click="Gobackend()">비밀번호찾기</button>
          </td>
          <td>
            <button id="backButton" @click="MoveBack()">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlVgUyXzl9ndi6xTSIQHZPsEB_N8E6w6fjg&usqp=CAU">
            </button>
          </td>
        </table>
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
  methods: {
    MoveBack() {
      this.$router.push('/')
    }
  }
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
  width: 50vw;
}
/*button hover*/
button:hover {
  opacity: 0.3;
}
/*img*/
img {
  margin-left: 1vw;
  height: 100%;
  width: 2vw;
}
</style>
