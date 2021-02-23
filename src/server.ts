import express from 'express';

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello World - NLW04 - GET" });
})

app.post("/", (request, response) => {
  return response.json({ message: "Hello World - NLW04 - POST" });
})

app.listen(3333, () => console.log('Server is running!'));