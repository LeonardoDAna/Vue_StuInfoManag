
// 导入 路由模块
import VueRouter from 'vue-router'
import Stuspage from '../components/Stuspage.vue'
import addsubject from '../components/addsubject.vue'
import testShop from '../components/testShop.vue'
import AddStu_Info from '../components/AddStu_Info.vue'
import EditStu_Info from '../components/EditStu_Info.vue'
import Navbar from '../components/Navbar.vue'
import Carousel from '../components/Carousel.vue'
import subjectList from '../components/subjectList.vue'


const router = new VueRouter({
    routes:[
        {path:'/',component:Carousel},
        {path:'/addsubject',component:addsubject},
        {path:'/Navbar',component:Navbar},
        {path:'/StusPage',component:Stuspage},
        {path:'/subjectList',component:subjectList},
        {path:'/testShop',component:testShop},
        {path:'/AddStu_Info',component:AddStu_Info},
        {path:'/EditStu_Info',component:EditStu_Info},
        {name:'home',path:'/StusPage',component:Stuspage,redirect:'/StusPage'}
    ]
})
// 导出
export default router


