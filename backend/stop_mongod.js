const mongoose = require('mongoose');

mongoose.connect("localhost:27017/admin");
mongoose.disconnect();