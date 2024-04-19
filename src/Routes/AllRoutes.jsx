import { Route, Routes } from 'react-router-dom';
import {Home} from '../Pages/index';


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
  )
}
