<template>
  <n-dropdown trigger="click" :options="data" @select="handleSelect">
    <n-button>{{ modelValue }}</n-button>
  </n-dropdown>
</template>
<script setup lang="ts">
import { TDropdownLabel } from "../../types/store.ts";
import { NDropdown, NButton } from "naive-ui";
defineProps<{
  data: TDropdownLabel<string | number>[];
  modelValue?: string | number;
  wrClassName?: string;
  withDefaultOption?: boolean;
}>();
const emit = defineEmits<{
  "update:modelValue": [string | number];
}>();

const handleSelect = (value: string | number) => {
  emit("update:modelValue", value);
};
</script>
