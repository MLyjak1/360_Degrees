const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../models");

//Find all users. TODO: May not need this.
router.get("/", async (req, res) => {
    try {

        const user = await User.findAll();

        res.status(200).json(user);

    } catch (err) {

        res.status(500).json(err)

    }
});

//Find a specific user by ID. Also may not need this.
router.get("/:id", async (req, res) => {
    try {
        
        const user = await User.findByPk(req.params.id);

        res.status(200).json(user);

    } catch (err) {

        res.status(500).json(err)

    }
})

// /api/user/signup 
//This route is used for signing up and creating a new user.
router.post("/signup", async (req, res) => {

    try {

        //Create a new user with the specified username, password, and email.
        const user = await User.create({

            username: req.body.username,
            password: req.body.password,
            email: req.body.email

        });

        res.status(200).json(user);

    } catch (err) {

        res.status(500).json(err);
    
    }

});

// /api/user/login
//This route is used for logging into an account.
router.post("/login", async (req, res) => {

    try {
        
        //Find a user with the specified username
        const user = await User.findOne({ where: { username: req.body.username }} );

        //If the user is not found then spit an error message. Intentionally does not specify it's the username that is wrong for security purposes.
        if (!user) {

            res.status(404).json({ message: "Invalid username and/or password." });
            return;

        }
        
        //Compare the password provided with the user's actual password.
        const checkPassword = await bcrypt.compare(

            req.body.password,
            user.password

        )

        //If the password does not match then spit an error. Like before, the vagueness is intentional.
        if (!checkPassword) {

            res.status(400).json({message: "Invalid username and/or password." });
            return;
            
        }

        res.status(200).json({ messsage: "Login successful."});

    } catch (err) {

        res.status(500).json(err);
    
    }

});

module.exports = router;