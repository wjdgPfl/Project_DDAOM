<template>
  <div>
    <Frame />
    <head>
      <title>따옴</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
    </head>

    <select style="float: right">
      <option value="doing" selected>ongoing</option>
      <option value="theEnd">complete</option>
    </select>
    <table>
      <tr>
        <td>
          <p>project_1</p>
          <img
            src="https://i.pinimg.com/736x/c9/96/94/c996943a4a38652099e4189fc57f76ce.jpg"
            alt="대표이미지"
          />
        </td>
        <td>
          <p>함께하는 사람:이채원, 정혜리, 최진선, 이종훈</p>
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
          <p></p>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            style="float: right"
          >
            view more
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p>project_2</p>
          <img
            src="https://i.pinimg.com/736x/c9/96/94/c996943a4a38652099e4189fc57f76ce.jpg"
            alt="대표이미지"
          />
        </td>
        <td>
          <p>함께하는 사람:이채원, 정혜리, 최진선, 이종훈</p>
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
          <p></p>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            style="float: right"
          >
            view more
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p>project_3</p>
          <img
            src="https://i.pinimg.com/736x/c9/96/94/c996943a4a38652099e4189fc57f76ce.jpg"
            alt="대표이미지"
          />
        </td>
        <td>
          <p>함께하는 사람:이채원, 정혜리, 최진선, 이종훈</p>
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
          <p></p>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            style="float: right"
          >
            view more
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <p>project_3</p>
          <img
            src="https://i.pinimg.com/736x/c9/96/94/c996943a4a38652099e4189fc57f76ce.jpg"
            alt="대표이미지"
          />
        </td>
        <td>
          <p>함께하는 사람:이채원, 정혜리, 최진선, 이종훈</p>
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
          <p></p>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            style="float: right"
          >
            view more
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import Frame from '@/components/Frame.vue'

export default {
  name: '',
  components: {
    Frame
  }
}
</script>

<style>
/* < -- table --> */
img {
  height: 10rem;
  width: 10rem;
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
/*< -- table -->*/
</style>
