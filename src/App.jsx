import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/user/Home'
import Flights from './pages/user/Flights'
import FlightDetails from './pages/user/FlightDetails'
import "./index.css"
import Pending from './pages/user/Pending'
import History from './pages/user/History'
import Support from './pages/user/Support'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" h-full items-center w-full  ">

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Home />} />

        <Route path='/flights' element={<Flights />} />
        <Route path='/flights/:id' element={<FlightDetails />} />


        <Route path='/pendingFlighs' element={<Pending />} />
        <Route path='/history' element={<History />} />

        <Route path='/support' element={<Support />} />





      </Routes>



    </div>
  )
}

export default App
