
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
import login from '../components/login/login.vue'
import App from '../components/App.vue'
import main from '../components/main/main.vue'


const router = new VueRouter({
    routes: [
        { path: '/', component: login, meta: { islogin: false } },
        {
            path: '/home', component: main, meta: { islogin: true },
            children: [
                { path: '', component: Carousel, meta: { islogin: true } },
                { path: 'addsubject', component: addsubject, meta: { islogin: true } },
                { path: 'Navbar', component: Navbar, meta: { islogin: true } },
                { path: 'StusPage', component: Stuspage, meta: { islogin: true } },
                { path: 'subjectList', component: subjectList, meta: { islogin: true } },
                { path: 'testShop', component: testShop, meta: { islogin: true } },
                { path: 'AddStu_Info', component: AddStu_Info, meta: { islogin: true } },
                { path: 'EditStu_Info', component: EditStu_Info, meta: { islogin: true } },
                { name: 'home', path: '/StusPage', component: Stuspage, redirect: '/StusPage', meta: { islogin: true } }
            ]

        },

    ]
})
// 导出
export default router


