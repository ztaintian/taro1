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
import axios from '../../http/index.js'
export default {
  mounted() {
    console.log(this)
  },
  setup() {
    const msg = ref("Hello world");
    axios.get('').then(() => {

    })
    return {
      msg
    };
  },
};
</script>
