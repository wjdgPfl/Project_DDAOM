<template>
  <div>
    <title>DDAOM_joinform</title>
    <div class="totalContainer">
      <h2>DDAOM</h2>
      <table class="signupContainer">
        <tr>
          <td>
            이름 : <input type="text" name="name" style="margin-left: 8px" />
          </td>
        </tr>
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
          <td>
            <button
              id="overlapButton"
              type="button"
              class="id_overlap_button"
              onclick="id_overlap_check()"
            >
              중복검사
            </button>
          </td>
          <img id="id_check_sucess" style="display: none" />
        </tr>
        <tr>
          <td>
            비밀번호 :
            <input type="text" name="password" style="margin-left: 8px" />
          </td>
        </tr>
      </table>
      <button id="signupButton" type="submit" @click="MoveLogin()">
        가입하기
      </button>
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
    }
  }
}
</script>

<style>
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
  border-top: solid rgb(53, 99, 16);
}
/*input box*/
input[type='text'] {
  float: right;
}
/*button*/
#signupButton {
  height: 100%;
  width: 100%;
  float: inline-end;
}
#overlapButton {
  float: right;
}

/*button hover*/
button:hover {
  opacity: 0.3;
}
</style>
