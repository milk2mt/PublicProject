<!--
 * @Description: 401无访问权限
 * @Version: v1.0
 * @Author: herman
 * @Date: 2020-05-14 13:22:25
 * @LastEditors: herman
 * @LastEditTime: 2021-04-06 15:53:24
 * @FilePath: /vue-js-herman/src/views/error/401.vue
--> 

<template>
	<div style="height: 95vh;display: flex;align-items: center;justify-content: center;">
        <div style="text-align: center; color:#999; font-size: 30px;">
            <img src="../../assets/img/401_images/401.gif" />
            <p>{{$t("msg.errMsg401")}}</p>
            <router-link :to="{path: '/about'}">
                <el-button type="text"><span style="font-size:20px" v-text="$t('btn.btn401')"></span></el-button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
export default {}
</script>

<style scoped>
</style>
