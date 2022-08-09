<template>
  <div id="bigbody">
    <Frame msg="Welcome to Your Vue.js App" />
    <section>
      <div id="sectionBox">
        <div class="sectionDiv" id="typeOfPlanDiv">
          <div class="typeOfPlan" id="personalPlan">
            <span>개인</span>
            <input
              type="radio"
              name="typeOfPlanChoose"
              id="personal"
              @change="appearProjectList()"
            />
          </div>
          <div class="typeOfPlan" id="projectPlan">
            <span>프로젝트</span>
            <input
              type="radio"
              name="typeOfPlanChoose"
              id="project"
              @change="appearProjectList()"
            />
          </div>
          <div class="typeOfPlan" id="projectChoose">
            <select id="projectList">
              <option value="">프로젝트명</option>
            </select>
          </div>
        </div>
        <div class="sectionDiv" id="getProjectNameDiv">
          <span class="sectionText">제목 :</span>
          <input
            type="text"
            id="getProjectName"
            placeholder="제목을 입력해주세요."
            autofocus
          />
        </div>
        <div class="sectionDiv" id="startDateDiv">
          <span class="sectionText">시작 일자 :</span>
          <input type="date" id="startDate" @change="sameDatePlan()" />
          <div id="TodayDiv">
            <span>당일</span>
            <input type="checkbox" id="todayCheckBox" @change="todayPlan()" />
          </div>
        </div>
        <div class="sectionDiv" id="deadlineDateDiv">
          <span class="sectionText">마감 일자 :</span>
          <input type="date" id="deadlineDate" @change="sameDatePlan()" />
        </div>
        <div class="sectionDiv" id="projectDetailDiv">
          <span class="sectionText">상세 설명 :</span>
          <textarea
            id="projectDetail"
            placeholder="상세 설명을 입력해주세요."
          ></textarea>
        </div>
        <div class="sectionDiv" id="saveOrCancleDiv">
          <button class="bottomButton" id="save">저장</button>
          <button class="bottomButton" id="cancle">취소</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Frame from '@/components/Frame.vue'

export default {
  name: '',
  components: {
    Frame
  },
  methods: {
    appearProjectList() {
      const project = document.getElementById('project')
      const personal = document.getElementById('personal')

      if (project.checked) {
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
        todayCheckBox.checked = true
      } else {
        todayCheckBox.checked = false
      }
    },
    todayPlan() {
      const todayCheckBox = document.getElementById('todayCheckBox')

      if (todayCheckBox.checked) {
        document.getElementById('deadlineDate').value =
          document.getElementById('startDate').value
      }
    },
    dateCondition() {
      const startDate = document.getElementById('startDate').value
      const deadlineDate = document.getElementById('deadlineDate').value

      if (startDate > deadlineDate) {
        alert('잘못된 기간입니다. 다시 입력해주세요.')
      }
    }
  }
}
</script>
<style scoped>
#bigbody {
  width: 100vw;
  height: 100vh;
}
section {
  margin: 0px;
  min-width: calc(100% - 250px);
  height: calc(100% - 55px);
  background-color: antiquewhite;
  overflow: scroll;

  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: calc(100%-250px);
}

#sectionBox {
  margin-top: 20px;
  padding: 0 10% 0 10%;
  width: 100%;
  height: 100%;
}

.typeOfPlan {
  min-width: 100px;
  margin-right: 15px;
}

#projectList {
  visibility: hidden;
}

.sectionDiv {
  margin-top: 40px;
  min-height: 10px;

  display: flex;
  flex-direction: row;
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
  margin-bottom: 40px;
}

.bottomButton {
  width: 70px;
  height: 25px;
  margin-right: 15px;
  text-align: center;
}
</style>
