import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home'
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer';
import ListCategories from './components/categories/listCategories/listCategories';
import FormCategory from './components/categories/formCategories/formCategories';
import DeleteCategory from './components/categories/deleteCategory.tsx/deleteCategory';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './components/login/Login';
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <>
      <AuthProvider>
        <ChakraProvider>
          <BrowserRouter>
            <NavBar />
            <div className='min-h-[80vh]'>
              <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='/categorias' element={<ListCategories />} />
                <Route path='/cadastroCategoria' element={<FormCategory />} />
                <Route path='/deletarCategory/:id' element={<DeleteCategory />} />
                <Route path='/editarCategory/:id' element={<FormCategory />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </ChakraProvider>
      </AuthProvider>
    </>
  )
}

export default App
