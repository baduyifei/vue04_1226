<!-- @format -->

<template>
	<div>
		<h1>hello</h1>
		<div class="box">
			<h3>
				芙蓉路送辛弃疾
				<button @click="showAndHide = !showAndHide">{{ showAndHide ? '折叠' : '展开' }}</button>
			</h3>
			<ul v-show="showAndHide">
				<li>11111111111111</li>
				<li>22222222222222</li>
				<li>3333333333333333</li>
				<li>44444444444444</li>
			</ul>
			<cpt-3-globol></cpt-3-globol>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				btn: '折叠',
				showAndHide: true,
			};
		},
		methods: {
			fold() {
				// this.showAndHide = !this.showAndHide;
				// if (this.btn == '折叠') {
				// 	this.btn = '展开';
				// } else if (this.btn == '展开') {
				// 	this.btn = '折叠';
				// }
			},
		},
	};
</script>

<style>
	.box {
		width: 300px;
		height: 300px;
		background-color: pink;
	}
</style>
