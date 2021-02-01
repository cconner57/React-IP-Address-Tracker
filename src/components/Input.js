import React, { useState } from 'react';

const Input = ({ setData }) => {
	const [address, setAddress] = useState('');
	const [error, setError] = useState(false);

	const formHandler = async (e) => {
		e.preventDefault();
		try {
			if (address) {
				await fetch(
					`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}&ipAddress=${address}`
				)
					.then((response) => response.json())
					.then((data) =>
						setData({
							ip: data.ip,
							location: `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`,
							timezone: `UTC${data.location.timezone}`,
							isp: data.isp,
							latlng: [data.location.lat, data.location.lng],
						})
					);
				setError(false);
			}
		} catch (e) {
			console.log(e);
			setError(true);
		}
		setAddress('');
	};

	return (
		<div className='Input-Container'>
			<h1>IP Address Tracker</h1>
			<form onSubmit={formHandler}>
				<input
					type='text'
					name='ip-address'
					placeholder='Search for any IP address'
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
				<button>
					<svg xmlns='http://www.w3.org/2000/svg' width='11' height='14'>
						<path fill='none' stroke='#FFF' strokeWidth='3' d='M2 1l6 6-6 6' />
					</svg>
				</button>
			</form>
			{error && (
				<div className='Input-Error'>
					<h4>Please try again</h4>
				</div>
			)}
		</div>
	);
};

export default Input;
