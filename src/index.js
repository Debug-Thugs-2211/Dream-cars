import React from 'react';

const App = () => {
    return (
        <h1>Dream Cars</h1>
    )
}

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);