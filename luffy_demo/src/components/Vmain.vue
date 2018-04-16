<template>
	<div id="vmain">
		<div class="containter">
			<div class="col-md-12">
				<div class="panel panel-default">
				  <div class="panel-heading">
				    <h3 class="panel-title">我的首页</h3>
				  </div>
				  <div class="panel-body">
				    <ul>
				    	<li v-for="data in urls">
				    		<a :href="data.url" @click.prevent='anchorHandler'>{{data.name}}</a>
				    	</li>
				    </ul>
				  </div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Vmain',
		data(){
			return {
				urls:[
					{url:'', name:'我的账户'},
					{url:'', name:'我的课程'}
				]
			}
		},
		methods:{
			anchorHandler(e){
				e.preventDefault()
			}
		},
		computed:{

		},
		components:{

		}
	}
</script>
<style>
	
</style>