import Vue from "vue"
import Vuex from "vuex"

import mutations from "./mutations"
import index from "./modules/index-modules"

import {firstName} from "../profile"

Vue.use(Vuex);

const state={
  firstName:firstName,
}

const getters={

}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  modules:{
    $index:index
  }
})

export default store
