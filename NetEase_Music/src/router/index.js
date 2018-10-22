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
      redirect:'/music/hot'
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
      children:[{
        path:'/music/hot',
        name:'hot',
        component:Hot
      },
      {
        path:'/music/category',
        name:'category',
        component:Category
      },
      {
        path:'/music/search',
        name:'search',
        component:Search
      }
    ]
    },
    {
      path:'/recents',
      name:'recent',
      component:Recent
    },
    {
      path:'/movies',
      name:'movies',
      component:Movies
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
