import Vue from 'vue'
import Router from 'vue-router'

import Executive from '@/views/Executive/Main'
import ExecutiveLogin from '@/views/Executive/Login/Main'
import ExecutiveDashboard from '@/views/Executive/Dashboard/Main'
import ExecutiveKegiatan from '@/views/Executive/Kegiatan/Main'
import ExecutivePengaduan from '@/views/Executive/Pengaduan/Main'
import ExecutiveKejadian from '@/views/Executive/Kejadian/Main'
import ExecutiveDarurat from '@/views/Executive/Darurat/Main'
import ExecutiveKesatuan from '@/views/Executive/Kesatuan/Main'
import ExecutiveJajaran from '@/views/Executive/Jajaran/Main'
import ExecutiveJajaranDetail from '@/views/Executive/Jajaran/Detail'
import ExecutiveJajaranDetailKegiatan from '@/views/Executive/Jajaran/Kegiatan/Main'
import ExecutiveJajaranDetailPengaduan from '@/views/Executive/Jajaran/Pengaduan/Main'
import ExecutiveJajaranDetailKejadian from '@/views/Executive/Jajaran/Kejadian/Main'
import ExecutiveJajaranDetailDarurat from '@/views/Executive/Jajaran/Darurat/Main'
import ExecutivePersonil from '@/views/Executive/Personil/Main'

Vue.use(Router);

const router = new Router({
  	mode: 'hash',
  	routes: [
		{
	      	path: '/',
	      	component: Executive,
	      	children: [
		        {
		            path: '',
		            name: 'Executive',
		            component: ExecutiveDashboard
				},
				{
		            path: 'jajaran',
		            name: 'Polda Jajaran | Executive',
		            component: ExecutiveJajaran
		        },
				{
		            path: 'jajaran/detail/:polda',
		            name: 'Detail | Polda Jajaran | Executive',
		            component: ExecutiveJajaranDetail
		        },
				{
		            path: 'jajaran/detail/kegiatan/:polda',
		            name: 'Kegiatan | Detail | Polda Jajaran | Executive',
		            component: ExecutiveJajaranDetailKegiatan
		        },
				{
		            path: 'jajaran/detail/pengaduan/:polda',
		            name: 'Pengaduan | Detail | Polda Jajaran | Executive',
		            component: ExecutiveJajaranDetailPengaduan
		        },
				{
		            path: 'jajaran/detail/kejadian/:polda',
		            name: 'Kejadian | Detail | Polda Jajaran | Executive',
		            component: ExecutiveJajaranDetailKejadian
		        },
				{
		            path: 'jajaran/detail/darurat/:polda',
		            name: 'Darurat | Detail | Polda Jajaran | Executive',
		            component: ExecutiveJajaranDetailDarurat
		        },
		        {
		            path: 'kegiatan',
		            name: 'Kegiatan | Executive',
		            component: ExecutiveKegiatan
		        },
		        {
		            path: 'pengaduan',
		            name: 'Pengaduan | Executive',
		            component: ExecutivePengaduan
		        },
		        {
		            path: 'kejadian',
		            name: 'Kejadian | Executive',
		            component: ExecutiveKejadian
		        },
		        {
		            path: 'darurat',
		            name: 'Darurat | Executive',
		            component: ExecutiveDarurat
				},
				{
		            path: 'kesatuan',
		            name: 'Kesatuan | Executive',
		            component: ExecutiveKesatuan
		        },
		        {
		            path: 'personil',
		            name: 'Personil | Executive',
		            component: ExecutivePersonil
		        },
		    ]
		},
		{
			path: '/login',
			name: 'Login',
			component: ExecutiveLogin,
		}
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.name + ' | ' + appName
    next()
})

export default router
