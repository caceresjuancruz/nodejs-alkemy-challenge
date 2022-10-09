const user = require('../models/user');


const router = require('express').Router();


router
    // GET All Users
    .get('/', async(req, res) => {
        const users = await user.findAll();
        res.status(200).send(users);
    })

    // GET User by ID
    .get('/:id', async(req, res) => {
        const {id} = req.params;
        const data = await user.findByPk(id);
        data === null ? res.status(404).send("Error - User not found.") : res.status(200).send(data);
    })

    // POST Create user
    .post('/', async(req, res) => {
        const {username, name, email, password} = req.body;

        if(!username || !name | !email || !password){
            return res.status(400).json({
                error: "All fields are required"
            });
        };

        user.create({username, name, email, password})
            .then(data => {
                res.status(201).send(`User ${data.username} succesfully created`);
            })
            .catch(error => {
                error.parent.code === "ER_DUP_ENTRY" ? res.status(400).send("User already exists") : res.status(400).send("Error creating user");
            })
        
    })

    // DELETE User
    .delete('/:id', async(req, res) => {
        const {id} = req.params;
        const response = await user.destroy({where: {id: id}});
        response === 0 ? res.status(404).send("User does not exist") : res.status(200).send("User successfully deleted");
    })

module.exports = router;
