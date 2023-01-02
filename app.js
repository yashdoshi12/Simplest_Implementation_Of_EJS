//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.set('view engine', 'ejs');
const port = 3000

app.get('/', (req, res) => {
    var today = new Date();
    var currentday = today.getDay();
    var day = "";

    switch (currentday) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wenesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        default:
            break;
    }
    res.render('lists', {kindofday: day})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});