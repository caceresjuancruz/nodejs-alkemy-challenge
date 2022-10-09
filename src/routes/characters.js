const character = require('../models/character');


const router = require('express').Router();


router
    // GET All Characters
    .get('/', async(req, res) => {
        const characters = await character.findAll();
        res.status(200).send(characters);
    })

    // GET Character by ID
    .get('/:id', async(req, res) => {
        const {id} = req.params;
        const data = await character.findByPk(id);
        data === null ? res.status(404).send("Error - Character not found.") : res.status(200).send(data);
    })

    // POST Create character
    .post('/', async(req, res) => {
        const {image, name, age, weight, history} = req.body;

        if(!image || !name | !age, !weight){
            return res.status(400).json({
                error: "All fields are required"
            });
        };

     character.create({image, name, age, weight, history})
            .then(data => {
                res.status(201).send(`Character ${data.name} succesfully created`);
            })
            .catch(error => {
                error.parent.code === "ER_DUP_ENTRY" ? res.status(400).send("A character with that name already exists") : res.status(400).send("Error creating character");
            })
        
    })

    // DELETE Character
    .delete('/:id', async(req, res) => {
        const {id} = req.params;
        const response = await character.destroy({where: {id: id}});
        response === 0 ? res.status(404).send("Character does not exist") : res.status(200).send("Character successfully deleted");
    })

module.exports = router;
