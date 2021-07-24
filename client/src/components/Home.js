import React, { useState,useEffect } from 'react';
import axios from 'axios';
import styles from './styles/home.module.css';

axios.defaults.withCredentials = true;
function Home() {
	const [ state, setState ] = useState({
		value: 'Home Page'
	});

	
	useEffect(() => {
		console.log(state.value)
		axios
			.post('http://localhost:4000/home', {
				withCredentials: true
			})
			.then(function(res) {
				// console.log(res.data);
				setState({ ...state, value: res.data });
			})
			.catch(function(error) {
				console.log(error.response);
			});
	},[state]);


	const logout = () => {
		axios
			.get('http://localhost:4000/logout')
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
		window.location.reload();
	};
	return (
		<div className={styles}>
			<div className={styles.top}>
				<p>OTP-Verify</p>
			</div>
			<div className={styles.bottom}>
				<button onClick={logout} className={styles.logout}>
					Log out
				</button>

				<div className={styles.card} />
				<div className={styles.words}> {state.value}</div>
			</div>
		</div>
	);
}

export default Home;
