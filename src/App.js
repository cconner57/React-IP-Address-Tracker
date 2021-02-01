import React, { useState } from 'react';
import Input from './components/Input';
import Result from './components/Results';
import Maps from './components/Maps';

import './App.scss';

function App() {
	const [data, setData] = useState({
		ip: '192.212.174.101',
		location: 'Dickinson County, Kansas, 67431',
		timezone: 'UTC-05:00',
		isp: 'SpaceX Starlink',
		latlng: null
	});

	return (
		<div className='App-Container'>
			<Input setData={setData} />
			<Result
				ipAddress={data.ip}
				location={data.location}
				timezone={data.timezone}
				isp={data.isp}
			/>
			<Maps latlng={data.latlng}/>
		</div>
	);
}

export default App;

// 69.89.31.226
// 216.3.128.12