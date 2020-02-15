<template>
    <div class="All">

<el-container>
  <el-header class="header" style="padding:0">
    <Navbar>
    </Navbar>
  </el-header>
  <el-container>
    <el-aside>
      <Aside>
      </Aside>
    </el-aside>
        <!-- </el-scrollbar> v-if="isRouterAlive" -->
    <el-main>
        <router-view v-if="isRouterAlive" >
          
        </router-view>
    </el-main>
  </el-container>
</el-container>

    </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Aside from './Aside.vue';
export default {
    name: 'App',
    components:{
      Navbar,
      Aside
    },
    provide(){
        return{
            reload:this.reload
        }
    },
    data(){
        return{
           a: 'hello world!',
           isRouterAlive:true,
        }
    },
    methods:{
      reload(){
          this.isRouterAlive = false ;
          this.$nextTick(function(){
              this.isRouterAlive = true ;
          })
        }
    }
}
</script>
<style lang="css">
.aside-component_scroll{
    overflow-x: hidden;
}
.All{
    width: 100%;
    height: 100%;
    padding:0;
    margin: 0;
}
.el-container{
    height: 100%;
}
.el-header{
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 100%;
}
.header{
  padding: 0;
}
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height:100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-main{
    text-align: left;
    line-height: 65px;
  }
  li{
    padding: 0;
  }
</style>
