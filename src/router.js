// 导入 路由模块
import VueRouter from 'vue-router'
import Stuspage from '../components/Stuspage.vue'
import testOne from '../components/testOne.vue'
import testTwo from '../components/testTwo.vue'
import AddStu_Info from '../components/AddStu_Info.vue'
import EditStu_Info from '../components/EditStu_Info.vue'
import Navbar from '../components/Navbar.vue'
import Carousel from '../components/Carousel.vue'

const router = new VueRouter({
    routes:[
        {path:'/',component:Carousel},
        {path:'/Navbar',component:Navbar},
        {path:'/StusPage',component:Stuspage},
        {path:'/testOne',component:testOne},
        {path:'/testTwo',component:testTwo},
        {path:'/AddStu_Info',component:AddStu_Info},
        {path:'/EditStu_Info',component:EditStu_Info},
        {name:'home',path:'/StusPage',component:Stuspage,redirect:'/StusPage'}
    ]
})
// 导出
export default router


