import Vue from 'vue'
import Router from 'vue-router'
import Vmain from '@/components/Vmain'
import Vcourse from '@/components/VdegreeCourse'
import Vdetail from '@/components/VdegreeDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vmain',
      component: Vmain
    },
    {
    	path: '/course',
    	name: 'Vcourse',
    	component: Vcourse,
    	children:[
    		{
    			path: '/detail',
    			// name: 'Vdetail',
    			component: Vdetail
    		}
    	]
    },
  ]
})
