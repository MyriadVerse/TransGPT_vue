// Create a copy button with an icon and interactive functionality
<script setup lang="ts">
import { Copy, Loading, CheckOne } from "@icon-park/vue-next";
import type { Theme } from "@icon-park/vue-next/lib/runtime";
import { ref } from "vue";

const porps = defineProps<{ content: string }>();

// Button configuration, including size, fill color and theme
const btnConfig: {
  size: number;
  fill: string;
  theme: Theme;
} = {
  size: 14,
  fill: "#999",
  theme: "outline",
};

// Prompt text in different button states
const btnTips = {
  copy: "复制全文",
  loading: "",
  success: "已复制到剪贴板！",
  error: "复制失败！",
};
const btnStatus = ref<"copy" | "loading" | "success" | "error">("copy");

// Copy text to clipboard
const copyToClipboard = (content: string = porps.content) => {
  btnStatus.value = "loading";
  navigator.clipboard
    .writeText(content)
    .then(() => setTimeout(() => (btnStatus.value = "success"), 150))
    .catch(() => (btnStatus.value = "error"))
    .finally(() => setTimeout(() => (btnStatus.value = "copy"), 1500));
};
</script>

// Display different icons based on button status
<template>
  <div class="flex items-center cursor-pointer" @click="copyToClipboard()">
    <copy
      v-show="btnStatus === 'copy'" 
      :theme="btnConfig.theme"
      :size="btnConfig.size"
      :fill="btnConfig.fill"
    />
    <loading
      class="rotate"
      v-show="btnStatus === 'loading'"
      :theme="btnConfig.theme"
      :size="btnConfig.size"
      :fill="btnConfig.fill"
    />
    <check-one
      v-show="btnStatus === 'success'"
      :theme="btnConfig.theme"
      :size="btnConfig.size"
      :fill="btnConfig.fill"
    />
    <close-one
      v-show="btnStatus === 'error'"
      :theme="btnConfig.theme"
      :size="btnConfig.size"
      :fill="btnConfig.fill"
    />
    <span class="text-xs ml-0.5 text-gray-500 leading-none">{{
      btnTips[btnStatus]
    }}</span>
  </div>
</template>

// Create rotation animation
// Used to display when copying is in progress 
<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rotate { 
  animation: spin 2s linear infinite;
}
</style>
