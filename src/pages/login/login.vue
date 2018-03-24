<template>

    <div>

      <h3>login</h3>

      <div>

        {{firstName}}

      </div>

      <button @click="changeValue()">按钮</button>

    </div>

</template>

<script>

  import {mapState,mapMutations} from "vuex"

    export default {
        name: "login",
        data() {
            return {

            }
        },
        computed: {
          ...mapState({
            firstName:state=>state.firstName
          })
        },
        methods: {
          ...mapMutations([
            "changeFirst"
          ]),
          changeValue(){
            console.info(this.firstName)
            //console.info(this.changeFirst)
            this.changeFirst({name:"cl"})
          }
        },
        mounted() {

        }

    }

</script>

<style scoped>


</style>
