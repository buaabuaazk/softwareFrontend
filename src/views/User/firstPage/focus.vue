<template>
    <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        :stripe="stripe"
        style="width: 100%">
        <el-table-column
            prop="date"
            label="日期"
            width="180">
         </el-table-column>
         <el-table-column
            prop="name"
            label="姓名"
            width="180">
         </el-table-column>
         <el-table-column
            prop="address"
            label="地址">
         </el-table-column>
    </el-table>
    <div class="pagination">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[2, 5, 10]"
            :page-size="pagesize"
            :current-page="currentPage"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
    </el-pagination>
    </div>
</template>
<script>
export default {
    data(){
        return{
            stripe:true,//是否为斑马纹 table
            tableData: [{
                "date":"1",
                "name":"1",
                "address":"1"
            },
            {
                "date":"1",
                "name":"1",
                "address":"1"
            },
            {
                "date":"1",
                "name":"1",
                "address":"1"
            },
            {
                "date":"1",
                "name":"1",
                "address":"1"
            },
            {
                "date":"1",
                "name":"1",
                "address":"1"
            },
            {
                "date":"1",
                "name":"1",
                "address":"1"
            }
            ],
            currentPage:1,
            pagesize:2,
            total:20,
        }
    },
    methods:{
        handleSizeChange(val) {
            this.pagesize=val;
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        },
    }
}
</script>