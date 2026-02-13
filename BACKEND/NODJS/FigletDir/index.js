const figlets=require("figlet");

var figlet = require("figlet");

figlet("UTTAM", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});