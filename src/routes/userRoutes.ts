import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();

const prisma = new PrismaClient()


// create user

router.post("/", async (req, res) => {
    const { email, name, userName } = req.body;

    try {
        const result = await prisma.user.create({
            data: {
                email,
                name,
                userName,
                bio: "Hello i am new here"
            }
        })
        res.json(result)
    }
    catch (e) {
        res.status(400).json({


            error: "Username and Email should be unique"
        })
    }
})


// list of users

router.get("/", async (req, res) => {


    const allUsers = await prisma.user.findMany({
        // select: {
        //     id: true,
        //     name: true,
        //     image: true,
        //     bio: true,
        // }
    })

    res.json(allUsers)
})

// get user

router.get("/:id", async (req, res) => {
    const { id } = req.params
    const user = await prisma.user.findUnique({
        where: { id: Number(id) },
        select: {
            id: true,
            name: true,
            image: true,
            tweets: {
                select: {
                    id: true,
                    content: true,
                    image: true
                }
            }
        }

    })
    res.json(user)
})

// update user

router.put("/:id", async (req, res) => {
    const { id } = req.params;

    const { name, bio, image } = req.body;

    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                name,
                bio,
                image
            }
        })
        res.json(updatedUser)
    }
    catch (e) {
        res.status(400).json({
            error: "Failed to update the user"
        })
    }


})


// delete user

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await prisma.user.delete({
            where: {
                id: Number(id)
            }
        })
        res.sendStatus(200)
    }
    catch (e) {
        res.status(400).json({ error: "User not found" })
    }


})



export default router;