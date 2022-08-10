<template>
  <div id="bigbody">
    <Frame msg="Welcome to Your Vue.js App" />
    <section>
      <div id="sectionBox">
        <div class="sectionDiv" style="color:grey">
          * 표시된 항목은 필수 항목입니다. 반드시 입력해주세요.
        </div>
        <div class="sectionDiv" id="getProjectNameDiv">
          <span class="sectionText">* 프로젝트 명 :</span>
          <input
            type="text"
            id="getProjectName"
            class="inputBoxes"
            placeholder="프로젝트 명을 입력해주세요."
            autofocus
          />
        </div>
        <div class="sectionDiv" id="addMembersDiv">
          <span class="sectionText">* 팀원 추가 :</span>
          <input
            type="text"
            id="addMembers"
            class="inputBoxes"
            placeholder="팀원의 ID를 입력해주세요."
          />
        </div>
        <div class="sectionDiv" id="startDateDiv">
          <span class="sectionText">* 시작 일자 :</span>
          <input
            type="date"
            id="startDate"
            class="inputBoxes"
            style="margin-right: 15px"
            @change="sameDatePlan()" />
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
            @change="sameDatePlan()" />
        </div>
        <div class="sectionDiv" id="projectDetailDiv">
          <span class="sectionText">상세 설명 :</span>
          <textarea
            id="projectDetail"
            class="inputBoxes"
            placeholder="상세 설명을 입력해주세요."
          ></textarea>
        </div>
        <div id="linkDiv">
          <div class="sectionDiv" id="addLinkDiv">
            <span class="sectionText" id="linkText">링크 :</span>
            <button id="blank"></button>
            <input
              type="text"
              id="addLinkName"
              class="inputBoxes"
              placeholder="링크명을 입력해주세요."
            />
            <input
              type="url"
              id="addLinkURL"
              class="inputBoxes"
              placeholder="URL을 입력해주세요."
            />
            <button class="addNewLinkButton" v-on:click="createNewLinkDiv()">
              +
            </button>
          </div>
        </div>
        <div class="sectionDiv" id="addReoresehtativePictureDiv">
          <span class="sectionText">대표사진 :</span>
          <input
            type="file"
            id="addReoresehtativePicture" />
        </div>
        <div class="sectionDiv" id="addFileDiv">
          <span class="sectionText">파일 첨부 :</span>
          <input
            type="file"
            multiple="multiple"
            id="addFile" />
        </div>
        <div class="sectionDiv" id="saveOrCancleDiv">
          <input type="submit" class="bottomButton" id="save">
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
    createNewLinkDiv() {
      const addNewLinkDiv = document.createElement('div')
      addNewLinkDiv.className = 'linkSectionDiv'
      addNewLinkDiv.setAttribute('id', 'addNewLinkDiv')

      const addLinkName = document.createElement('input')
      addLinkName.type = 'text'
      addLinkName.className = 'inputBoxes'
      addLinkName.setAttribute('id', 'addLinkName')
      addLinkName.setAttribute('placeholder', '링크명을 입력해주세요.')

      const addLinkURL = document.createElement('input')
      addLinkURL.type = 'text'
      addLinkURL.className = 'inputBoxes'
      addLinkURL.setAttribute('id', 'addLinkURL')
      addLinkURL.setAttribute('placeholder', 'URL을 입력해주세요.')

      const removeLinkButton = document.createElement('button')
      removeLinkButton.className = 'addNewLinkButton'
      removeLinkButton.innerText = 'x'
      removeLinkButton.addEventListener('click', function () {
        const parentlink = this.parentElement
        parentlink.remove()
      })

      const linkDiv = document.getElementById('linkDiv')
      linkDiv.appendChild(addNewLinkDiv)
      addNewLinkDiv.appendChild(addLinkName)
      addNewLinkDiv.appendChild(addLinkURL)
      addNewLinkDiv.appendChild(removeLinkButton)
    },
    sameDatePlan() {
      const startDate = document.getElementById('startDate').value
      const deadlineDate = document.getElementById('deadlineDate').value
      const todayCheckBox = document.getElementById('todayCheckBox')

      if (deadlineDate === startDate) {
        if (startDate === '') {
          todayCheckBox.checked = false
        } else { todayCheckBox.checked = true }
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
<style>

template, #bigbody {
  width: 100%;
  height: 100vh;
  margin: 0;
}

section {
  margin: 0;
  padding: 0 5% 0 5%;
  width: calc(100% - 250px);
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

.inputBoxes {
  background-color: white;
  border: 1px solid rgb(84, 84, 84);
  border-radius: 5px;
  padding: 5px;
}

.sectionDiv {
  margin-top: 40px;
  display: flex;
}

.linkSectionDiv {
  margin-top: 10px;
}

.sectionText {
  margin-right: 10px;
  min-width: 100px;

  font-size: 15px;
  font-weight: bold;
}

#getProjectName,
#addMembers {
  width: 720px;
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
  font-size: 13px;
}

#addLinkURL {
  width: 510px;
  margin-right: 10px;
  font-size: 13px;
}

.addNewLinkButton {
  width: 30px;
  text-align: center;
}

#blank {
  width: 10px;
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
