<template>
  <div>
    <el-page-header @back="goback()" content="添加学生"></el-page-header>
    <el-form :model="a" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="a.name" placeholder="请输入名字"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="a.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="a.age" placeholder="年龄"></el-input>
      </el-form-item>
      <el-form-item label="班级" prop="class_">
        <el-input v-model="a.class_" placeholder="请输入班级"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="Moblie_num">
        <el-input
          v-model="a.moblie_number"
          type="text"
          placeholder="请输入手机号码"
          maxlength="11"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item>
        <router-link to="/StusPage" tag="a">
          <el-button type="primary" @click="stuInfoPost(a)">提交信息</el-button>
        </router-link>
      </el-form-item>
    </el-form>
    {{ a }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: {
        name: "南瓜",
        age: "22",
        sex: "女",
        class_: "二年三班",
        moblie_number: "88888888888"
      },
      rules: {
        name: [
          { required: true, meassage: "请输入名字", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个 字符", trigger: "blur" }
        ],
        age: [{ required: true, message: "年龄不能为空" }]
      }
    };
  },
  methods: {
    stuInfoPost: function(info) {
      this.axios
        .get("http://localhost:3000/student/new/post", {
          params: {
            id: info
          }
        })
        .then(res => {
          console.log("res=>", res);
        });
    },
    goback: function() {
      console.log(this.$route.path);
      this.$router.push({
        path: `/StusPage/`
      });
    }
  }
};
</script>
<style lang="css">
</style>