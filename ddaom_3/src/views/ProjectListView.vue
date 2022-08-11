<template>
  <div id="bigbody">
    <Frame />
    <div class="toggle_box">
      <input type="checkbox" id="custom_input" />
      <label for="custom_input" class="toggle_btn_label">
        <span></span>
      </label>
    </div>
    <section>
      <span id="projectButton">
        <button type="button" id="btnSubmit">&nbsp;수정&nbsp;</button>
        <button type="button" id="btnSubmit">&nbsp;완료&nbsp;</button>
        <button type="button" id="btnSubmit">삭제</button>
      </span>
      <ul :key="i" v-for="(project, i) in projectList">
        <li class="projectname">
          <h4>{{ project.name }}</h4>
        </li>
        <li class="projectlist">
          <img class="mainphoto" :src="project.img_url" />
          <div class="projectinf">
            <p class="with">함께하는 사람: {{ project.peer }}</p>
            <p>일정: {{ project.Date[0] }} ~ {{ project.Date[1] }}</p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 25%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                25%
              </div>
            </div>
            <br />
            <div id="viewmore">
              <p class="with">
                {{ project.desc }}
              </p>
              <div>
                관련 링크:
                <!-- <a :href="project.link.chae"></a> -->
              </div>
              <p></p>
              <ul :key="v" v-for="(detail, v) in detailedProject">
                <li class="detailedProject">
                  <p>
                    {{ detail.name }}, &nbsp;{{ detail.Date[0] }} ~
                    {{ detail.Date[1] }}, &nbsp;{{ detail.completed[0] }}
                  </p>
                </li>
              </ul>
            </div>
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              style="float: right"
              @click="openClose(this)"
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
          img_url:
            'https://i.pinimg.com/736x/c9/96/94/c996943a4a38652099e4189fc57f76ce.jpg',
          peer: '이채원, 이종훈, 정혜리, 최진선',
          Date: ['2022. 08. 02', '2022. 08. 05'],
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet ex quia cumque libero quis unde, officia amet iste, maxime voluptatibus tempora nihil. Maxime ab itaque blanditiis officiis cumque placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet ex quia cumque libero quis unde, officia amet iste, maxime voluptatibus tempora nihil. Maxime ab itaque blanditiis officiis cumque placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet ex quia cumque libero quis unde, officia amet iste, maxime voluptatibus tempora nihil. Maxime ab itaque blanditiis officiis cumque placeat?',
          link: {
            chae: 'https://www.naver.com/',
            ccc: 'https://www.naver.com/'
          }
        }
      ],
      detailedProject: [
        {
          name: '역할 분배',
          Date: ['2022. 08. 02', '2022. 08. 02'],
          completed: ['진행중', '완료']
        }
      ]
    }
  },
  methods: {
    openClose() {
      if (document.getElementById('viewmore').style.display === 'block') {
        document.getElementById('viewmore').style.display = 'none'
        document.getElementById('projectButton').style.display = 'none'
        // document.getElementById('toc-toggle').textContent = '보이기'
      } else {
        document.getElementById('viewmore').style.display = 'block'
        document.getElementById('projectButton').style.display = 'block'
        // document.getElementById('toc-toggle').textContent = '숨기기'
      }
    }
  }
}
</script>

<style scoped>
/*button*/

#btnSubmit{
  border: 1px rgb(255, 255, 255) solid;
  border-radius: 20% ;
  background-color: rgb(214, 214, 214);
  position: relative;
  top: 50%;
  left: 20vw;
}

#projectButton {
  display: none;
}
/*button*/
/* < -- table --> */
* {
  list-style: none;
}

#bigbody {
  width: 100vw;
  height: 100vh;
  margin: 0;
}
section {
  margin: 0px;
  width: calc(100vw - 250px);
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
  margin-left: 200px;
}
#viewmore {
  display: none;
}
.projectinf {
  width: 800px;
}

/* 프로젝트명 li */
.projectname {
  margin-left: 200px;
  margin-bottom: 20px;
}
/* 프로젝트 리스트 li */
.projectlist {
  display: flex;
  /* width: 1000px; */
  overflow: hidden;
}
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.dropdown {
  position: relative;
  display: inline-block;
}
.dropbtn_icon {
  font-family: 'Material Icons';
}
.dropbtn {
  border: 1px solid rgb(37, 37, 37);
  border-radius: 4px;
  background-color: #f5f5f5;
  font-weight: 400;
  color: rgb(37, 37, 37);
  padding: 12px;
  width: 200px;
  text-align: left;
  cursor: pointer;
  font-size: 12px;
}
.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1; /*다른 요소들보다 앞에 배치*/
  font-weight: 400;
  background-color: #f9f9f9;
  min-width: 200px;
}
.dropdown-content a {
  display: block;
  text-decoration: none;
  color: rgb(37, 37, 37);
  font-size: 12px;
  padding: 12px 20px;
}
.dropdown-content a:hover {
  background-color: #ececec;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.progress {
  width: 400px;
  height: 20px;
}
/*< -- table -->*/
/*< -- toggle -->*/
.toggle_box {
  float: right;
  display: flex;
  align-items: right;
  z-index: -1;
  margin-top: 20px;
  margin-right: 40px;
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
  background-color: rgb(99, 163, 47);
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
</style>
