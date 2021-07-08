<template>
	<div id="app">
		<ul>
			<li class="padding--top">
				<tailor-button type="success">危险的</tailor-button>
			</li>
			<li class="padding--top">
				<tailor-wave-loading color="warning" animateClass="animate1"></tailor-wave-loading>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "App",
	components: {},
});
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.padding--top{
    padding-top: 20px;
}
</style>
