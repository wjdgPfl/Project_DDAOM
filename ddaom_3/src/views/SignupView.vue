<template>
  <div>
    <title>DDAOM_joinform</title>
    <div class="totalContainer">
      <span id="logo"><img src="../assets/logo.png" /></span>
      <table class="signupContainer">
        <p></p>
        <tr>
          <td style="color: grey">
            * 표시된 항목은 필수 항목입니다. 반드시 입력해주세요.
          </td>
        </tr>
        <p></p>
        <tr>
          <td>
            * 이름 :
            <input
              type="text"
              name="name"
              id="signup_name"
              style="margin-left: 8px"
            />
          </td>
        </tr>
        <p></p>
        <tr>
          <td>
            * 아이디 :
            <input
              type="text"
              id="signup_id"
              name="id"
              check_result="fail"
              style="margin-left: 8px"
              required
            />
          </td>
        </tr>
        <p></p>
        <tr>
          <span>
            <td>
              <p id="duplicate">ID중복 여부를 확인해주세요.</p>
            </td>
              <button id="duplicate_button">&nbsp;ID 중복 검사&nbsp;</button>
          </span>
        </tr>
        <tr>
          <td>
            * 비밀번호 :
            <input
              v-model="signup.password"
              type="password"
              id="signup_password"
              maxlength="16"
              @blur="passwordValid"
            />
            <div v-if="!passwordValidFlag">유효하지 않은 비밀번호 입니다.</div>
          </td>
        </tr>
        <p></p>
        <tr>
          <td>
            <p style="color: red">
              8자 이상 영문 대소문자와 숫자로만 입력해주세요.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            * 비밀번호 확인:
            <input
              v-model="passwordCheck"
              type="password"
              id="signup_check"
              maxlength="16"
              @blur="passwordCheckValid"
            />
            <div v-if="!passwordCheckFlag">비밀번호가 동일하지 않습니다.</div>
          </td>
        </tr>
        <p></p>
        <tr>
          <td>
            <button id="signupButton" type="submit" @click="MoveLogin()">
              가입하기
            </button>
          </td>
          <td>
            <button id="backButton" @click="MoveBack()">
              <img
                id="back"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlVgUyXzl9ndi6xTSIQHZPsEB_N8E6w6fjg&usqp=CAU"
              />
            </button>
          </td>
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
      signup: {
        id: null,
        password: null
      },
      passwordCheck: '',
      passwordCheckFlag: true,
      passwordValidFlag: true
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    MoveLogin() {
      const nameSignup = document.getElementById('signup_name').value
      const idSignup = document.getElementById('signup_id').value
      const passwordSignup = document.getElementById('signup_password').value
      const checkSignup = document.getElementById('signup_check').value
      if (
        (nameSignup === '') &
        (idSignup === '') &
        (passwordSignup === '') &
        (checkSignup === '')
      ) {
        alert('필수항목이 입력되지 않았습니다. 다시 입력해 주세요.')
      } else if (nameSignup === '') {
        alert('이름을 입력해주세요.')
      } else if (idSignup === '') {
        alert('ID를 입력해주세요.')
      } else if ((passwordSignup === '') & (this.passwordCheck === '')) {
        alert('비밀번호를 입력해주세요.')
      } else if (checkSignup === '') {
        alert('비밀번호 확인을 입력해주세요.')
      } else {
        if (confirm('가입하시겠습니까?')) {
          alert('회원가입 성공!')
          this.$router.push('/')
        }
      }
    },
    MoveBack() {
      this.$router.push('/')
    },
    passwordValid() {
      if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(this.signup.password)
      ) {
        this.passwordValidFlag = true
      } else {
        this.passwordValidFlag = false
      }
    },
    passwordCheckValid() {
      if (this.signup.password === this.passwordCheck) {
        this.passwordCheckFlag = true
      } else {
        this.passwordCheckFlag = false
      }
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
input[type='password'] {
  background-color: rgb(238, 235, 235);
  border: 1px solid rgb(172, 171, 171);
}
/*button*/
#signupButton {
  background-color: #fcc820;
  color: white;
  padding: 14px 0;
  border: none;
  cursor: pointer;
  width: 50vw;
}
#overlapButton {
  float: right;
}
#backButton {
  float: right;
}
/*button hover*/
button:hover {
  opacity: 0.3;
}
/*img*/
#back {
  margin-left: 1vw;
  height: 100%;
  width: 2vw;
}
#logo {
  width: 40%;
  height: 30%;
  display: block;
  margin: 0px auto;
}
/* 중복여부 */
#duplicate {
  color: red;
}
#duplicate_button {
  background-color: rgb(238, 235, 235);
  border: 1px solid rgb(172, 171, 171);
  float: right;
}
</style>
