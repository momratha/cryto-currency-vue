<template>
  <el-table :data="crytoList" style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      style="width:20%"
      :formatter="(row, column)=> 
    $moment(row.date ).format('DD-MMMM-YYYY')
    "
    />
    <el-table-column prop="currency" label="Currency" style="width:20%" />

    <el-table-column label="Buy">
      <template slot-scope="scope">
        <slot name="min" v-bind:min="scope.row.quotes">Buy</slot>
      </template>
    </el-table-column>

    <el-table-column label="Sell">
      <template slot-scope="scope">
        <slot name="max" v-bind:max="scope.row.quotes">Sell</slot>
      </template>
    </el-table-column>
    <el-table-column label="Profit">
      <template slot-scope="scope">
        <slot name="profit" v-bind:profit="scope.row.quotes">Profit</slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    crytoList: {
      type: Array,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
