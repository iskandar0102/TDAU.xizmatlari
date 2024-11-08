
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Oqtuvchilar from './sayt1/Oqtuvchilar';
import Hodimlar from './sayt1/Hodimlar';
import Talabalar from './sayt1/Talabalar';
import Hammasi from './sayt1/Hammasi';


function App() {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Hammasi />} />
                <Route path="/Oqtuvchilar" element={<Oqtuvchilar />} />
                <Route path="/Hodimlar" element={<Hodimlar />} />
                <Route path="/Talabalar" element={<Talabalar />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

