<template>
    <div class="red lighten-3 pa-3">
        <h3>자세한 회원 정보를 확인합니다.</h3>
        <p>상세사항</p>
        <!-- <v-btn @click="switchName">이름변경</v-btn> -->
        <v-list dense>
            <v-list-tile>
                <v-list-tile-content>이름: </v-list-tile-content>
                <v-list-tile-content class="align-end">
                    {{nameOfChild}}
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>주소: </v-list-tile-content>
                <v-list-tile-content class="align-end">
                    {{addressOfChild}}
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>연락처: </v-list-tile-content>
                <v-list-tile-content class="align-end">
                    {{phoneOfChild}}
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>강아지: </v-list-tile-content>
                <v-list-tile-content class="align-end">
                    {{hasDogKr}}
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>수정일자: </v-list-tile-content>
                <v-list-tile-content class="align-end">
                    {{getDateAndTime(editedDate)}}
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </div>
</template>

<script>
import {eventBus} from '../main'
//eventBus가 부모역할을 하는 격임

//아래는 믹스인 사용
import {dateFormat} from '../mixins/dateFormat'

export default {
  props: [
      'nameOfChild',
      'addressOfChild',
      'phoneOfChild',
      'hasDogOfchild'
  ],
  components: {
    //
  },
  data () {
    return {
        editedDate: null
    }
  },
  computed: { 
      sayHello () {
          return this.nameOfChild + ' 안녕하세요!'  //자식컴포넌트내에서만 변경 cf) 부모까지 변경은 emit
      },
      hasDogKr () {
          return this.hasDogOfchild === true ? '있음' : '없음'
      } 
  },
  methods: {
      switchName () {
          this.nameOfChild = '컴퓨터'
      },
    //     getDateAndTime (date) {
    //         if (date !==null) {
    //             let hour = date.getHours()
    //             let minutes = date.getMinutes()
    //             let year = date.getFullYear()
    //             let month = date.getMonth() + 1
    //             let dates = date.getDate()
        
    //             return `${year}/${month}/${dates} ${hour}:${minutes}`
    //         } else {
    //             return null
    //         }
    //   }
  },
  created () {
      eventBus.$on('userWasEdited', date => {
          this.editedDate = date
      })
  },
   mixins: [
    dateFormat
  ]
}
</script>