import { fetchCoinMetadata } from "./coinMetadataFetcher.js";

const http = require("http");
const port = 3000;

const server = http.createServer(async (request, response) => {
    try {
        response.writeHead(200, {
            "Content-Type": "application/json"
        });

        let coin_list = await fetchCoinMetadata();
        let updated_at = new Date().toISOString();
        response.end(JSON.stringify({ coin_list, updated_at }));
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
        response.statusCode = 500;
        response.end(JSON.stringify({ error: error.message }));
    }
});

server.listen(port, () => {
    console.log(`The server has started and is listening on port number: ${port}`);
});
