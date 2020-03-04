<template>
    <div class="testTwo">
    <div class="subjectList" v-for="(item,j) in shopList" :key="item.id">
      <h2>[{{fmtSubjectType(item.questionType )}}] {{item.title}}</h2>
      <div>
        <el-tag>{{item.value[0]}}</el-tag>
        <el-tag type="success">{{item.value[1]}}</el-tag>
        <el-tag type="info">{{item.value[2]}}</el-tag>
      </div>
      <el-button class="btnShop" size="mini" type="danger" @click="del_shoplist(j)">移除试题车</el-button>

      <!-- a&&b a和b同时为真才为真 a||b a和b其中有一个为真就为真-->

      <ul v-if="shopList[j].questionType===0||shopList[j].questionType===1">
        <li v-for="(o,i) in item.options" :key="o.id">{{fmtNumber2EN(i)}}.{{o.text}}</li>
      </ul>
      <div v-if="shopList[j].questionType===SUBJECT_TYPE.DAN_XUAN_TI">答案: {{item.answer}}</div>
      <div v-if="shopList[j].questionType===SUBJECT_TYPE.DUO_XUAN_TI">答案: {{fmtDuoXuan(item.answer)}}</div>
      <div v-if="shopList[j].questionType===SUBJECT_TYPE.PAN_DUAN_TI">答案: {{fmtTandF(item.answer)}}</div>
      <div>解析: {{item.desc}}</div>
    </div>
    </div>
</template>

<script>
import { SUBJECT_TYPE } from "../config/index";
import util from "../config/util";
import {mapState,mapGetters} from 'vuex'
export default {
name:'shoplist',
    data(){
        return{
 SUBJECT_TYPE: {
        DAN_XUAN_TI: 0,
        DUO_XUAN_TI: 1,
        PAN_DUAN_TI: 2,
        LUN_SHU_TI: 3
      },
    };
  },
  methods: {
    fmtSubjectType: util.fmtSubjectType,
    fmtNumber2EN: util.fmtNumber2EN,
    fmtTandF: util.fmtTandF,
    fmtDuoXuan: util.fmtDuoXuan,
    del_shoplist:function(i){
        this.shopList.splice(i,1)
    }
        },
    computed:{
        ...mapState(['shopList']),
        ...mapGetters(['shopcount'])
    }
    }
</script>
<style lang="css">
.testTwo{
    /* background-color: red; */
      padding-right: 40px;
  padding-left: 40px;
  padding-bottom: 100px;
}
</style>