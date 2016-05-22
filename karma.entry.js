// Recursively discover all spec files
var context = require.context('./src', true, /\.spec\.js$/);

// Load discovered spec files
context.keys().forEach(context);
