<template>
  <div>
    <el-menu :default-openeds="['1', '3']" style="padding:0">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>导航一
        </template>
        <el-menu-item-group style="padding:0">
          <router-link to="/StusPage" tag="el-menu-item">StudentsInformation</router-link>
          <router-link to="/subjectList" tag="el-menu-item">
            <el-menu-item>我的题库</el-menu-item>
          </router-link>
          <router-link to="/testShop" tag="el-menu-item">
            <el-menu-item>
              试题车现有
              <strong style="color:red">{{shopcount}}</strong> 题
            </el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
// 导入 eventBus
import { mapState, mapGetters } from "vuex";
export default {
  name: "Aside",
  data() {
    return {
      a: "123 world!"
    };
  },
  created() {
    // this.isCheckedBox()
  },
  methods: {},
  computed: {
    ...mapState(["shopList"]),
    ...mapGetters(["shopcount"])
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
</style>