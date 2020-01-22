import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
     <Router>
		<App />
	 </Router>,
    document.getElementById('root')
);    

// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Navigation from './components/Navigation';

// export { Home, About, Contact, Navigation };

