<template>
  <div id="bigbody">
    <Frame />
    <section>
      <select style="float: right">
        <option value="doing" selected>ongoing</option>
        <option value="theEnd">complete</option>
      </select>

      <ul>
        <li class="projectlist">
          <img
            class="mainphoto"
            src="https://i.pinimg.com/736x/c9/96/94/c996943a4a38652099e4189fc57f76ce.jpg"
          />
          <div class="projectinf">
            <p class="with">함께하는 사람:</p>
            <p>일정:</p>
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
                세부사항: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Illum eveniet ex quia cumque libero quis unde, officia
                amet iste, maxime voluptatibus tempora nihil. Maxime ab itaque
                blanditiis officiis cumque placeat?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Illum eveniet ex quia cumque
                libero quis unde, officia amet iste, maxime voluptatibus tempora
                nihil. Maxime ab itaque blanditiis officiis cumque placeat?Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet
                ex quia cumque libero quis unde, officia amet iste, maxime
                voluptatibus tempora nihil. Maxime ab itaque blanditiis officiis
                cumque placeat?
              </p>
              <p>관련 링크:</p>
            </div>
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              style="float: right"
              @click="openClose()"
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
  methods: {
    openClose() {
      if (document.getElementById('viewmore').style.display === 'block') {
        document.getElementById('viewmore').style.display = 'none'
        // document.getElementById('toc-toggle').textContent = '보이기'
      } else {
        document.getElementById('viewmore').style.display = 'block'
        // document.getElementById('toc-toggle').textContent = '숨기기'
      }
    }
  }
}
</script>

<style scoped>
/* < -- table --> */
* {
  list-style: none;
}
#bigbody {
  width: 100%;
  height: 100%;
  margin: 0;
}

select {
  margin-top: 50px;
}

section {
  margin: 0px;
  width: calc(100% - 250px);
  height: calc(100% - 55px);
  background-color: white;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
}

.mainphoto {
  height: 10rem;
  width: 10rem;
  /* float: left; */
  margin-right: 100px;
}
#viewmore {
  display: none;
}
.projectinf {
  width: 800px;
}
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
</style>
