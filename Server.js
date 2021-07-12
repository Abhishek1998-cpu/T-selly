// Acquiring Modules
const express = require("express");
const App = express();
const port = 3000;

// Setting View Engine (Template Engine)
App.use(express.static("public"));
App.set("view-engine", "ejs");
App.use(express.urlencoded({ extended: false }));

// Routing
App.get("/", (req, res) => {
  //   res.send("Welcome to the Express Server");
  // res.render("Index.ejs");
  res.render("Login.ejs");
});

App.get("/homepage", (req, res) => {
  res.render("Index.ejs");
});

App.get("/reg", (req, res) => {
  res.render("Reg.ejs");
});

App.post("/login", (req, res) => {
  if (req.body.username == "admin" && req.body.password == 123) {
    res.redirect("/homepage");
  } else {
    res.send("Invalid Credentials");
    res.end();
  }
});

App.post("/reg", (req, res) => {});

App.get("/json", (req, res) => {
  res.json([
    {
      Image: "./Assets/Images/Dress1.jpeg",
      Name: "Yellow Hyped ",
      Price1: "98",
      Price2: ".89",
      Price3: "2",
      Price4: "2.12",
      condition: "XS",
    },
    {
      Image: "./Assets/Images/Dress2.jpeg",
      Name: "Dark Blue ",
      Price1: "67",
      Price2: ".43",
      Price3: "2",
      Price4: "2.12",
      condition: "S",
    },
    {
      Image: "./Assets/Images/Dress3.jpeg",
      Name: "Carnish Blue",
      Price1: "39",
      Price2: ".73",
      Price3: "2",
      Price4: "2.12",
      condition: "M",
    },
    {
      Image: "./Assets/Images/Dress4.jpeg",
      Name: "Black Half",
      Price1: "22",
      Price2: ".13",
      Price3: "2",
      Price4: "2.12",
      condition: "ML",
    },
    {
      Image: "./Assets/Images/Dress5.jpeg",
      Name: "Moziak Voilet",
      Price1: "49",
      Price2: ".12",
      Price3: "2",
      Price4: "2.12",
      condition: "L",
    },
    {
      Image: "./Assets/Images/Dress6.jpeg",
      Name: "Red Gray",
      Price1: "100",
      Price2: ".13",
      Price3: "2",
      Price4: "2.12",
      condition: "XL",
    },
    {
      Image: "./Assets/Images/Dress7.jpeg",
      Name: "Plain White",
      Price1: "90",
      Price2: ".44",
      Price3: "2",
      Price4: "2.12",
      condition: "XXL",
    },
    {
      Image: "./Assets/Images/Dress8.jpeg",
      Name: "Yellow Baggy",
      Price1: "81",
      Price2: ".67",
      Price3: "2",
      Price4: "2.12",
      condition: "XS",
    },
    {
      Image: "./Assets/Images/Dress9.jpeg",
      Name: "Cream Jacked",
      Price1: "55",
      Price2: ".12",
      Price3: "2",
      Price4: "2.12",
      condition: "S",
    },
    {
      Image: "./Assets/Images/Dress10.jpeg",
      Name: "Black Jack",
      Price1: "68",
      Price2: ".66",
      Price3: "2",
      Price4: "2.12",
      condition: "M",
    },
    {
      Image: "./Assets/Images/Dress11.jpeg",
      Name: "Creative Brown",
      Price1: "87",
      Price2: ".32",
      Price3: "2",
      Price4: "2.12",
      condition: "ML",
    },
    {
      Image: "./Assets/Images/Dress12.jpeg",
      Name: "90's Green",
      Price1: "39",
      Price2: ".66",
      Price3: "2",
      Price4: "2.12",
      condition: "L",
    },
    {
      Image: "./Assets/Images/Dress13.jpeg",
      Name: "Black Spade",
      Price1: "34",
      Price2: ".87",
      Price3: "2",
      Price4: "2.12",
      condition: "XL",
    },
    {
      Image: "./Assets/Images/Dress14.jpeg",
      Name: "Mobbed Brown",
      Price1: "56",
      Price2: ".32",
      Price3: "2",
      Price4: "2.12",
      condition: "XXL",
    },
    {
      Image: "./Assets/Images/Dress15.jpeg",
      Name: "Prince Black",
      Price1: "78",
      Price2: ".12",
      Price3: "2",
      Price4: "2.12",
      condition: "XS",
    },
    {
      Image: "./Assets/Images/Dress16.jpeg",
      Name: "Jacky Red",
      Price1: "45",
      Price2: ".54",
      Price3: "2",
      Price4: "2.12",
      condition: "S",
    },
    {
      Image: "./Assets/Images/Dress17.jpeg",
      Name: "Red Ninja",
      Price1: "77",
      Price2: ".88",
      Price3: "2",
      Price4: "2.12",
      condition: "M",
    },
    {
      Image: "./Assets/Images/Dress18.jpeg",
      Name: "Poland Gray",
      Price1: "29",
      Price2: ".99",
      Price3: "2",
      Price4: "2.12",
      condition: "ML",
    },
    {
      Image: "./Assets/Images/Dress19.jpeg",
      Name: "Plain Lightblue",
      Price1: "54",
      Price2: ".12",
      Price3: "2",
      Price4: "2.12",
      condition: "L",
    },
    {
      Image: "./Assets/Images/Dress20.jpeg",
      Name: "Black Striped",
      Price1: "66",
      Price2: ".34",
      Price3: "2",
      Price4: "2.12",
      condition: "XL",
    },
  ]);
});

// Listening to the Port
App.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
