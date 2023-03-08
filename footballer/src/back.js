import React, { Component } from 'react';

class foot1 extends Component {
render() {
	const myStyle={
		backgroundImage:
"url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdGJhbGwlMjBzdGFkaXVtfGVufDB8fDB8fA%3D%3D&w=1000&q=80')",
		height:'100vh',
		marginTop:'-70px',
		fontSize:'50px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	};
	return (
	<div style={myStyle}>
		<h1> geeksforgeeks </h1>
	</div>
	);
}
}

export default foot1;

    