<template>
    <div>
        <router-link class="mui-tab-item"
                     :to="{path:'/employee/add',query:{}}">
            <el-button type="primary" size="small">添加</el-button>
        </router-link>

        <el-table
                :data="list"
                stripe
                style="width: 100%">
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="gender" label="性别" width="120">
            </el-table-column>
            <el-table-column prop="age" label="年龄" width="150">
            </el-table-column>
<!--            <el-table-column prop="departmentId" label="部门id" width="250">-->
<!--            </el-table-column>-->
            <el-table-column prop="departmentName" label="部门名称" width="250">
            </el-table-column>

            <el-table-column label="操作" width="80">
                <template slot-scope="option">
                    <el-button
                            size="small"
                            type="text"
                            @click="editEmployee(option.row.id)">编辑
                    </el-button>

                    <el-button
                            size="small"
                            type="text"
                            @click="deleteEmployee(option.row.id)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--分页-->
<!--        <el-pagination-->
<!--                layout="prev, pager, next"-->

<!--                :total="total"-->
<!--                :page-size="params.size"-->
<!--                :current-page="params.page"-->
<!--                v-on:current-change="changePage"-->
<!--                style="float:right">-->
<!--        </el-pagination>-->


    </div>
</template>

<script>
    export default {
        name: "employee-list",
        data() {
            return {
                list: []
            }
        },
        methods:{
            query:function(){
                this.$http.post("http://192.168.5.110:10000/vue/shop/employee/list").then(res=>{
                    console.log(res.data);
                    this.list = res.data.data;
                    console.log(this.list);

                }).catch(res=>{
                    console.log(res);
                    console.log(res.status) ;
                    console.log(res.data);
                });

            },
            editEmployee:function (id) {
                alert(id);
            },
            deleteEmployee:function (id) {
                alert(id);
            }
        }
        // ,
        // created() {
        //     // 查询站点
        //     this.getSiteSelect();
        //     //从路由上获取参数：回显
        //     this.params.page = Number.parseInt(this.$route.query.page || 1);
        //     this.params.siteId = this.$route.query.siteId || '';
        // }
        ,
        mounted() {
            //当DOM元素渲染完成后调用query
            this.query()
        }
    }
</script>

<style scoped>

</style>