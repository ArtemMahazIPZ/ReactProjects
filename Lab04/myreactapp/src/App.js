import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    const location = useLocation();

    return (
        <>
            <NavBar />
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default function RootApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}
