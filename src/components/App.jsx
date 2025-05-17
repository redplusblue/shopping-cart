import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;