<template>
  <div id="bigbody">
    <Frame />
    <div id="app secondapp">
      <v-app id="inspire">
        <v-row class="fill-height">
          <v-col>
            <!-- 캘린더 상단바 -->
            <v-sheet height="64">
              <v-toolbar flat>
                <v-btn outlined class="mr-4 navbutton" @click="setToday">
                  Today
                </v-btn>
                <v-btn fab text small color="grey darken-2" @click="prev">
                  <v-icon small> mdi-chevron-left </v-icon>
                </v-btn>
                <v-btn fab text small color="grey darken-2" @click="next">
                  <v-icon small> mdi-chevron-right </v-icon>
                </v-btn>
                <v-toolbar-title v-if="$refs.calendar">
                  {{ $refs.calendar.title }}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <!-- 드롭다운 (month, day, week) -->
                <v-menu bottom right>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn outlined v-bind="attrs" v-on="on" class="navbutton">
                      <span>{{ typeToLabel[type] }}</span>
                      <v-icon right> mdi-menu-down </v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="type = 'day'">
                      <v-list-item-title>Day</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'week'">
                      <v-list-item-title>Week</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'month'">
                      <v-list-item-title>Month</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-toolbar>
            </v-sheet>
            <!-- 메인 캘린더 -->
            <v-sheet height="calc(100vh - 119px)">
              <v-calendar
                ref="calendar"
                v-model="focus"
                color="primary"
                :events="events"
                :event-color="getEventColor"
                :type="type"
                @click:event="showEvent"
                @click:more="viewDay"
                @click:date="viewDay"
                @change="updateRange"
              ></v-calendar>
              <v-menu
                v-model="selectedOpen"
                :close-on-content-click="false"
                :activator="selectedElement"
                offset-x
              >
                <!-- 레이어 -->
                <v-card color="grey lighten-4" min-width="350px" flat>
                  <!-- 레이어 상단 -->
                  <v-toolbar :color="selectedEvent.color" dark>
                    <v-toolbar-title
                      v-html="selectedEvent.name"
                    ></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="editDesc()">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon @click="saveDesc()">
                      <v-icon>mdi-content-save</v-icon>
                    </v-btn>
                    <v-btn icon @click="remove()">
                      <v-icon>mdi-trash-can</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <!-- 레이어 내용 -->

                  <v-card-text style="height: 120px">
                    <!-- <input
                        id="selectInput"
                        type="text"
                        readonly
                        :value="selectedEvent.dateDetails"
                      /> -->
                    <span v-html="selectedEvent.dateDetails"></span>
                    <div>
                      내용 :
                      <textarea
                        id="selectText"
                        readonly
                        :value="selectedEvent.descDetails"
                        style="resize: none"
                        rows="3"
                      >
                      </textarea>
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      text
                      color="secondary"
                      @click="selectedOpen = false"
                      id="cancelbutton"
                    >
                      Cancel
                    </v-btn>
                    <v-checkbox text color="secondary"> </v-checkbox>
                    <p style="margin-top: 18px">FINISH</p>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </v-sheet>
          </v-col>
        </v-row>
      </v-app>
    </div>
  </div>
</template>

<script>
import Frame from '@/components/Frame.vue'

export default {
  components: {
    Frame
  },
  data: () => ({
    focus: '',
    type: 'month',
    typeToLabel: {
      // 드롭다운 메뉴
      month: 'Month',
      week: 'Week',
      day: 'Day'
    },

    selectedEvent: {}, // 선택한 일정 양방향 바인딩
    selectedElement: null, // 사용자가 클릭한 일정 타겟
    selectedOpen: false, // 레이어 오픈 여부 확인
    events: [], // 한 달 일정들을 담고 있는 느낌

    // 일정 색상
    // DB에서 색상을 가지고 있어서 해당 색상을 순회해서 colors로 넣어주는 것
    colors: {
      qwe: 'blue',
      project_1: 'cyan',
      chae: 'indigo',
      project_3: 'deep-purple'
    },

    // 일정명
    // 필터 체크박스에서 프로젝트명 -> DB에서 프로젝트
    names: {
      qwe: ['Meeting', 'wha'],
      project_1: ['aaaaaa', 'bbbbbb', 'cccccc', 'dddddd'],
      chae: ['aaaaaa', 'bbbbbb', 'cccccc', 'dddddd'],
      project_3: ['Meeting']
    },

    // 시작날짜 마감날짜 담는 배열
    Dates: {
      qwe: {
        Meeting: ['2022, 8, 13', '2022, 8, 16'],
        wha: ['2022, 8, 13', '2022, 8, 16']
      },
      project_1: {
        aaaaaa: ['2022, 8, 16', '2022, 8, 16'],
        bbbbbb: ['2022, 8, 1', '2022, 8, 2'],
        cccccc: ['2022, 8, 16', '2022, 8, 22'],
        dddddd: ['2022, 8, 6', '2022, 8, 6']
      },
      chae: {
        aaaaaa: ['2022, 8, 31', '2022, 8, 31'],
        bbbbbb: ['2022, 8, 2', '2022, 8, 2'],
        cccccc: ['2022, 8, 13', '2022, 8, 15'],
        dddddd: ['2022, 8, 7', '2022, 8, 7']
      },
      project_3: {
        Meeting: ['2022, 8, 26', '2022, 8, 28']
      }
    },

    // 상세설명
    Details: {
      qwe: {
        Meeting: 'dsads',
        wha: 'asdsafsdfd'
      },
      project_1: {
        aaaaaa: 'asdsafsdfd',
        bbbbbb:
          'nnfdmklkdmlfkmsdkfnnfdmklkdmlfkmsdkfnnfdmklkdmlfkmsdkfnnfdmklkdmlfkmsdkfnnfdmklkdmlfkmsdkfnnfdmklkdmlfkmsdkfnnfdmklkdmlfkmsdkf',
        cccccc: 'dsads',
        dddddd: 'bbbbbb'
      },
      chae: {
        aaaaaa: 'asdsafsdfd',
        bbbbbb: 'nn',
        cccccc: 'dsads',
        dddddd: 'bbbbbb'
      },
      project_3: {
        Meeting: 'dsads'
      }
    }
  }),

  setup() {},
  created() {},
  mounted() {
    this.$refs.calendar.checkChange()
  },
  unmounted() {},
  methods: {
    editDesc() {
      const text = document.getElementById('selectText')
      text.readOnly = false
    },
    saveDesc() {
      const text = document.getElementById('selectText')
      text.readOnly = true
      this.selectedEvent.descDetails = text.value
      // this.selectedEvent -> 현재 레이어가 뜬 이벤트를 가리킴
    },
    remove() {
      confirm('삭제하시겠습니까?')
      // 일정 삭제 함수 구현하기
    },
    viewDay({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = ''
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        )
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        requestAnimationFrame(() => requestAnimationFrame(() => open()))
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },

    updateRange({ start, end }) {
      const events = []

      for (const projectName in this.names) {
        // cc, jj
        if (this.path === true) {
          continue
        }
        const eventlist = this.names[projectName] // ['aaaaaa', 'bbbbbb', 'cccccc', 'dddddd']
        const eventCount = eventlist.length

        for (let i = 0; i < eventCount; i++) {
          const eventname = eventlist[i]
          const first = new Date(this.Dates[projectName][eventname][0])
          const second = new Date(this.Dates[projectName][eventname][1])
          const Details = this.Details[projectName][eventname]

          const firstmon = first.getMonth() + 1
          const secondmon = second.getMonth() + 1
          events.push({
            name: this.names[projectName][i],
            start: first,
            end: second,
            color: this.colors[projectName],
            dateDetails:
              '기간 : ' +
              first.getFullYear() +
              '년 ' +
              firstmon +
              '월 ' +
              first.getDate() +
              '일' +
              ' ~ ' +
              second.getFullYear() +
              '년 ' +
              secondmon +
              '월 ' +
              second.getDate() +
              '일',
            descDetails: Details
          })
        }
      }
      this.events = events
    }
  }
}
</script>

<style scoped>
.navbutton {
  background-color: white;
  border: 1px solid rgb(84, 84, 84);
  border-radius: 10px;
}

#selectInput {
  width: 100%;
}

#selectText {
  width: 100%;
  height: 100%;
}
</style>
