<template>
  <div>
    <div class="imgLogo">LeonardeDAna</div>
    <div class="line"></div>
    <div class="navbar">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1" @click="$router.push('/home')">首页</el-menu-item>
        <el-menu-item index="2">处理中心</el-menu-item>
        <el-submenu index="3">
          <template slot="title">我的工作台</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项1</el-menu-item>
            <el-menu-item index="3-4-2">选项2</el-menu-item>
            <el-menu-item index="3-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="4" disabled>消息中心</el-menu-item>
        <el-menu-item index="5">
          <a href="#" target="_blank">订单管理</a>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="usericon">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
        </span>
        <el-dropdown-menu slot="dropdown" >
          <!-- <el-dropdown-item></el-dropdown-item> -->
          <el-dropdown-item>更改密码</el-dropdown-item>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>账号设置</el-dropdown-item>
          <el-dropdown-item command="/">退出登入</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar> -->
    </div>
  </div>
</template>
<script>
// 导入 eventBus
export default {
  name: "Navbar",
  data() {
    return {
      a: "123 world!"
    };
  },
  created() {
    // this.isCheckedBox()
  },
  methods: {
    handleCommand:function(command){
      this.$router.push(command)
    },
  }
};
</script>
<style lang="css">
.imgLogo {
  width: 300px;
  height: 60px;
  background-color: #545c64;
  color: coral;
  float: left;
}
.navbar {
  float: left;
}
.usericon {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}
</style>