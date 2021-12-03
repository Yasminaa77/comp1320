const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();
const fs = require('fs').promises;

//install the language support exention of VS
// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createcard");
});

// app.get("/homepage", (req, res) => {
//   res.render("homepage")

// });

app.post("/create", (req, res) => {
  const user = req.body;
  user.id = Math.floor(Math.random() * 600) + 1; // 45
  fs.readFile("database.json", "utf-8")
    .then((content) => JSON.parse(content))
    .then((jsonObj) => {
      let newJsonObj = jsonObj;
      newJsonObj.users.push(user);
      fs.writeFile("database.json", JSON.stringify(newJsonObj))
        .then(() => res.redirect(`/homepage/${user.id}`)) // localhost:8007/people/45
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});


app.get("/homepage/:id", (req, res) => {
  const id = Number(req.params.id);
  fs.readFile("database.json","utf8")
  .then(content=>JSON.parse(content).users)
  .then(users=> users.find((user)=> user.id === id))
  .then(foundUser => {
    return res.render("homepage", {user: foundUser})
  })   
  .catch((err) => console.log(err));
});


app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});
