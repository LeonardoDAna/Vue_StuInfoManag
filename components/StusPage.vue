<template>
  <div class="StusPage">
      <el-button type="primary" @click="$router.push('AddStu_Info')" style="margin-top:10px;margin-bottom:35px;">添加学生</el-button>
    <div class="stu_tab">
      <el-table style="width: 100%" :data="userInfo">
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="性别" prop="sex"></el-table-column>
        <el-table-column label="手机号码" prop="moblie_number"></el-table-column>
        <el-table-column label="班级" prop="class_"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <router-link to="/EditStu_Info">
              <el-button size="small" @click="handleClick(scope.row.ID)">编辑</el-button>
            </router-link>
            <el-button size="small" @click="refresh(scope.row.ID)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- {{ chosenStu_Info }} -->
    </div>
  </div>
</template>

<script>
// import { log } from 'util'
import Bus from "../assets/Bus.js";
export default {
  inject: ["reload"], //注入
  data() {
    return {
      userInfo: null,
      chosenStu_ID: "son of bicth!",
      abba: null
    };
  },
  created() {
    this.getObj();
    // consthis.getObj()
  },
  methods: {
    refresh(id) {
      this.axios
        .get("http://localhost:3000/student/delete", {
          params: {
            id: id
          }
        })
        .then(result => {
          console.log("res=>" + res);
        });
      this.reload();
    },
    getObj: function() {
      this.axios.get("http://localhost:3000/student").then(result => {
        // console.log(result.data);
        this.userInfo = result.data;
      });
    },
    handleClick: function(id) {
      this.chosenStu_Id = id;
      Bus.$emit("chosenStu_Info", this.chosenStu_Id);
    }
    //     deleteStuInfo(id){
    //         this.axios.get("http://localhost:3000/student/delete",
    //     {
    //       params:{
    //           id:id
    //       }
    //   }
    //   ).then(result=>{
    //     console.log("res=>"+res)
    //   })
    // }
  }
};
</script>
<style lang="css">
.StusPage {
  width: 100%;
  height: 100%;
}
.el-button {
  float: left;
}
</style>