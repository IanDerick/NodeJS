const moment = require("moment");
const time = new Date();

const parsedTime = moment(time).format("hh:mm:ss");

console.log(parsedTime);
