const movie = require('../models/movie');


const router = require('express').Router();


router
    // GET All Movies
    .get('/', async(req, res) => {
        const movies = await movie.findAll();
        res.status(200).send(movies);
    })

    // GET Movie by ID
    .get('/:id', async(req, res) => {
        const {id} = req.params;
        const data = await movie.findByPk(id);
        data === null ? res.status(404).send("Error - Movie not found.") : res.status(200).send(data);
    })

    // POST Create Movie
    .post('/', async(req, res) => {
        const {image, title, creationDate, calification, gender, type} = req.body;

        if(!image || !title | !calification || !gender || !type){
            return res.status(400).json({
                error: "All fields are required"
            });
        };

     character.create({image, title, creationDate, calification, gender, type})
            .then(data => {
                res.status(201).send(`Movie ${data.title} succesfully created`);
            })
            .catch(error => {
                error.parent.code === "ER_DUP_ENTRY" ? res.status(400).send("A movie with that title already exists") : res.status(400).send("Error creating movie");
            })
        
    })

    // DELETE Movie
    .delete('/:id', async(req, res) => {
        const {id} = req.params;
        const response = await movie.destroy({where: {id: id}});
        response === 0 ? res.status(404).send("Movie does not exist") : res.status(200).send("Movie successfully deleted");
    })

module.exports = router;
