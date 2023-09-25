const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // excute in ejs
app.use(express.static('public'));

const uri = 'mongodb://localhost:27017/uitoux';

app.get('/', async (req, res) => {
  try {
    // mongodb connection
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db();
    const collection = db.collection('products');

    const prodata = await collection.find().toArray();
    const bannerimages = ['slide-1.jpeg']; //used statically
    const brandimages = ['brand-1.png','brand-2.png','brand-3.png','brand-4.png','brand-5.png','brand-6.png','brand-7.png','brand-8.png','brand-9.png','brand-10.png','brand-11.png','brand-12.png','brand-13.png','brand-14.png','brand-15.png','brand-16.png']; ////used statically
    const data = {
      prodata:prodata,
      bannerimages:bannerimages,
      brandimages:brandimages
    };
    console.log(data);
    res.render('index', { data });
    // res.render('index', { images });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
