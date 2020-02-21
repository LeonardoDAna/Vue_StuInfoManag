<template>
    <div>
        <div class="imgLogo">
            LeonardeDAna
        </div>
        <div class="line"></div>
        <div class="navbar">
            <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <router-link to="/" tag="el-menu-item">
                首页
            </router-link>
            <el-menu-item index="">处理中心</el-menu-item>
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
            <el-menu-item index="5"><a href="#" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
        </div>
    </div>
</template>
<script>
// 导入 eventBus 
export default {
    name:'Navbar',
    data(){
        return{
            a : "123 world!",
        }
    },
    created(){
        // this.isCheckedBox()
    },
    methods:{
    }
}
</script>
<style lang="css">
.imgLogo{
    width: 300px;
    height: 60px;
    background-color: #545c64;
    color:coral;
    float: left;
}
.navbar{
    float: left;
}
</style>