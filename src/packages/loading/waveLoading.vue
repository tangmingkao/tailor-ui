<template>
    <div class="tailor-wave-loading">
        <div :class="classes" class="loading-item"></div>
        <div :class="classes" class="loading-item"></div>
        <div :class="classes" class="loading-item"></div>
        <div :class="classes" class="loading-item"></div>
        <div :class="classes" class="loading-item"></div>
        <div :class="classes" class="loading-item"></div>
        <div :class="classes" class="loading-item"></div>
        <div :class="classes" class="loading-item"></div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
export default defineComponent({
    name: "tailorWaveLoading",
    props: {
        color: {
            type: String,
            default: "primary",
            validator(color: string) {
                if (
                    ![
                        "warning",
                        "danger",
                        "success",
                        "info",
                        "primary",
                    ].includes(color)
                ) {
                    throw new Error(
                        `loading的color只能是` +
                            [
                                "warning",
                                "danger",
                                "success",
                                "info",
                                "primary",
                            ].join("、")
                    );
                }
                return true;
            },
        },
        animateClass: {
            type: String,
            default: "animate1",
        },
    },
    setup(props: any) {
        const classes = computed(() => [
            `tailor-wave-loading-${props.color}`,
            `tailor-wave-loading-${props.animateClass}`,
        ]);
        return {
            classes
        };
    },
});
</script>
