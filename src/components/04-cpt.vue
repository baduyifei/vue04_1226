<!-- @format -->

<template>
	<div>
		<h4>标题: {{ title }}</h4>
		<p>价格: {{ price }}</p>
		<p>数量: {{ count }}</p>
	</div>
</template>

<script>
	export default {
		props: ['title', 'price', 'count'],
	};
</script>

<style scoped>
	div {
		width: 300px;
		height: 300px;
		background-color: orangered;
		border: 2px solid #000;
	}
</style>
