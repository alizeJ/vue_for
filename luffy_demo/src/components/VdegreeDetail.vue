<template>
	<div class="VcourseDetail">
		<div class="panel panel-default">
		  <div class="panel-heading">课程详细</div>
		  <div class="panel-body">
		    <ul>

		    	<li v-for="msg in getDetail">
		    		<p>课程名称: {{ msg.name }}</p>
		    		<p>
		    			导师人员安排:
		    			<span v-for="teacher in msg.teacher">
		    				{{ teacher.name }}
		    			</span>
		    		</p>	

		    		<p>
		    			课程价格:
		    			<p v-for="policy in msg.policy">
		    				{{ policy.valid_period }}天需要{{ policy.price }}
		    			</p>
		    		</p>
		    	</li>

		    </ul>
		  </div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Vdetail",
		data(){
			return {

			}
		},
		methods:{

		},
		computed:{
			getDetail(){
				return this.$store.state.theDetail
			}
		},
		components:{

		}
	}
</script>

<style>
	
</style>