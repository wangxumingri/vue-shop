<template>
    <div class="home">
            首页

        <el-button @click="logout" type="primary">退出</el-button>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
            }
        },
        methods: {
            // 退出
            logout(){
                // 清除token
                window.sessionStorage.clear();
                // 导航到登录页
                this.$router.push("/login");
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