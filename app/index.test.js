const test = require("node:test");
const assert = require("node:assert/strict");
const { createServer } = require("./index");

test("a /health végpont 200-as válasszal és ok státusszal tér vissza", async () => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();

  try {
    const res = await fetch(`http://127.0.0.1:${port}/health`);
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.deepEqual(body, { status: "ok" });
  } finally {
    server.close();
  }
});