import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "./pages/WeatcherApp/Layout/Layout"
import Home from "./pages/WeatcherApp/Home/Home"
import History from "./pages/WeatcherApp/History/History"

const App = () => {
  return (
    <BrowserRouter>
  <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/*<Route path='/history' element={<History/>}/>*/}
          <Route path='*' element='Page not found'/>
        </Routes>
      </Layout> 


      WeatherApp
    </BrowserRouter>
  )
}

export default App
