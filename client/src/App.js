import React from 'react';
import Form from './component/Form';
import auth from './auth';
import Home from './component/Home';

function App() {
	if (auth.isAuthenticated()) return <Home />;
	else return <Form />;
}

export default App;
