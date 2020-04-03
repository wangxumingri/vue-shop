<template>
    <div class="login_container">
        <!--登录表单所在矩形-->
        <div class="login_box">
            <!--头像区域-->
            <div class="avatar_box">
                <img src="../assets/20170410095843_SEvMy.thumb.700_0.png" alt="">
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<!--scoped表示该样式只有当前组件可用-->
<style lang="less" scoped>
.login_container{
    /*background-color: #2b4b6b;*/
    background-color: yellow;
    height: 100%;
}
.login_box{
    height:250px;
    width: 400px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;// 绝对定位
    left: 50%;// 据左部50%
    top: 50%; // 据上部50%
    transform: translate(-50%,-50%);//  横轴，纵轴移动50%
    .avatar_box{
        width: 100px;
        height: 100px;
        /*border: 1px solid yellow; // 边框*/
        border-radius: 50%;// 边框圆角
        box-shadow: 0 0 10px #fff; // 给边框添加阴影
        padding: 10px;//设置图片和盒子的边距
        // 设置居中
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        img{
            width: 100%;// 图片占父元素avatar的100%
            height: 100%;
            border-radius: 50%;// 图片圆角
            background-color: #fff;
        }
    }
}
</style>