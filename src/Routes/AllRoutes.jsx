import { Route, Routes } from 'react-router-dom';
import {Home} from '../Pages/index';
import {SingleProduct} from '../Pages/index';


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singleprod' element={<SingleProduct />} />
    </Routes>
  )
}
