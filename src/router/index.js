import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contents from '../views/Contents.vue'
import Coursemanagement from '../views/Coursemanagement.vue'
import AddCourse from '../views/AddCourse.vue'
import CourseBox from '../views/CourseBox.vue'
import Qasession from '../views/Qasession.vue'
import Qaright from '../views/Qaright.vue'
import Answerying from '../views/Answerying.vue'


import Edit from '../components/editInput.vue'
import Password from '../components/password.vue'
import Reupload from '../components/reupload.vue'
import Editing from '../components/editing.vue'
import Release from '../components/release.vue'
import Updatas from '../components/updata.vue'
import MyCourseIndex from '../components/myCourseIndex.vue'
import CouserOver from '../components/couserOver.vue'
import CouserRefuse from '../components/couserRefuse.vue'
import CouserOingOing from '../components/couserOingOing.vue'
import Quiz from '../components/quiz.vue'
import Response from '../components/response.vue'
import Seniority from '../components/seniority.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [{
            path: '',
            name: 'contents',
            component: Contents
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            children: [{
                path: '/',
                name: 'infor',
                component: Edit
            }, {
                path: '/infor',
                name: 'infor',
                component: Edit
            },
            {
                path: '/seniority',
                name: 'seniority',
                component: Seniority
            }, {
                path: '/pwd',
                name: 'pwd',
                component: Password
            }, {
                path: '/edit',
                name: 'edit',
                component: Editing
            }]
        },
        {
            path: '/cours',
            name: 'cours',
            component: Coursemanagement,
            children: [{
                path: '',
                name: 'CourseBox',
                component: CourseBox,
                redirect: '/cours/couserOver',
                children: [{
                    path: 'couserOver',
                    name: 'couserOver',
                    component: CouserOver
                }, {
                    path: 'couserOingOing',
                    name: 'couserOingOing',
                    component: CouserOingOing
                }, {
                    path: 'couserRefuse',
                    name: 'couserRefuse',
                    component: CouserRefuse
                }]
            }]
        },
        {
            path: 'qa',
            name: 'qa',
            component: Qasession,
            children: [{
                path: '',
                name: 'qaright',
                component: Qaright,
                redirect: '/qa/quiz',
                children: [{
                    path: 'quiz',
                    name: 'quiz',
                    component: Quiz
                }]
            }, {
                path: 'answerying',
                home: 'answerying',
                component: Answerying,
                children: [{
                    path: '',
                    name: 'response',
                    component: Response
                }]
            }]
        },
        {
            path: '/addcourse',
            name: 'addcourse',
            component: AddCourse,
            children: [
                {
                    path: '',
                    name: "myCourseIndexase",
                    component: MyCourseIndex
                }, {
                    path: '/release',
                    name: "release",
                    component: Release
                }, {
                    path: '/updata',
                    name: "updata",
                    component: Updatas
                }, {
                    path: '/reupload',
                    name: 'reupload',
                    component: Reupload
                }]
        }]
    },
    {path :''}

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
