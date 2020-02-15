<template>
    <div>
        <el-menu :default-openeds="['1', '3']" style="padding:0">
        <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group style="padding:0">
            <router-link to="/StusPage" tag="el-menu-item">
                <el-menu-item>StudentsInformation</el-menu-item>
            </router-link>
            <router-link to="/testOne" tag="el-menu-item">
                <el-menu-item>黑</el-menu-item>
            </router-link>
            <router-link to="/testTwo" tag="el-menu-item">
                <el-menu-item>红</el-menu-item>
            </router-link>
        </el-menu-item-group>
        </el-submenu>
        </el-menu>
    </div>
</template>
<script>
// 导入 eventBus 
export default {
    name:'Aside',
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