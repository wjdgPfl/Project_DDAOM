<template>
  <div>
    <Frame />
    <section>
      <div id="sectionBox">
        <div class="sectionDiv" style="color: grey">
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
          <span class="sectionText">팀원 추가 :</span>
          <input
            type="text"
            id="addMembers"
            class="inputBoxes"
            placeholder="팀원의 ID를 입력해주세요."
            style="width: 650px"
            @keydown.enter="addMemberbyEnter('keydown')"
          />
          <input
            type="button"
            id="submitButton"
            value="추가"
            style="width: 50px; margin-left: 15px"
            v-on:click="addMember()"
          />
        </div>
        <div class="sectionDiv" id="memberListBox">
          <div style="width: 110px"></div>
          <div style="width: 720px" id="memberList">
            <div id="noMembers">
              추가된 팀원이 없습니다. 팀원을 추가해주세요.
            </div>
          </div>
        </div>
        <div class="sectionDiv" id="startDateDiv">
          <span class="sectionText">* 시작 일자 :</span>
          <input
            type="date"
            id="startDate"
            class="inputBoxes"
            style="margin-right: 15px"
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
            @change="sameDatePlan()"
          />
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
          <input type="file" id="addReoresehtativePicture" />
        </div>
        <div class="sectionDiv" id="addFileDiv">
          <span class="sectionText">파일 첨부 :</span>
          <input type="file" multiple="multiple" id="addFile" />
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
        <div class="sectionDiv">
          <button style="height: 15px; width: 15px"></button>
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
    addMember() {
      const memberID = document.getElementById('addMembers').value
      const memberList = document.getElementById('memberList')
      const addedMember = document.createElement('button')
      addedMember.className = 'inputBoxes'
      addedMember.setAttribute('id', 'addedMember')
      const memberMent = document.getElementById('noMembers')
      const removeIDButton = document.createElement('button')
      removeIDButton.setAttribute('id', 'removeIDbutton')
      removeIDButton.innerText = 'X'

      if (memberID === '') {
        alert('팀원의 아이디를 입력해주세요.')
      } else {
        memberMent.setAttribute('style', 'display:none;')
        memberList.appendChild(addedMember)
        addedMember.innerText = memberID
        addedMember.appendChild(removeIDButton)
        document.getElementById('addMembers').value = ''
      }

      removeIDButton.addEventListener('click', function () {
        const parentID = this.parentElement
        const ID = parentID.innerText.slice(0, -1)
        if (confirm(ID + '님을 삭제하시겠습니까?')) {
          parentID.remove()
        }
        const number = document.querySelectorAll('#addedMember').length
        if (number === 0) {
          memberMent.setAttribute('style', 'display:contents')
        }
      })
    },
    addMemberbyEnter(val) {
      this.addMember()
    },
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
      }
    },
    saveCheck() {
      const projectName = document.getElementById('getProjectName').value
      const start = document.getElementById('startDate').value
      const deadline = document.getElementById('deadlineDate').value

      if ((projectName === '') & (start === '' || deadline === '')) {
        alert('필수 항목이 입력되지 않았습니다. 다시 입력해 주세요.')
      } else if (projectName === '') {
        alert('프로젝트 제목을 입력해주세요.')
      } else if (start === '' || deadline === '') {
        alert('기간을 입력해주세요.')
      } else if (start > deadline) {
        alert('잘못된 기간입니다. 다시 입력해주세요.')
      } else {
        if (confirm('제출하시겠습니까?')) {
          this.$router.push('/project')
        }
      }
    },
    cancleCheck() {
      if (confirm('취소하시겠습니까?')) {
        this.$router.push('/project')
      }
    }
  }
}
</script>

<style>
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

#noMembers {
  display: contents;
  width: 100%;
}

#addedMember {
  min-width: 70px;
  width: max-content;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 5px 0 5px;
}

#removeIDbutton {
  width: 9px;
  font-size: 10px;
  margin-left: 15px;
  color: gray;
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
