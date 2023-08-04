import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient()


// create tweet

router.post("/", async (req, res) => {

    const { content, image, userId } = req.body;

    const result = await prisma.tweet.create({
        data: {
            content, image, userId
        }
    })

    res.json(result)


})


// list of tweets

router.get("/", async (req, res) => {

    const allTweets = await prisma.tweet.findMany({
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    userName: true,
                    image: true,
                }

            }
        }
    })

    if (!allTweets) {
        return res.status(404).json({ error: "Tweets not found" })
    }

    res.json(allTweets)
})

// get tweet

router.get("/:id", async (req, res) => {

    const { id } = req.params
    const tweet = await prisma.tweet.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    userName: true,
                    image: true,
                }
            }
        }
    })
    if (!tweet) {
        return res.status(404).json({ error: "Tweet not found" })
    }

    res.json(tweet)
})

// update tweet

router.put("/:id", (req, res) => {
    const { id } = req.params;

    // const {}

    res.status(501).json({
        error: "not found"
    })
})


// delete tweet

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.tweet.delete({ where: { id: Number(id) } })
        res.sendStatus(200)
    }
    catch (e) {
        res.status(400).json({
            error: "Failed to delete the tweet"
        })
    }


})



export default router;