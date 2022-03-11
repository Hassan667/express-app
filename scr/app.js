// express
/**framework of node help build web app
 * (crud opreations)
 * create --> post
 * get/read --> get
 * update --~> patch
 * delete --> delete
 */

// www.google.com
// localhost:3000

// express
// npm init -y
// npm i express
// npm i nodemon -g

// nodemon scr / app.js  (run)

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//www.facebook.com --> home page
// local host : 3000
//www.facebook.com/me

//req --> carry info of requset
//res --> response taht is send to you when yuo open page
// app.get("/", (req, res) => {
//     res.send("hello world");
// });

// app.get("/weather", (req, res) => {
//     res.send("Weather page ");
// });

// app.get("/help", (req, res) => {
//     res.send("Help page");
// });
// app.get("/about", (req, res) => {
//     res.send("About page");
// });
//////////////////////

// Html / json

// app.get("/", (req, res) => {
//     res.send("<h1>Header 1 from home pages</h1> ");
// });
// app.get("/help", (req, res) => {
//     res.send({
//         name: "Hassan",
//         age: 26,
//     });
// });

// weather -->

// app.get("/weather", (req, res) => {
//     res.send({
//         location: "Egypt",
//         weather: "Cold",
//     });
// });

///////////////////////////////

// static files
// // core module
const path = require("path");
console.log(__dirname); // path of main file

console.log(path.join(__dirname, "../public"));
const publicDiriectory = path.join(__dirname, "../public");

app.use(express.static(publicDiriectory));

//////////////////////////////////

// template engine html + dynamic features
//hbs
// npm i hbs
// configure / clarify type template engine

app.set("view engine", "hbs");
// D:\nti\node\express-app\src ,'../ --> D:\nti\node\express-app\templates\views
const viewsDirectory = path.join(__dirname, "../templates/views");
app.set("views", viewsDirectory);

app.get("/", (req, res) => {
    res.render("index", {
        title: "Home page",
        name: "Hassan",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About page",
        name: "Malik",
    });
});

// help img

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help page",
        name: "Osama",
        img: "img/team_member3.jpg",
    });
});

////////////////////////////////////////
//  partials header footer
// nodemon src/app.js -e js,hbs
const hbs = require("hbs");
const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);

app.listen(port, () => {
    console.log(`Server is running`);
});

////////////////////////////////////////////