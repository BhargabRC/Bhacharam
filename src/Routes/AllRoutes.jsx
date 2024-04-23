import { Route, Routes } from 'react-router-dom';
import {Home} from '../Pages/index';
import {Product} from '../Pages/index';


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:productId' element={<Product />} />
    </Routes>
  )
}
