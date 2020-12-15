
<template>
  <div id="all">
    <el-button type="primary" @click="is_addroot=true">新增根节点</el-button>
    <el-table :data="root" v-if="is_addroot">
      <el-table-column label="层级">
        <template slot-scope="p">
          <el-select v-model="p.row.level" placeholder="请选择">
            <el-option
              v-for="item in level_data"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>

      <el-table-column label="节点类型">
        <template slot-scope="p">
          <el-select v-model="p.row.type" placeholder="请选择">
            <el-option
              v-for="item in type_data"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="节点名称">
        <template slot-scope="p">
          <!-- <el-input v-model="p.row.name" placeholder="输入节点名称" size="normal" clearable @change=""></el-input> -->
          <el-input v-model="p.row.name" placeholder="输入节点名称" size="normal" clearable></el-input>

        </template>
      </el-table-column>
      <el-table-column label="规模">
        <template slot-scope="p">
          <el-input v-model="p.row.num" placeholder="输入规模" size="normal" clearable></el-input>
        </template>
      </el-table-column>
      <el-table-column label="子节点">
        <template slot-scope="p">
          <el-input v-model="p.row.children" placeholder="输入子节点 如：xxx部门" size="normal" clearable></el-input>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// import tree from './components/createTree'
export default {
  data() {
    return {
      is_addroot: false,
      root: [
        {
          name: '', // 节点名称
          id: '2', // 节点id
          level: 1, // 层级
          num: 0, // 规模
          children: [] // 子节点
        }
      ],
      level_data: [
        { value: 1, label: '一级' },
        { value: 2, label: '二级' },
        { value: 3, label: '三级' },
        { value: 4, label: '四级' },
        { value: 5, label: '五级' }
      ],
      type_data: [
        { value: 1, label: '集团' },
        { value: 2, label: '子公司' },
        { value: 3, label: '控股公司' },
        { value: 4, label: 'BG' },
        { value: 5, label: '组织' },
        { value: 6, label: '中心' },
        { value: 7, label: '部门' }
      ]
    };
  }
};
</script>
<style scoped>
#all {
  width: 100%;
  height: 100%;
}
</style>
