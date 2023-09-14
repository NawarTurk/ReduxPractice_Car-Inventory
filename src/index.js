import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');  // find the element
const root = createRoot(el)  // create root

root.render(<App />); // add
