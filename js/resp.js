const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restroFun', { useNewUrlParser: true });

const restroSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    text: String,
});

const Restro = mongoose.model('Restro', kittySchema);

burger = document.querySelector('.burger-nav');

navbar = document.querySelector('.navbar');

navList = document.querySelector('.nav-list');

logoResp = document.querySelector('.logo-resp');

burger.addEventListener('click', () => {
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    if (logoResp.style.display === "block") {
        logoResp.style.display = "none";
    } else {
        logoResp.style.display = "block";
    }
})

app.get('/contact', (req, res) => {
    const params = {};
    res.status(200).render('contact.html', params);
});

app.post('/contact', (req, res) => {
    let myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("This item has been saved successfully to the database");
    }).catch(() => {
        res.status(400).send("Item has not been saved to the database");
    })
});

app.listen(port, () => {
    console.log("The app is started successfully");
})