<template>
  <div id="bigbody">
    <Frame msg="Welcome to Your Vue.js App" />
    <section>
      <div id="sectionBox">
        <div class="sectionDiv" id="getProjectNameDiv">
          <span class="sectionText">프로젝트 명 :</span>
          <input
            type="text"
            id="getProjectName"
            placeholder="프로젝트 명을 입력해주세요."
            autofocus
          />
        </div>
        <div class="sectionDiv" id="addMembersDiv">
          <span class="sectionText">팀원 추가 :</span>
          <input
            type="text"
            id="addMembers"
            placeholder="팀원의 ID를 입력해주세요."
          />
        </div>
        <div class="sectionDiv" id="startDateDiv">
          <span class="sectionText">시작 일자 :</span>
          <input type="date" id="startDate" @change="sameDatePlan()" />
        </div>
        <div class="sectionDiv" id="deadlineDateDiv">
          <span class="sectionText">마감 일자 :</span>
          <input type="date" id="deadlineDate" @change="sameDatePlan()" />
          <div id="TodayDiv">
            <span>당일</span>
            <input type="checkbox" id="todayCheckBox" @change="todayPlan()" />
          </div>
        </div>
        <div class="sectionDiv" id="projectDetailDiv">
          <span class="sectionText">상세 설명 :</span>
          <textarea
            id="projectDetail"
            placeholder="상세 설명을 입력해주세요."
          ></textarea>
        </div>
        <div id="linkDiv">
          <div class="sectionDiv" id="addLinkDiv">
            <span class="sectionText" id="linkText">링크 :</span>
            <input
              type="text"
              id="addLinkName"
              placeholder="링크명을 입력해주세요."
            />
            <input
              type="url"
              id="addLinkURL"
              placeholder="URL을 입력해주세요."
            />
            <button id="addNewLinkButton" v-on:click="createNewLinkDiv()">
              +
            </button>
          </div>
        </div>
        <div class="sectionDiv" id="addReoresehtativePictureDiv">
          <span class="sectionText">대표사진 :</span>
          <input type="file" id="addReoresehtativePicture" />
        </div>
        <div class="sectionDiv" id="addFileDiv">
          <span class="sectionText">파일 첨부 :</span>
          <input type="file" multiple="multiple" id="addFile" />
        </div>
      </div>
      <div class="sectionDiv" id="saveOrCancleDiv">
        <button class="bottomButton" id="save">저장</button>
        <button class="bottomButton" id="cancle">취소</button>
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
    createNewLinkDiv() {
      const addNewLinkDiv = document.createElement('div')
      addNewLinkDiv.className = 'sectionDiv'
      addNewLinkDiv.setAttribute('id', 'addNewLinkDiv')
      const addLinkName = document.createElement('input')
      addLinkName.type = 'text'
      addLinkName.setAttribute('id', 'addLinkName')
      addLinkName.setAttribute('placeholder', '링크명을 입력해주세요.')
      const addLinkURL = document.createElement('input')
      addLinkURL.type = 'text'
      addLinkURL.setAttribute('id', 'addLinkURL')
      addLinkURL.setAttribute('placeholder', 'URL을 입력해주세요.')

      const removeLinkButton = document.createElement('button')
      removeLinkButton.setAttribute('id', 'removeLinkButton')
      removeLinkButton.setAttribute('v-on:click', 'removeLink(this)')
      removeLinkButton.innerText = 'x'

      const linkDiv = document.getElementById('linkDiv')
      linkDiv.appendChild(addNewLinkDiv)
      addNewLinkDiv.appendChild(addLinkName)
      addNewLinkDiv.appendChild(addLinkURL)
      addNewLinkDiv.appendChild(removeLinkButton)
    },
    removeLink(e) {
      const parentlink = e.parentNodes()
      parentlink.remove()
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
  overflow-y: scroll;
  min-width: calc(100% - 250px);
  height: calc(100% - 55px);
  background-color: antiquewhite;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
}

#sectionBox {
  margin-top: 20px;
  padding: 0 10% 0 10%;
  width: fit-content;
  height: fit-content;
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

#getProjectName,
#addMembers {
  width: 720px;
}
#startDateDiv {
  margin-right: 100px;
  float: left;
}
#deadlineDateDiv {
  margin-left: 50px;
}
#TodayDiv {
  margin-left: 30px;
}

#projectDetail {
  resize: none;
  width: 720px;
  height: 250px;
}

#addNewLinkDiv {
  padding-left: 110px;
}

#addLinkName {
  width: 150px;
  margin-right: 10px;
}

#addLinkURL {
  width: 510px;
  margin-right: 10px;
}

#addNewLinkButton,
#romoveLinkButton {
  width: 30px;
}

#saveOrCancleDiv {
  margin-bottom: 40px;
}

.bottomButton {
  width: 70px;
  height: 25px;
  margin-right: 15px;
  text-align: center;
}
</style>
