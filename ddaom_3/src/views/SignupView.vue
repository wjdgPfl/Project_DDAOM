<template>
  <div>
    <title>DDAOM_joinform</title>
    <div class="totalContainer">
      <h2>DDAOM</h2>
      <table class="signupContainer">
        <p></p>
        <tr>
          <td>
            이름 : <input type="text" name="name" style="margin-left: 8px" />
          </td>
        </tr>
        <p></p>
        <tr>
          <td>
            아이디 :
            <input
              type="text"
              class="userId_input"
              name="id"
              check_result="fail"
              style="margin-left: 8px"
              required
            />
          </td>
        </tr>
        <p></p>
        <tr>
          <td>
            <p id="duplicate">ID중복 여부를 확인해주세요.</p>
          </td>
          <span>
            <button id="duplicate_button">&nbsp;ID 중복 검사&nbsp;</button>
          </span>
        </tr>
        <tr>
          <td>
            비밀번호 :
            <input type="text" name="password" style="margin-left: 8px" />
          </td>
        </tr>
        <p></p>
        <tr>
          <td>
            <p style="color: red;">8자 이상 영문 대소문자와 숫자로만 입력해주세요.</p>
          </td>
        </tr>
        <tr>
          <td>
            <button id="signupButton" type="submit" @click="MoveLogin()">
              가입하기
            </button>
          </td>
            <span>
              <button id="backButton" @click="MoveBack()">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlVgUyXzl9ndi6xTSIQHZPsEB_N8E6w6fjg&usqp=CAU">
              </button>
            </span>
        </tr>
      </table>
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
    MoveLogin() {
      this.$router.push('/')
      alert('회원가입 성공!')
    },
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
h2 {
  text-align: center;
}
/* container */
.totalContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.signupContainer {
  margin-top: 15px;
  padding-top: 15px;
  border-top: solid rgb(53, 99, 16);
}
/*input box*/
input[type='text'] {
  background-color: rgb(238, 235, 235);
  border: 1px solid rgb(172, 171, 171);
}
/*button*/
#signupButton {
  height: 100%;
  width: 100%;
  float: center;
  background-color: #fcc820;
  color: white;
  border: none;
  cursor: pointer;
}
#overlapButton {
  float: right;
}
#backButton {
  float:right;
}
/*button hover*/
button:hover {
  opacity: 0.3;
}
/*img*/
img {
  height: 2vh;
  width: 2vw;
}

/* 중복여부 */
#duplicate {
  color: red;
}
#duplicate_button {
  background-color: rgb(238, 235, 235);
  border: 1px solid rgb(172, 171, 171);
}
</style>
