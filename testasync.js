const HData = require('./hdata.js').HData;
const conn = new HData();
async function bruh() {
	console.log("status " + JSON.stringify(await conn.promises.status()));
	console.log("login " + JSON.stringify(await conn.promises.login("root", "changeme")));
	console.log("createuser " + JSON.stringify(await conn.promises.createUser("herronjo", "password", ["getkey"])));
	console.log("getuser " + JSON.stringify(await conn.promises.getUser("herronjo")));
	console.log("updateuser " + JSON.stringify(await conn.promises.updateUser("herronjo", "awesome", true)));
	console.log("getuser2 " + JSON.stringify(await conn.promises.getUser("herronjo")));
	console.log("updatepassword " + JSON.stringify(await conn.promises.updatePassword("herronjo", "password2")));
	console.log("deleteuser " + JSON.stringify(await conn.promises.deleteUser("herronjo")));
	console.log("getuser3 " + JSON.stringify(await conn.promises.getUser("herronjo")));
	console.log("createtable " + JSON.stringify(await conn.promises.createTable("test")));
	console.log("setkey " + JSON.stringify(await conn.promises.setKey("test", "bruh", {messages: [{sender:"herronjo", message:"moment"}]})));
	console.log("getkey " + JSON.stringify(await conn.promises.getKey("test", "bruh")));
	console.log("getproperty " + JSON.stringify(await conn.promises.getProperty("test", "bruh", "messages.0.message")));
	console.log("setproperty " + JSON.stringify(await conn.promises.setProperty("test", "bruh", "messages.0.message", "bruh")));
	console.log("getproperty2 " + JSON.stringify(await conn.promises.getProperty("test", "bruh", "messages.0.message")));
	console.log("queryall " + JSON.stringify(await conn.promises.queryAll("true")));
	console.log("gettables " + JSON.stringify(await conn.promises.getTables()));
	console.log("querytable " + JSON.stringify(await conn.promises.queryTable("test", "true")));
	console.log("tablesize " + JSON.stringify(await conn.promises.tableSize("test")));
	console.log("tablekeys " + JSON.stringify(await conn.promises.tableKeys("test")));
	console.log("deletekey " + JSON.stringify(await conn.promises.deleteKey("test", "bruh")));
	console.log("getkey2 " + JSON.stringify(await conn.promises.getKey("test", "bruh")));
	console.log("tableexists " + JSON.stringify(await conn.promises.tableExists("test")));
	console.log("deletetable " + JSON.stringify(await conn.promises.deleteTable("test")));
	console.log("getkey2 " + JSON.stringify(await conn.promises.getKey("test", "bruh")));
	console.log("logout " + JSON.stringify(await conn.promises.logout()));
	console.log("close " + JSON.stringify(await conn.promises.close()));
}
bruh();