<template>
	<button :class="classes">
		<!-- 默认插槽 -->
		<span v-if="$slots.default">
			<slot></slot>
		</span>
	</button>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
export default defineComponent({
	name: "tailorButton",
	props: {
		type: {
			type: String,
			default: "primary",
			validator(type: string) {
				let flag: boolean = ![
					"warning",
					"danger",
					"success",
					"info",
					"primary",
				].includes(type);
				if (flag) {
					let str: string =
						`button的type只能是` +
						[
							"warning",
							"danger",
							"success",
							"info",
							"primary",
						].join("、");
					throw new Error(str);
				}
				return true;
			},
		},
		position: {
			type: String,
			default: "left",
		},
	},
	setup(props: any) {
		const classes = computed(() => [
			"tailor-button",
			`tailor-button-${props.type}`,
			`tailor-button-${props.position}`,
		]);
		return {
			classes,
		};
	},
});
</script>