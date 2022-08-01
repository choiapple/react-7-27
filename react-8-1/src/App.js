import './App.css';
import Home from './jsx/pages/Home'
import Cart from './jsx/pages/Cart'
import Header from './jsx/components/layout/Header'
import Footer from './jsx/components/layout/Footer'
import {BrowserRouter, 
    Routes, 
    Route, 
} from "react-router-dom";
import './css/mystyle.css'
function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Cart' element={<Cart/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;