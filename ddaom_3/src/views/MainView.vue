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
                <v-btn
                  outlined
                  class="mr-4"
                  color="grey darken-2"
                  @click="setToday"
                >
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
                    <v-btn
                      outlined
                      color="grey darken-2"
                      v-bind="attrs"
                      v-on="on"
                    >
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
                    <v-btn icon>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-toolbar-title
                      v-html="selectedEvent.name"
                    ></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <!-- 레이어 내용 -->
                  <v-card-text>
                    <span v-html="selectedEvent.details"></span>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text color="secondary" @click="selectedOpen = false">
                      Cancel
                    </v-btn>
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
      cc: 'blue',
      jj: 'cyan'
      // 'indigo',
      // 'deep-purple',
      // 'cyan',
      // 'green',
      // 'orange',
      // 'grey darken-1'
    },

    // 일정명
    // 필터 체크박스에서 프로젝트명 -> DB에서 프로젝트
    names: {
      cc: ['Meeting'],
      jj: ['aaaaaa', 'bbbbbb', 'cccccc', 'dddddd']
    },
    // 시작날짜 마감날짜 담는 배열
    Dates: {
      cc: {
        Meeting: ['2022, 8, 13', '2022, 8, 16']
      },
      jj: {
        aaaaaa: ['2022, 8, 16', '2022, 8, 16'],
        bbbbbb: ['2022, 8, 1', '2022, 8, 2'],
        cccccc: ['2022, 8, 16', '2022, 8, 22'],
        dddddd: ['2022, 8, 6', '2022, 8, 6']
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
        const eventlist = this.names[projectName] // ['aaaaaa', 'bbbbbb', 'cccccc', 'dddddd']
        const eventCount = eventlist.length

        for (let i = 0; i < eventCount; i++) {
          const eventname = eventlist[i]
          const first = new Date(this.Dates[projectName][eventname][0])
          const second = new Date(this.Dates[projectName][eventname][1])
          // const first = new Date('2022, 8, 16') // 시작날짜
          // const second = new Date('2022, 8, 22') // 마감날짜

          events.push({
            name: this.names[projectName][i],
            start: first,
            end: second,
            color: this.colors[projectName]
          })
        }
      }
      this.events = events
    }
  }
}
</script>

<style scoped></style>
