<template>
  <div>
    <CrytoCurrency :cryto-list="crytoList">
      <template v-slot:min="{min}">
        <Quote :quote="getMin(min)" />
      </template>

      <template v-slot:max="{max}">
        <Quote :quote="getMax(max)" />
      </template>
      <template
        v-slot:profit="{profit}"
      >${{ (getMax(profit).price - getMin(profit).price ).toFixed(2)}}</template>
    </CrytoCurrency>
  </div>
</template>

<script>
const reduceWhich = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));

import CrytoCurrency from "@/components/Cryto/Table";
import Quote from "@/components/Cryto/Quote";
import data from "@/assets/data.json";

export default {
  components: {
    CrytoCurrency,
    Quote
  },
  data() {
    return {
      crytoList: data
    };
  },

  methods: {
    getMin(arr) {
      return reduceWhich(arr);
    },
    getMax(arr) {
      return reduceWhich(arr, (a, b) => b.price - a.price);
    }
  }
};
</script>

<style>
</style>
