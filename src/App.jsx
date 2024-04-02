import { useState } from 'react'
import './App.css'
import TaskInput from './Component/TaskInput'
import { Provider } from 'react-redux'
import store from './Store/store'
import Tasklist from './Component/Tasklist'
import Navbar from './Component/Navbar/Navbar'
function App() {
  return (
    <>
    {/* Wrapping the components inside Provider to make Redux store available */}
     <Provider store={store}>
      <Navbar/>
      <TaskInput/>
      <Tasklist/>
     </Provider>
      
    </>
  )
}

export default App
