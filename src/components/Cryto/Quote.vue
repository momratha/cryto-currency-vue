<template>
  <el-row>
    <!-- <el-col :span="12">{{ $props.quote.time }}</el-col> -->
    <el-col :span="12">{{ $props.quote.price }}</el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    quote: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
