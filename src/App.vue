<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <User />  
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import User from './views/User'

export default {
  components: {
    User
  },
  data () {
    return {
      //
    }
  }
}
</script>
