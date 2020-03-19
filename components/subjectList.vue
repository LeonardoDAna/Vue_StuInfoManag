<template>
  <div class="listview">
    <div style="display:flex">
      <el-button @click="$router.push('/home/addsubject')">新建题目</el-button>
    </div>
    <div class="subjectList" v-for="(item,j) in subject" :key="item.id">
      <h2>[{{fmtSubjectType(item.questionType )}}] {{item.title}}</h2>
      <div>
        <el-tag>{{item.value[0]}}</el-tag>
        <el-tag type="success">{{item.value[1]}}</el-tag>
        <el-tag type="info">{{item.value[2]}}</el-tag>
      </div>
      <el-button class="btnShop" size="mini" type="success" @click="add_shoplist(item)">加入试题车</el-button>

      <!-- a&&b a和b同时为真才为真 a||b a和b其中有一个为真就为真-->

      <ul v-if="subject[j].questionType===0||subject[j].questionType===1">
        <li v-for="(o,i) in item.options" :key="o.id">{{fmtNumber2EN(i)}}.{{o.text}}</li>
      </ul>
      <div v-if="subject[j].questionType===SUBJECT_TYPE.DAN_XUAN_TI">答案: {{item.answer}}</div>
      <div v-if="subject[j].questionType===SUBJECT_TYPE.DUO_XUAN_TI">答案: {{fmtDuoXuan(item.answer)}}</div>
      <div v-if="subject[j].questionType===SUBJECT_TYPE.PAN_DUAN_TI">答案: {{fmtTandF(item.answer)}}</div>
      <div>解析: {{item.desc}}</div>
    </div>
  </div>
</template>

<script>
import { SUBJECT_TYPE } from "../config/index";
import util from "../config/util";
import { mapMutations } from "vuex";
export default {
  name: "subjectList",
  data() {
    return {
      SUBJECT_TYPE: {
        DAN_XUAN_TI: 0,
        DUO_XUAN_TI: 1,
        PAN_DUAN_TI: 2,
        LUN_SHU_TI: 3
      },
      subject: null
    };
  },
  methods: {
    fmtSubjectType: util.fmtSubjectType,
    fmtNumber2EN: util.fmtNumber2EN,
    fmtTandF: util.fmtTandF,
    fmtDuoXuan: util.fmtDuoXuan,
    getSubjectList: function() {
      this.axios.get("http://localhost:3000/subject").then(result => {
        this.subject = result.data;
      });
    },
    ...mapMutations(["add_shoplist"])
  },
  created() {
    this.getSubjectList();
  }
};
</script>

<style>
.listview {
  padding-right: 40px;
  padding-left: 40px;
  padding-bottom: 100px;
}
.subjectList {
  position: relative;
  padding: 5px 0;
  border-bottom: 1px dashed #ccc;
  line-height: 35px;
}
.subjectList ul li {
  list-style: none;
}
.btnShop {
  position: absolute;
  right: 0;
}
</style>