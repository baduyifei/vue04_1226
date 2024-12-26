<!-- @format -->

<template>
	<div>
		<h1>列表</h1>
		<cpt4 title="vue" price="11" count="11"></cpt4>
		<cpt4 title="react" price="22" count="22"></cpt4>
		<cpt4 title="js" price="33" count="33"></cpt4>
		<cpt4 title="html" price="44" count="44"></cpt4>
		<cpt4 :title="uutitle" :price="uuprice" :count="uucount"></cpt4>
	</div>
</template>

<script>
	import cpt4 from './components/04-cpt.vue';

	export default {
		components: {
			cpt4,
		},
		data() {
			return {
				uutitle: 'ChristmasDay',
				uuprice: '88',
				uucount: '12',
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
