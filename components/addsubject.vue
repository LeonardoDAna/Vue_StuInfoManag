<template>
  <div class="testOne">
    <el-page-header @back="goback()" content="新建题目" style="margin-bottom:40px"></el-page-header>
    <div>
      <el-form :model="subject" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="题目" prop="name">
          <el-input v-model="subject.title"></el-input>
        </el-form-item>
        <el-form-item label="教材选择" prop="name">
          <div class="block">
            <span class="demonstration"></span>
            <el-cascader v-model="subject.value" :options="materials"></el-cascader>
          </div>
        </el-form-item>
        <el-form-item label="类型">
          <el-radio-group v-model="subject.questionType">
            <el-radio :label="SUBJECT_TYPE.DAN_XUAN_TI">单选题</el-radio>
            <el-radio :label="SUBJECT_TYPE.DUO_XUAN_TI">多选题</el-radio>
            <el-radio :label="SUBJECT_TYPE.PAN_DUAN_TI">判断题</el-radio>
            <el-radio :label="SUBJECT_TYPE.LUN_SHU_TI">论述题</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="选项"
          prop="name"
          v-if="subject.questionType === SUBJECT_TYPE.DAN_XUAN_TI||subject.questionType === SUBJECT_TYPE.DUO_XUAN_TI"
        >
          <el-form-item
            :label="fmtNumber2EN(i)"
            prop="age"
            v-for="(item,i) in subject.options"
            :key="item.id"
          >
            <div class="delbtnflex">
              <input class="el-input__inner" v-model="item.text" />
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="small"
                @click="remove(i)"
                v-show="subject.options.length>2"
              ></el-button>
            </div>
          </el-form-item>
        </el-form-item>
        <el-form-item label="答案">
          <div v-if="subject.questionType === SUBJECT_TYPE.DAN_XUAN_TI">
            <el-radio
              :label="fmtNumber2EN(i)"
              v-model="subject.answer"
              v-for="(item,i) in subject.options"
              :key="item.id"
            >{{ fmtNumber2EN(i)}}</el-radio>
          </div>
          <div v-if="subject.questionType === SUBJECT_TYPE.DUO_XUAN_TI">
            <el-checkbox-group v-model="subject.answer">
              <el-checkbox
                :label="fmtNumber2EN(i)"
                v-for="(item,i) in subject.options"
                :key="item.id"
              >{{ fmtNumber2EN(i)}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div v-if="subject.questionType === SUBJECT_TYPE.PAN_DUAN_TI">
            <el-radio v-model="subject.answer" :label="1">true</el-radio>
            <el-radio v-model="subject.answer" :label="0">false</el-radio>
          </div>
          <div v-if="subject.questionType === SUBJECT_TYPE.LUN_SHU_TI">
            <el-input type="textarea" placeholder="请输入答案" v-model="subject.answer" value="答案"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="解析">
          <el-input type="textarea" v-model="subject.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <router-link to="/subjectList">
            <el-button type="primary" @click="submitList()">提交</el-button>
          </router-link>
          <el-button @click="addOption()" :disabled="this.changeDisabled">增加选项</el-button>
          <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { SUBJECT_TYPE } from "../config/index";
import util from "../config/util";
console.log(util);

export default {
  name: "testquestions",
  methods: {
    goback: function() {
      this.$router.push("subjectList");
    },
    submitList: function() {
      console.table(this.subject);
    },
    fmtNumber2CN: num => util.fmtNumber2CN(num),
    fmtNumber2EN: util.fmtNumber2EN,
    addOption: function() {
      this.subject.options.push({
        id: +new Date(),
        text: ""
      });
    },
    remove: function(num) {
      console.log(this.subject.options);

      this.subject.options.splice(num, 1);
    },
    btndisabled: function() {
      if (this.subject.options.length) {
        if (this.subject.options.length > 10) {
          this.changeDisabled = true;
        } else this.changeDisabled = false;
      }
    },
    optionslist: function() {
      for (let i = 0; i < 4; i++) {
        this.subject.options.push({
          id: +new Date() + i,
          text: ""
        });
      }
    },
    submitList: function() {
      this.axios
        .get("http://localhost:3000/subject/Add", {
          params: this.subject
        })
        .then(res => {
          console.log("res=>", res);
        });
    }
  },
  watch: {
    ["subject.questionType"](val) {
      if (val === SUBJECT_TYPE.DUO_XUAN_TI) this.subject.answer = [];
      else this.subject.answer = "";
    }
  },
  created() {
    this.optionslist();
  },
  updated() {
    // this.btndisabled();
  },
  data() {
    return {
      changeDisabled: false,
      value: [],
      materials: [
        {
          value: "一年级",
          label: "一年级",
          children: [
            {
              value: "苏教版",
              label: "苏教版",
              children: [
                {
                  value: "历史",
                  label: "历史"
                },
                {
                  value: "语文",
                  label: "语文"
                }
              ]
            },
            {
              value: "人教版",
              label: "人教版",
              children: [
                {
                  value: "历史",
                  label: "历史"
                },
                {
                  value: "语文",
                  label: "语文"
                }
              ]
            }
          ]
        },
        {
          value: "二年级",
          label: "二年级",
          children: [
            {
              value: "苏教版",
              label: "苏教版",
              children: [
                {
                  value: "历史",
                  label: "历史"
                },
                {
                  value: "语文",
                  label: "语文"
                }
              ]
            },
            {
              value: "人教版",
              label: "人教版",
              children: [
                {
                  value: "历史",
                  label: "历史"
                },
                {
                  value: "语文",
                  label: "语文"
                }
              ]
            }
          ]
        },
        {
          value: "三年级",
          label: "三年级",
          children: [
            {
              value: "苏教版",
              label: "苏教版",
              children: [
                {
                  value: "历史",
                  label: "历史"
                },
                {
                  value: "语文",
                  label: "语文"
                }
              ]
            },
            {
              value: "人教版",
              label: "人教版",
              children: [
                {
                  value: "历史",
                  label: "历史"
                },
                {
                  value: "语文",
                  label: "语文"
                }
              ]
            }
          ]
        }
      ],
      SUBJECT_TYPE,
      subject: {
        value: [
          {
            booksVersion: ""
          }
        ],
        title: "",
        options: [],
        answer: [],
        desc: "",
        questionType: SUBJECT_TYPE.DAN_XUAN_TI,
        id: +new Date()
      }
    };
  }
};
</script>
<style lang="css">
.delbtnflex {
  display: flex;
  padding: 7px;
}
.testOne {
  padding-right: 40px;
  /* margin-top: 40px; */
  margin-bottom: 100px;
}
.subject {
  list-style: none;
}
</style>