<template>
    <div class="login_container">
        <!--登录表单所在矩形-->
        <div class="login_box">
            <!--头像区域-->
            <div class="avatar_box">
                <img src="../assets/login.png" alt="">
            </div>
            <!--登录表单-->
            <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" label-width="0px" class="login_form">
                <!--账号-->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima"
                             ></el-input>
                </el-form-item>
                <!--登录按钮区域-->
                <el-form-item class="login_btns" size="small">
                    <el-button @click="submitForm" type="primary">登录</el-button>
                    <el-button @click="resetForm" type="primary">重置</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm: { // 表单数据
                    username: "",
                    password: "",
                },
                loginFormRules: {// 表单验证规则
                    username: [
                        {required: true, message: '请输入账号', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'change'}
                    ],

                }
            }
        },
        methods: {
            submitForm() {
                // 表单验证
                this.$refs['loginFormRef'].validate((valid) => {
                    if (valid) {// 验证通过
                        // 确认提示
                        this.$confirm('是否确认提交?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            center: true
                        }).then(() => { // 选择确认提交
                            // 选择确认后，调后端接口
                            this.$http.post("login",this.loginForm).then(res=>{
                                console.log(res.status) ;
                                console.log(res.data);
                            }).catch(res=>{
                                console.log(res);
                                console.log(res.status) ;
                                console.log(res.data);
                            });

                            alert("提交成功");
                            this.$refs['loginFormRef'].resetFields();
                        }).catch(() => { // 选择取消
                            this.$message({
                                type: 'info',
                                message: '已取消'
                            });
                        });
                    } else {
                        this.$message.error('登录失败');
                        // alert('校验失败');
                        // return false;
                    }
                })
            }
            ,
            resetForm(){
                this.$refs.loginFormRef.resetFields();
            }
        }
    }
</script>

<!--scoped表示该样式只有当前组件可用-->
<style lang="less" scoped>
    .login_container {
        /*background-color: #2b4b6b;*/
        background-color: yellow;
        height: 100%;
    }

    .login_box {
        height: 250px;
        width: 400px;
        /*background-color: #fff;*/
        background-color: #fff;
        border-radius: 4px;
        position: absolute; // 绝对定位
        left: 50%; // 据左部50%
        top: 50%; // 据上部50%
        transform: translate(-50%, -50%); //  横轴，纵轴移动50%
        .avatar_box {
            width: 100px;
            height: 100px;
            /*border: 1px solid yellow; // 边框*/
            border-radius: 50%; // 边框圆角
            box-shadow: 0 0 10px #fff; // 给边框添加阴影
            padding: 10px; //设置图片和盒子的边距
            // 设置居中
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;

            img {
                width: 100%; // 图片占父元素avatar的100%
                height: 100%;
                border-radius: 50%; // 图片圆角
                background-color: #fff;
            }
        }

        .login_form {
            position: absolute; // 绝对定位
            bottom: 0;
            border: 1px solid red;
            width: 100%;
            padding: 0 10px; // 设置输入框与父元素的内边距
            box-sizing: border-box; // 溢出处理
            .login_btns {
                // 设置按钮在父元素中居中
                display: flex;
                justify-content: center;
            }
        }

    }
</style>