<template>
  <div>
    <Frame />
    <section>
      <div id="sectionBox">
        <div class="sectionDiv">
          <div style="width:400px; color: grey; font-size:15px">
            * 표시된 항목은 필수 항목입니다. 반드시 입력해주세요.
          </div>
          <div style="width: calc(100% - 510px)"></div>
          <div class="typeOfPlan" id="makeProjectButton" style="width:110px">
            <button v-on:click="moveProjectPage()">+ 프로젝트 생성</button>
          </div>
        </div>
        <div class="sectionDiv" id="typeOfPlanDiv">
          <sapn style="margin-right: 5px">*</sapn>
          <div class="typeOfPlan" id="personalPlan">
            <span style="margin-right: 15px">개인 일정</span>
            <input
              type="radio"
              name="typeOfPlanChoose"
              id="personal"
              @change="appearProjectList()"
            />
          </div>
          <div class="typeOfPlan" id="projectPlan">
            <span style="margin-right: 15px">협업 일정</span>
            <input
              type="radio"
              name="typeOfPlanChoose"
              id="together"
              @change="appearProjectList()"
            />
          </div>
          <div class="typeOfPlan" id="projectChoose">
            <select id="projectList">
              <option value="">프로젝트명</option>
              <option :key="project_id" :value="project_name" v-for="(project_name, project_id) in projectinf.project"> {{ project_name }} </option>
            </select>
          </div>
        </div>
        <div class="sectionDiv" id="getProjectNameDiv">
          <span class="sectionText">* 제목 :</span>
          <input
            type="text"
            id="getProjectName"
            class="inputBoxes"
            placeholder="제목을 입력해주세요."
            v-model="makePlaninf.makePlan.title"
            autofocus
          />
        </div>
        <div class="sectionDiv" id="startDateDiv">
          <span class="sectionText">* 시작 일자 :</span>
          <input
            type="date"
            id="startDate"
            class="inputBoxes"
            v-model="makePlaninf.makePlan.start_date"
            @change="sameDatePlan()"
          />
          <div id="TodayDiv">
            <span style="margin-right: 15px">당일</span>
            <input type="checkbox" id="todayCheckBox" @change="todayPlan()" />
          </div>
        </div>
        <div class="sectionDiv" id="deadlineDateDiv">
          <span class="sectionText">* 마감 일자 :</span>
          <input
            type="date"
            id="deadlineDate"
            class="inputBoxes"
            v-model="makePlaninf.makePlan.end_date"
            @change="sameDatePlan()"
          />
        </div>
        <div class="sectionDiv" id="projectDetailDiv">
          <span class="sectionText">상세 설명 :</span>
          <textarea
            id="projectDetail"
            class="inputBoxes"
            placeholder="상세 설명을 입력해주세요."
            @input="makePlaninf.makePlan.description = $event.target.value"
          ></textarea>
        </div>
        <div class="sectionDiv" id="saveOrCancleDiv">
          <input
            type="submit"
            class="bottomButton"
            id="save"
            v-on:click="saveCheck()"
          />
          <button class="bottomButton" id="cancle" v-on:click="cancleCheck()">
            취소
          </button>
        </div>
        <div class="sectionDiv"><button style="height:15px; width:15px"></button></div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { reactive } from 'vue'
import Frame from '@/components/Frame.vue'

export default {
  components: {
    Frame
  },
  data() {
    return {}
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

    const projectinf = reactive({
      project: {
        project_name: '',
        project_id: ''
      }
    })

    axios.get('/api/makePlan/project/name').then((res) => {
      // 사용자 계정 쿠키로 받아옴
      projectinf.project.project_name = res.data
    })

    axios.get('/api/makePlan/project/id').then((res) => {
      // 사용자 계정 쿠키로 받아옴
      projectinf.project.project_id = res.data
    })

    const makePlaninf = reactive({
      makePlan: {
        title: '',
        start_date: '',
        end_date: '',
        description: ''
      }
    })

    return { logininf, projectinf, makePlaninf }
  },
  methods: {
    appearProjectList() {
      const together = document.getElementById('together')
      const personal = document.getElementById('personal')

      if (together.checked) {
        document.getElementById('projectList').style.visibility = 'visible'
      } else if (personal.checked) {
        document.getElementById('projectList').style.visibility = 'hidden'
      }
    },
    sameDatePlan() {
      const startDate = document.getElementById('startDate').value
      const deadlineDate = document.getElementById('deadlineDate').value
      const todayCheckBox = document.getElementById('todayCheckBox')

      if (deadlineDate === startDate) {
        if (startDate === '') {
          todayCheckBox.checked = false
        } else {
          todayCheckBox.checked = true
        }
      } else {
        todayCheckBox.checked = false
      }
    },
    todayPlan() {
      const todayCheckBox = document.getElementById('todayCheckBox')

      if (todayCheckBox.checked) {
        document.getElementById('deadlineDate').value =
          document.getElementById('startDate').value
        this.makePlaninf.makePlan.end_date = this.makePlaninf.makePlan.start_date
      }
    },
    dateCondition() {
      const startDate = document.getElementById('startDate').value
      const deadlineDate = document.getElementById('deadlineDate').value

      if (startDate > deadlineDate) {
        alert('잘못된 기간입니다. 다시 입력해주세요.')
      }
    },
    saveCheck() {
      const content = this.makePlaninf.makePlan
      const together = document.getElementById('together')
      const personal = document.getElementById('personal')
      const projectList = document.getElementById('projectList')
      const projectName = document.getElementById('getProjectName').value
      const start = document.getElementById('startDate').value
      const deadline = document.getElementById('deadlineDate').value

      if (
        (together.checked === false) &
        (personal.checked === false) &
        (projectName === '') &
        (start === '' || deadline === '')
      ) {
        alert('필수 항목이 입력되지 않았습니다. 다시 입력해 주세요.')
      } else if ((together.checked === false) & (personal.checked === false)) {
        alert('일정 유형을 선택해주세요.')
      } else if (together.checked & (projectList.value === '')) {
        alert('해당되는 프로젝트를 선택해주세요')
      } else if (projectName === '') {
        alert('일정 제목을 입력해주세요.')
      } else if (start === '' || deadline === '') {
        alert('기간을 입력해주세요.')
      } else if ((start !== '') & (deadline !== '') & (start > deadline)) {
        alert('잘못된 기간입니다. 다시 입력해주세요.')
      } else {
        if (confirm('제출하시겠습니까?')) {
          axios.post('/api/makePlan', { content }).then((res) => {})
          this.$router.push('/main')
        }
      }
    },
    cancleCheck() {
      if (confirm('취소하시겠습니까?')) {
        this.$router.push('/main')
      }
    },
    moveProjectPage() {
      if (confirm('프로젝트 생성 페이지로 이동하시겠습니까?')) {
        this.$router.push('/makeproject')
      }
    }
  }
}
</script>
<style scoped>
template {
  width: 100%;
}

/* #bigbody {
  width: 100%;
  height: 100vh;
  margin: 0;
} */

section {
  margin: 0;
  padding: 0 5% 0 5%;
  height: calc(100vh - 55px);
  background-color: white;

  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
}

#sectionBox {
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}

.typeOfPlan {
  min-width: 100px;
  margin-right: 15px;
}

.inputBoxes {
  background-color: white;
  border: 1px solid rgb(84, 84, 84);
  border-radius: 5px;
  padding: 5px;
}

#projectChoose {
  margin-left: 15px;
}

#projectList {
  visibility: hidden;
}

#makeProjectButton {
  font-size: 15px;
  color: rgb(53, 99, 16);
}

.sectionDiv {
  margin-top: 40px;
  display: flex;
}

.sectionText {
  margin-right: 10px;
  min-width: 100px;

  font-weight: bold;
}

#getProjectName {
  width: 720px;
}

#TodayDiv {
  margin-left: 30px;
}

#projectDetail {
  resize: none;
  width: 720px;
  height: 250px;
}

#saveOrCancleDiv {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottomButton {
  width: 70px;
  height: 25px;
  margin-right: 15px;
  text-align: center;

  border: 1px solid rgb(84, 84, 84);
  border-radius: 5px;
}

.bottomButton:hover {
  background-color: rgb(53, 99, 16);
  color: white;
}
</style>
