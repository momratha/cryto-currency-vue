<template>
  <div>
    <CrytoCurrency :cryto-list="crytoList">
      <template v-slot:min="{min}">
        <Quote :quote="getMin(min)" />
      </template>

      <template v-slot:max="{max}">
        <Quote :quote="getMax(max)" />
      </template>
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
      return reduceWhich(
        arr,
        (a, b) => a.price - b.price && a.time - b.time > 0
      );
    }
  }
};
</script>

<style>
</style>
