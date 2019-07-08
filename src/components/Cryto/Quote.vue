<template>
  <el-row>
    <el-col>${{ $props.quote.price }}</el-col>
    <el-col>At {{ $moment($props.quote.time, "hmm").format('LT') }}</el-col>
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
