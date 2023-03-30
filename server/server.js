const express = require('express');

const app = express();

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.EXPRESS_PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
