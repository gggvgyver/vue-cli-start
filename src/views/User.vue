<template>
  <div class="blue lighten-3 pa-3">
      <h1>User 컴포넌트</h1>
      <p>이름: {{name}}</p>
      <p>주소: {{address}}</p>
      <p>연락처: {{phone}}</p>
      <p>강아지: {{hasDog}}</p>
      <!-- 아래 믹스인 사용 -->
      <p>믹스인 사용: {{getDateAndTime(createAt)}}</p>
      <!-- <v-btn @click="changeName">이름변경</v-btn> -->
      {{helloMixin}}
      <hr>
      <v-layout row wrap>
          <v-flex xs12 sm6>
              <UserDetail 
                :nameOfChild="name"
                :addressOfChild="address"
                :phoneOfChild="phone"
                :hasDogOfchild="hasDog"
              />
          </v-flex>
          <v-flex xs12 sm6>
              <UserEdit 
                :nameOfChild="name"
                :addressOfChild="address"
                :phoneOfChild="phone"
                :hasDogOfchild="hasDog"
                @child="parents"   
              />
          </v-flex>
      </v-layout>
  </div>
</template>

<script>
//@child="parents" 자식을 받으면 부모를 실행해라
import UserDetail from '../components/UserDetail'
import UserEdit from '../components/UserEdit'

//아래는 믹스인 사용
import {dateFormat} from '../mixins/dateFormat'

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data () {
    return {
      name: '뷰제이에스',
      address: '울산광역시',
      phone: '011-123-4567',
      hasDog: true,
      createAt: null
    }
  },
  methods: {
      changeName () {
          this.name = "이름변경됨"
      },
      parents (user) {
        // console.log('부모가 받았음!')
        this.name = user.nameOfChild
        this.address = user.addressOfChild
        this.phone = user.phoneOfChild
        this.hasDog = user.hasDogOfChild
      },
      // getDateAndTime (date) {
      //   let hour = date.getHours()
      //   let minutes = date.getMinutes()
      //   let year = date.getFullYear()
      //   let month = date.getMonth() + 1
      //   let dates = date.getDate()
        
      //   return `${year}/${month}/${dates} ${hour}:${minutes}`
      // }
  },
  created () {
    this.createAt = new Date()
  },
  mixins: [
    dateFormat
  ],
  computed: {
    helloMixin () {
      return this.mixinData + ' 안녕하세요!!!'
    }
  }
}
</script>