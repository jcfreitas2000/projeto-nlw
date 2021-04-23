import express from "express";

const app = express();
const port = 3333;

// routes
app.get("/", (request, response) => {
    return response.json({
        message: "qqq"
    });
});

app.post("/", (req, res) => {
    return res.json({
        message: "Successfully created user"
    });
});

// listen
app.listen(
    port,
    () => console.log('Server is running on port 3333')
);
