<template>
  <h1>{{ msg }}</h1>

  <Inputs @input="onInput" />
</template>

<script lang="ts" setup>
import { defineProps, defineComponent, reactive, toRefs } from 'vue'
import Inputs from './Inputs.vue';
import { calc } from '../../lib/lib';
import type { RFToolsCoordinate } from '../../lib/lib';
import type { InputData } from '../InputData';

defineComponent({
  components: {
    Inputs
  },
  setup() {
    const { dim, offset } = toRefs(reactive<RFToolsCoordinate>({
      dim: [0, 0, 0],
      offset: [0, 0, 0]
    }));
    const onInput = (i: InputData) => {
      const re = calc(i.builder, i.p1, i.p2);
      dim.value = re.dim;
      offset.value = re.offset;
    }
    return {
      onInput
    }
  }
})
defineProps({
  msg: String
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
