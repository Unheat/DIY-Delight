import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import CreatePc from './pages/CreatePc'
import ViewPcs from './pages/ViewPcs'
import PcDetails from './pages/PcDetails'
import EditPc from './pages/EditPc'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreatePc title='DIY Delight | Customize' />
    },
    {
      path: '/custompcs',
      element: <ViewPcs title='DIY Delight | Saved Builds' />
    },
    {
      path: '/custompcs/:id',
      element: <PcDetails title='DIY Delight | View' />
    },
    {
      path: '/edit/:id',
      element: <EditPc title='DIY Delight | Edit' />
    }
  ])

  return (
    <div className='app'>

      <Navigation />

      { element }

    </div>
  )
}

export default App
