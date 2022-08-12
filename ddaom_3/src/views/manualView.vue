<template>
  <div id="bigbody">
    <Frame />
    <section>
      <div id="sectionBox">
        <div class="manualDiv" id="logoDiv">
          <span id="logo">
            <img src="../assets/logo.png" />
            </span>
          </div>
        <div class="manualDiv" id="informationDiv">
          <div id="subtitle">확실한 성취를 위한 스케줄러, 따옴</div>
          <div id="information">
            <span style="margin-bottom:7px">"따옴"은 효율적인 일정 관리를 위한 스케줄 관리 사이트입니다.</span>
            <span>개인 일정부터 프로젝트까지, 끝까지 완주할 수 있도록 도와드려요!</span>
          </div>
        </div>
        <div class="manualDiv">
          <div class="listDiv"></div>
          <div class="listDiv"></div>
        </div>
        <div class="manualDiv">
          <div class="listDiv"></div>
          <div class="listDiv"></div>
        </div>
        <div class="manualDiv"></div>
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

.manualDiv {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.listDiv {
  width: 450px;
  height: 200px;
  margin: 0 10px 10px 10px;
  background-color: rgb(53, 99, 16);
  justify-content: center;
  align-items: center;
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

#information {
  margin-top: 10px;
  font-size: 17px;
  display: flex;
  flex-direction: column;
}
</style>
