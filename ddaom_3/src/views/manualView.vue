<template>
  <div id="bigbody">
    <Frame />
    <section>
      <div id="sectionBox">
        <div class="sectionDiv" id="logoDiv">" DDAOM "</div>
        <div class="sectionDiv" id="informationDiv">
          <div id="subtitle">소제목</div>
          <div id="information">따옴 설명</div>
        </div>
        <div class="sectionDiv">
          <div class="listDiv"></div>
          <div class="listDiv"></div>
          <div class="listDiv"></div>
          <div class="listDiv"></div>
        </div>
        <div class="sectionDiv">1</div>
        <div class="sectionDiv">2</div>
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
  }
}
</script>
<style>

template, #bigbody {
  width: 100%;
}

#bigbody {
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

.sectionDiv {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.listDiv {
  width: 200px;
  height: 200px;
  margin: 0 10px 0 10px;
  background-color: blue;
}

#logoDiv {
  margin-top: 50px;
  font-size: 85px;
  font-weight: bold;
  color: rgb(53, 99, 16);
}

#informationDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#subtitle {
  font-size: 30px;
  font-weight: bold;
}
</style>
