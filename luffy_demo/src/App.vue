<template>
    <div id="app">
    
    <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"><img src="./assets/logo.png" style="width: 50px;height: 50px;margin-top:-15px"></a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li :class="{active:currentIndex==index}" v-for="(item,index) in urls" @click="clickHandler(index)">
          <router-link :to="item.url">{{ item.name }}</router-link> 
        </li>
      </ul>
      <form class="navbar-form navbar-right">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
export default {
  name: 'App',
  data(){
    return {
        urls:[
            {url:'/', name: '首页'},
            {url:'/course', name: '课程介绍'}
        ],
        currentIndex: 0 
    }
  },
  methods:{
      clickHandler(index){
          this.currentIndex = index
      },
  },
  mounted(){
    $.ajax({
      url:'http://127.0.0.1:8000/degreecourse/',
      type:'get',
      success:(allCourses)=>{
          this.$store.state.allCourses = allCourses
          console.log(allCourses)
      },
      error:function(e){
          console.log(e)
      }
    })
  },
  computed:{

  },
  components:{

  }
}
</script>

<style>

</style>
