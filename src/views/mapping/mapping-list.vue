<template>
  <div class="mapping-container">
    <div class="mapping-search-part">
      <el-row style="margin:20px 0"><el-button type="primary" @click="openWin('MappingAdd')">新建mapping</el-button></el-row>
      <el-form :model="form"  ref="form" label-width="100px">
        <el-form-item label="公司" prop="company">
          <el-input v-model="form.company" placeholder="输入想要搜索的公司名称" />
        </el-form-item>
        <el-form-item label="部门" prop="department">
          <el-input v-model="form.department" placeholder="输入想要搜索的部门名称" />
        </el-form-item>
        <el-form-item>
          <el-row>
           <el-col :span="12">
             <el-button type="primary" @click="search(form)">搜索</el-button></el-col>
             <el-col :span="12">
             <el-button @click="resetForm('form')">清除搜索条件</el-button></el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格部分 -->
    <div class="mapping-table-part">
      <div class="table_content">
        <el-table ref="singleTable" v-loading="tableLoading" border :data="tableData" highlight-current-row>
          <el-table-column prop="root_id" label="ID" align="center"></el-table-column>
          <el-table-column prop="company_name" label="公司名称" align="center">
            <!-- <template slot-scope="scope">
              <img v-if="scope.row.logo !==''" :src="scope.row.logo" width="50" height="50" class="head_pic" />
            </template> -->
          </el-table-column>
          <el-table-column prop="department_name" label="部门" header-align="center"></el-table-column>
          <el-table-column prop="operator" label="操作人" align="center"></el-table-column>
          <el-table-column prop="operation_time" label="操作时间" align="center"></el-table-column>
          <el-table-column prop="operation" label="操作" align="center">
           <template slot-scope="scope">
              <div class="buttons">
                <el-button  type="text" @click="openEdit(scope.row)">查看</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div v-if="page.total_page" class="pagination_body">
          <el-pagination background class="pagination" :current-page="page.currentPage" :page-sizes="page.pageSizes" :page-size="page.pageSize" layout="total, sizes, prev, pager, next, jumper" :page-count="page.total_page" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'MappingList',
  // props: {},
  data() {
    return {
      tableLoading: false,
      form: {
        company: '',
        department: ''
      },
      // 表格数据
      tableData: [],
      page: {
        currentPage: 1,
        pageSizes: [15, 30, 45, 50, 100],
        pageSize: 15,
        total: 20,
        total_page: ''
      }

    };
  },
  created() {},
  mounted() {},
  methods: {
    // 新建mapping
    openWin(name) {
      this.$router.push({ name: name });
    },
    openEdit(row) {
      this.$router.push({ name: 'mappingEdit', query: row.id });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    search(formName) {

    },
    // 渲染表格
    drawTable() {
      this.sousuo();
    },
    // 刷新表格
    refreshTable() {
      this.page.currentPage = 1;
      this.drawTable();
    },
    // 分页
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.page.pageSize = val;
      this.refreshTable();
    },
    handleCurrentChange(val) {
      this.page.currentPage = val;
      this.drawTable();
    }

  }
};
</script>

<style lang="scss" scoped>
.mapping-container{
  background: #f5f5f5;
  padding: 30px;
  .mapping-search-part{
    min-width:1360px;
    background: #fff;
    padding: 30px;
    border-radius: 10px;
  }
  .mapping-table-part{
    background: #fff;
    padding: 30px;
    min-width: 1360px;
     border-radius: 10px;
     margin-top: 30px;
  }
}
</style>
