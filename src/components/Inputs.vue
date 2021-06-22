<template>
  <form>
    <label>
      Builderの座標
      <input type="number" :value="value.builder[0]" @input="updateValue('builder', 0, $event.target.value)" />
      <input type="number" :value="value.builder[1]" @input="updateValue('builder', 1, $event.target.value)" />
      <input type="number" :value="value.builder[2]" @input="updateValue('builder', 2, $event.target.value)" />
    </label>
    <label>
      Builderの座標
      <input type="number" :value="value.p1[0]" @input="updateValue('p1', 0, $event.target.value)" />
      <input type="number" :value="value.p1[1]" @input="updateValue('p1', 1, $event.target.value)" />
      <input type="number" :value="value.p1[2]" @input="updateValue('p1', 2, $event.target.value)" />
    </label>
    <label>
      Builderの座標
      <input type="number" :value="value.p2[0]" @input="updateValue('p2', 0, $event.target.value)" />
      <input type="number" :value="value.p2[1]" @input="updateValue('p2', 1, $event.target.value)" />
      <input type="number" :value="value.p2[2]" @input="updateValue('p2', 2, $event.target.value)" />
    </label>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { hasProperty } from '../../lib/util';
import { isInputData } from '../InputData';
import type { InputData } from '../InputData';
type InputDataLike = InputData & { [key: string]: unknown[] };

export default defineComponent({
  props: {
    value: {
      require: true,
      type: Object as () => InputDataLike,
    },
  },
  emits: ['input'],
  setup(props, { emit }) {
    const updateValue = (key: string, i: number, value: string) => {
      const re = { ...props.value };
      if (!hasProperty(re, key) || re[key] == null) return;
      re[key][i] = parseInt(value);
      if (!isInputData(re)) return;
      emit('input', re);
    };
    return { updateValue };
  },
});
</script>