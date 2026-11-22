const http = require("http");

const port = process.env.PORT || 3000;

function createServer() {
  return http.createServer((req, res) => {
    if (req.url === "/health") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "ok" }));
      return;
    }
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Működik a DevOps mintaalkalmazás!\n");
  });
}

if (require.main === module) {
  createServer().listen(port, () => {
    console.log(`Szerver fut a http://localhost:${port} címen`);
  });
}

module.exports = { createServer };