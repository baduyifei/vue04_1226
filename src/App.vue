<!-- @format -->

<template>
	<div>
		<h1>列表</h1>

		<cpt4 v-for="(item, i) in list" :key="i" :title="item.uutitle" :price="item.uuprice" :count="item.uucount"></cpt4>
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
				list: [
					{
						uutitle: 'ChristmasDay11',
						uuprice: '11',
						uucount: '11',
					},
					{
						uutitle: 'ChristmasDay22',
						uuprice: '22',
						uucount: '22',
					},
					{
						uutitle: 'ChristmasDay33',
						uuprice: '33',
						uucount: '33',
					},
				],
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
