<!-- @format -->

<template>
	<div>
		<!-- 1 -->
		<cpt1></cpt1>
		<cpt1></cpt1>
		<cpt1></cpt1>

		<!-- 2 -->
		<cpt2></cpt2>
		<cpt2></cpt2>
		<cpt2></cpt2>
		<!-- 3 -->
		<cpt-3-globol></cpt-3-globol>
	</div>
</template>

<script>
	import cpt1 from './components/01-cpt.vue';
	import cpt2 from './components/02-cpt.vue';
	export default {
		components: {
			cpt1,
			cpt2,
		},
		data() {
			return {
				uname: '张三',
			};
		},
		methods: {
			fn() {
				//
			},
		},
	};
</script>

<style>
	/* 1 */
</style>
