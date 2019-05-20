const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
	// console.log(res);
	res.sendFile(path.resolve(__dirname, 'index.html'));
	// console.log(path.resolve(__dirname, 'dist'));
});

app.listen(port);

console.log('Server Started');
