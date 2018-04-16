<template>
	<div id="degree">
		<div class="containter">
			<div col-md-12>
				<div class="panel panel-default">
				  <div class="panel-heading">课程展示</div>
				  <div class="panel-body">
				  	<!-- 课程目录 -->
				    <div class="col-md-3">
					  	<div class="panel panel-default">
						  <div class="panel-heading">课程目录</div>
						  <div class="panel-body">
						    <ul>
						    	<!-- 循环课程 -->
						    	<li v-for="(course, index) in getDegree">
						    		<span class="title">
						    			<router-link @click.native="getDetail(course.id)" to="/detail">
						    				{{ course.name }}
						    			</router-link>
						    		</span>

						    	<p>
						    		<span>
						    			导师:
						    		</span>
						    		<span style="color:green" v-for="teacher in course.teachers"> 
						    			{{ teacher.name }}
						    		</span>
						    	</p>
						    	</li>
						    	<!-- 循环结束 -->
						    </ul>
						  </div>
						</div>
				    </div>
				  	<!-- 课程结束 -->

				  	<!-- 课程详细 -->
				  	<div class="col-md-9">
				  		<router-view></router-view>
				  	</div>
				  	<!-- 详细结束 -->

				  </div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import VdegreeDetail from './VdegreeDetail'
import $ from 'jquery'
	export default {
		name: 'Vcourse',
		data(){
			return {

			}
		},
		methods:{
			getDetail(id){
				console.log(id)
							$.ajax({
								url: 'http://127.0.0.1:8000/degreecourse/'+ id,
								type: 'get',
								success:(data)=>{
									this.$store.state.theDetail = data
									console.log(data)
								}
							})
						}
		},
		computed:{
			getDegree(){
				return this.$store.state.allCourses;
			},

		},
		components:{
			VdegreeDetail,
		}
	}
</script>
<style>
	.title {
		font-size: 18px;
	}
</style>