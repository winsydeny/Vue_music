import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage'
import Movies from '@/components/Movies'
import Music from '@/components/Music'
import Recent from '@/components/FM'
import CateList from '@/components/Categories/CateList'
import Hot from '@/components/MusicList/Hot'
import Category from '@/components/MusicList/Category'
import Search from '@/components/MusicList/Search'
import CategoryDetail from '@/components/MusicList/CategoryList/CategoryDetail'
import MusicPage from '@/components/MusicPage'
import Video from '@/components/Child_Components/Video'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/music/hot',
      meta:{title:'Music'}

    },
    {
      path: '/music',
      name: 'music',
      component: Music,
      meta:{title:'Music'},
      children:[{
        path:'/music/hot',
        name:'hot',
        component:Hot,
      meta:{title:'Music'},

      },
      {
        path:'/music/category',
        name:'category',
        component:Category,
        meta:{title:'category'}
      },
      {
        path:'/music/search',
        name:'search',
        component:Search,
        meta:{title:'search'}
      }
    ]
    },
    {
      path:'/recents',
      name:'recent',
      component:Recent,
      meta:{title:'FM'}
    },
    {
      path:'/movies',
      name:'movies',
      component:Movies,
      meta:{title:'Movie'}

    },
    {
      path:'/movies/video',
      name:'viedo',
      component:Video
    },
    {
      path:'/music/catelist',
      name:'catelist',
      component:CateList
    },
  {
    path:'/music/category/categorydetail',
    name:'categorydetail',
    component:CategoryDetail

  },
  {
    path:'/musicpage',
    name:'musicpage',
    component:MusicPage
  }
  ]
})
