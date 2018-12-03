<template>
    <div class="yellow lighten-3 pa-3">
        <h3>회원 정보를 수정할수있습니다.</h3>
        <p>수정사항</p>
        <v-text-field
            label="이름"
            v-model="user.nameOfChild"
        ></v-text-field>
        <v-text-field
            label="주소"
            v-model="user.addressOfChild"
        ></v-text-field>
        <v-text-field
            label="연락처"
            v-model="user.phoneOfChild"
        ></v-text-field>
        <v-radio-group v-model="user.hasDogOfChild">
          <v-radio
           label="강아지 있음"
           :value="true"
         ></v-radio>
         <v-radio
           label="강아지 없음"
           :value="false"
         ></v-radio>
    </v-radio-group>
    <v-btn @click="changeUser">수정 완료</v-btn>
    </div>
</template>

<script>
import {eventBus} from '../main'  //형제끼리 통신하기 위해

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
      user: {}
    }
  },
  created () {
    this.user.nameOfChild = this.nameOfChild,
    this.user.addressOfChild = this.addressOfChild,
    this.user.phoneOfChild = this.phoneOfChild,
    this.user.hasDogOfChild = this.hasDogOfChild
    //여기서 가공해서 데이터에 넣어줘야 에러가 없음
  },
  methods: {
    changeUser () {
      // console.log(this.user)
      this.$emit('child', this.user)
      // 부모에게 child 신호를 보냄

      // eventBus.$emit('userWasEdited', new Date())
      eventBus.userWasEdited(new Date())
    }
  }
}
</script>