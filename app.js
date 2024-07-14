// app.js
const express = require('express');
const bodyParser = require('body-parser');
const TinyURL = require('tinyurl');

const app = express();
const port = 3000;

// Set up view engine
app.set('view engine', 'ejs');

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Route to serve the index.ejs file
app.get('/', (req, res) => {
    res.render('index', { shortenedUrl: null });
});

app.get("/shorten",(req,res)=>{
    res.redirect("/")
})
// Route to handle URL shortening
app.post('/shorten', (req, res) => {
    const longUrl = req.body.longUrl;

    TinyURL.shorten(longUrl, function(result, err) {
        if (err) {
            console.error('Error shortening URL:', err);
            res.render('index', { shortenedUrl: 'Error shortening URL' });
        } else {
            res.render('index', { shortenedUrl: result });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
