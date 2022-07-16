const app = require("./src/server.ts");

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Listening at 3001");
});

