import './App.css'
import Navbar from './components/common/Navbar'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Home from './components/core/Home/Home'
import LoginPage from './pages/LoginPage'
import Searched from '@/pages/Searched'
import Register from './pages/Register'
import SingleVideoPage from './pages/SingleVideoPage'
import Profile from './pages/Profile'
import SettingsPage from './pages/SettingsPage'
import DashboardPage from './pages/DashboardPage'
import LikedVideos from './components/core/Home/LikedVideos'
import OpenRoute from './components/core/Auth/OpenRoute'
// import PrivateRoute from './components/core/Auth/PrivateRoute'


const App = () => {
  return (
    <div
      className='h-screen w-screen overflow-x-hidden bg-black'
    >
      <Navbar/>

      <div className='h-[calc(100vh-4.5rem)] relative w-full'>
        <Routes>
          <Route
            element={<HomePage />}
          >
            <Route path='/' element={<Home/>}/>
            <Route path='/searched' element={<Searched/>}/>
            <Route path='/profile/:profileId' element={<Profile/>}/>
            <Route path='/liked-videos' element={<LikedVideos/>}/>
          </Route>

          <Route path='/login' element={<OpenRoute><LoginPage/></OpenRoute>}/>
          <Route path='/register' element={<OpenRoute><Register/></OpenRoute>}/>
          <Route path='/videos/:videoId' element={<SingleVideoPage/>}/>
          <Route path='/settings' element={<SettingsPage/>}/>
          <Route path='/dashboard' element={<DashboardPage/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
