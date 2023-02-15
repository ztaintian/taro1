<template>
  <view class="index">
    <view class="list">
      <text class="title">dadasd</text>
    </view>
  </view>
</template>

<script>
import { ref } from "vue";
import "./index.styl";

export default {
  setup() {
    const msg = ref("Hello world");
    return {
      msg
    };
  },
};
</script>
