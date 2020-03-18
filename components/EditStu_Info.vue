<template>
    <div>
        <el-page-header content="编辑学生信息">
        </el-page-header>
        <el-form :model="a" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
            <el-input v-model="a.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
            <el-radio-group v-model="a.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input v-model="a.age"></el-input>
        </el-form-item>
        <el-form-item label="班级" prop="class_">
            <el-input v-model="a.class_"></el-input>
        </el-form-item>
         <el-form-item label="手机号码" prop="Moblie_num">
            <el-input v-model="a.moblie_number" type="text"
            placeholder="请输入手机号码"
            maxlength="11"
            show-word-limit></el-input>
        </el-form-item>
        <el-form-item>
            <router-link to="home//StusPage">
                <el-button type="primary" @click="editStuInfo(a)">提交信息</el-button>
            </router-link>
         </el-form-item>
        </el-form>
        {{ getChosenInfo(chosenStu_Info)}}
        {{ a }}
    </div>
</template>
<script>
// 导入 eventBus 
import Bus from '../assets/Bus.js'
export default {
    data(){
        return{
            a : "null",
            b : null,
            rules:{
                name:[
                    { required: true, meassage: '请输入名字', trigger:'blur' },
                    { min:2, max:5, message :'长度在 2 到 5 个 字符', trigger:'blur' }
                ],
                age:[
                    { required: true, message: '年龄不能为空'}
                ]
            }
        }
    },
    created(){
        // this.isCheckedBox()
    },
    methods:{
        //去后台拿到选中学生的信息
        getChosenInfo(chosenStu_Info){
            if( this.b < 1){
            this.b++;
            this.axios.get("http://localhost:3000/student/edit",
            {
                params:{
                    id:chosenStu_Info
                }
            }).then(result=>{
            console.log(result.data);    
            this.a = result.data  
            })
         }
         else{
             return console.log("只能拿一次");
             
         }
        },
        editStuInfo(info){
            this.axios.get('http://localhost:3000/student/edit/post',
            {
                params:{
                    id:info
                }
            }
            ).then(res=>{
                console.log("res=>"+res)
            })
        }
    },
    computed:{
        chosenStu_Info(){
            return Bus.massage
        }
    },
}
</script>
<style lang="css">

</style>