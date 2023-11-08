import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '*',
        component: Home
      }      
    ]
  }
]

export default routes