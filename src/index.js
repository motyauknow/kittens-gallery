import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PICTURECARDS } from './content/pictureCards';

let tagsList = [];

PICTURECARDS.map((card) => (
    tagsList.push(...card.tags)
));

tagsList = Array.from(new Set(tagsList));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

export default tagsList;
