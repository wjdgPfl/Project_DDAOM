<template>
  <div id="bigbody">
    <Frame />
    <section>
      <div id="togggle">
        <div class="toggle_box">
          <input type="checkbox" id="custom_input" />
          <label for="custom_input" class="toggle_btn_label">
            <span></span>
          </label>
        </div>
      </div>
      <ul :key="i" v-for="(project, i) in projectList">
        <li class="projectname">
          <div>
            <input
              type="text"
              :value="project.name"
              :id="project.view"
              readonly
              class="title"
            />
          </div>
        </li>
        <li class="projectlist">
          <div>
            <img class="mainphoto" :src="project.img_url" />
            <span :id="project.butt" style="display: none">
              <button type="button" class="btnSubmit" @click="readOnlyTrue(i)">
                &nbsp;수정&nbsp;
              </button>
              <button type="button" class="btnSubmit" @click="readOnlyFalse(i)">
                &nbsp;완료&nbsp;
              </button>
              <button type="button" class="btnSubmit">&nbsp;삭제&nbsp;</button>
            </span>
          </div>
          <div class="projectinf">
            <div :key="t" v-for="(person, t) in project.peer">
              <p class="with">함께하는 사람: {{ person }}</p>
            </div>
            <p>일정: {{ project.Date[0] }} ~ {{ project.Date[1] }}</p>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="project.progress">
                25%
              </div>
            </div>
            <br />
            <div :id="project.name" style="display: none">
              <textarea
                class="with"
                :id="project.view"
                :value="project.desc"
                readonly
                style="resize: none; width: 50vw"
                rows="5"
              ></textarea>
              관련 링크 :
              <span
                :key="j"
                v-for="(link, j) in project.links"
                class="linkSpan"
              >
                <a :href="link.url">{{ link.linkname }}</a>
                <div :class="project.name" style="display: none">
                  <input
                    type="text"
                    :value="link.linkname"
                    style="width: 50vw"
                  />
                  <input type="text" :value="link.url" style="width: 50vw" />
                </div>
              </span>
              <div :key="v" v-for="(detail, v) in project.detailedProject">
                <div class="detailedProject">
                  <v-icon small> mdi-check-bold </v-icon>&nbsp;
                  {{ detail.name }}, &nbsp;{{ detail.Date[0] }} ~
                  {{ detail.Date[1] }}, &nbsp;{{ detail.completed[0] }}
                </div>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              style="float: right"
              @click="openClose(i)"
            >
              view more
            </button>
          </div>
        </li>
      </ul>
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
  data() {
    return {
      projectList: [
        {
          name: 'DDAOM 프로젝트',
          view: 'a',
          img_url: require('../assets/cat.jpg'),
          peer: ['이채원, 이종훈, 정혜리, 최진선'],
          Date: ['2022. 08. 02', '2022. 08. 05'],
          progress: 'width:25%',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet ex quia cumque libero quis unde, officia amet iste, maxime voluptatibus tempora nihil. Maxime ab itaque blanditiis officiis cumque placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet ex quia cumque libero quis unde, officia amet iste, maxime voluptatibus tempora nihil. Maxime ab itaque blanditiis officiis cumque placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet ex quia cumque libero quis unde, officia amet iste, maxime voluptatibus tempora nihil. Maxime ab itaque blanditiis officiis cumque placeat?',
          links: [
            { linkname: 'chae', url: 'https://www.naver.com/' },
            { linkname: 'ccc', url: 'https://www.naver.com/' }
          ],
          detailedProject: [
            {
              name: '역할 분배',
              Date: ['2022. 08. 02', '2022. 08. 02'],
              completed: ['진행중', '완료']
            },
            {
              name: '역할와~',
              Date: ['2022. 08. 02', '2022. 08. 02'],
              completed: ['진행중', '완료']
            }
          ]
        },
        {
          name: 'ddaom',
          view: 'b',
          progress: 'width:50%',
          img_url: require('../assets/cat.jpg'),
          peer: ['이채원, 이종훈, 정혜리, 최진선'],
          Date: ['2022. 08. 02', '2022. 08. 05'],
          desc: '짜잔~',
          links: [
            { linkname: 'chae', url: 'https://www.naver.com/' },
            { linkname: 'ccc', url: 'https://www.naver.com/' }
          ],
          detailedProject: [
            {
              name: '역할 분배',
              Date: ['2022. 08. 02', '2022. 08. 02'],
              completed: ['진행중', '완료']
            },
            {
              name: '역할와~',
              Date: ['2022. 08. 02', '2022. 08. 02'],
              completed: ['진행중', '완료']
            }
          ]
        }
      ]
    }
  },
  methods: {
    openClose(k) {
      // 부모의 이전형제의 두번째 자식
      const projectName = document.getElementById(this.projectList[k].name)
      const buttons =
        projectName.parentElement.previousElementSibling.childNodes[1]
      if (projectName.style.display === 'block') {
        projectName.style.display = 'none'
        buttons.style.display = 'none'
      } else {
        projectName.style.display = 'block'
        buttons.style.display = 'block'
      }
    },
    readOnlyTrue(k) {
      const project = this.projectList[k]
      const link = document.getElementsByClassName(project.name)
      for (let i = 0; i < link.length; i++) {
        link[i].style.display = 'block'
        link[i].previousElementSibling.style.display = 'none'
      }
    },
    readOnlyFalse(k) {
      const project = this.projectList[k]
      const link = document.getElementsByClassName(project.name)
      for (let i = 0; i < link.length; i++) {
        link[i].style.display = 'none'
        link[i].previousElementSibling.style.display = 'block'
      }
    }
  }
}
</script>

<style scoped>
/*button*/
.btnSubmit {
  border: 1px rgb(255, 255, 255) solid;
  border-radius: 20%;
  background-color: rgb(214, 214, 214);

  margin-top: 20px;
  margin-right: 10px;
}

/*button*/
/* < -- table --> */
* {
  list-style: none;
}
template {
  width: 100%;
}
section {
  margin: 0px;
  height: calc(100vh - 55px);
  background-color: white;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
}
/* project */
.mainphoto {
  height: 10rem;
  width: 10rem;
  margin-right: 100px;
}
#viewmore {
  display: none;
}
.projectinf {
  width: 50vw;
}
/* 프로젝트명 li */
.projectname {
  margin-bottom: 20px;
}
/* 프로젝트 리스트 li */
.projectlist {
  display: flex;
  overflow: hidden;
}

/* 진행률 */
.progress {
  width: 400px;
  height: 20px;
}
/* 링크 */
.linkSpan {
  margin-left: 8px;
}

/* 일정 */
.detailedProject {
  margin-top: 10px;
}
/*< -- table -->*/
/*< -- toggle -->*/
#togggle {
  width: 70vw;
}
.toggle_box {
  float: right;
  margin-top: 20px;
}
#custom_input {
  display: none;
}
#custom_input + label.toggle_btn_label {
  position: relative;
  width: 12rem;
  height: 2.5rem;
}
#custom_input + label.toggle_btn_label > span {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 40px;
  background-color: #ccc;
  transition: all 0.4s;
}
#custom_input + label.toggle_btn_label > span:before {
  display: flex;
  position: absolute;
  height: 2rem;
  width: fit-content;
  padding: 0 1rem;
  left: 0.25rem;
  bottom: 0.25rem;
  border-radius: 20px;
  background-color: #fff;
  content: 'ongoing';
  align-items: center;
  font-weight: bold;
  color: rgb(29, 29, 29);
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}
#custom_input:checked + label.toggle_btn_label > span {
  background-color: rgb(59, 119, 10);
}
#custom_input:checked + label.toggle_btn_label > span:before {
  -webkit-transform: translateX(calc(11.5rem - 100%));
  -ms-transform: translateX(calc(11.5rem - 100%));
  transform: translateX(calc(11.5rem - 100%));
  right: 0.25rem;
  bottom: 0.25rem;
  content: 'complete';
}
#custom_input:disabled + label.toggle_btn_label {
  display: none;
}

/*< -- toggle -->*/

.title {
  font-size: 30px;
  font-weight: bold;
}
</style>
