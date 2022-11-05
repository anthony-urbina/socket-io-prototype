import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const cards = [5, 8, 1, 10, 7, 6, 4, 3, 9, 2];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<App cards={cards}/>);
