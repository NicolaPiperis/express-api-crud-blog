/*
Per il nostro blog, concentriamoci sul creare 2 rotte
:/ [POST] - rotta store del crud che riceverà dei dati e creerà un nuovo post. Questa dovrà riceve i dati in formato application/x-www-urlencoded e dovrà ritornare un redirect nel caso di richiesta html, altrimenti di default il json dell’elemento appena creato
/:slug [DELETE] - rotta destroy del crud che dovrà ritornare un 404 nel caso non sia stato trovato un post corrispondente. Ritornare un redirect nel caso di richiesta html, altrimenti di default del testo con scritto “post eliminato”
Tutte le funzioni delle rotte dovranno essere scritte nel controller dedicato.
Testare le rotte tramite Postman.
Bonus
Tramite una funzione, salvare l’array dei post nel file .json
nella funzione store permettere di passare i dati nel formato multipart/form-data tramite multer
permettere di eseguire l’upload dell’immagine principale del post.
*/


// importiamo express e creiamo la sua istanza
const express = require('express');
const app = express();

// importiamo dotenv e lo installiamo
const dotenv = require("dotenv");
dotenv.config();

// importiamo il log 
const { log } = require("console");

// definiamo con una variabile la porta
const port = process.env.PORT || 3001;

// configuro i file statici
app.use(express.static("public"));

// importiamo il controller
const postsController = require('./controllers/post');

// importiamo il router
const postsRouter = require('./routers/Posts');



// Rotta principale
app.get('/', (req, res) => {
  res.send('<h1 style="text-align:center">Benvenuto nel mio blog!</h1>');
});

app.get("/post", postsController.index)

// Rotte relative all'entità post
app.use("/", postsRouter);

// Avvia il server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
