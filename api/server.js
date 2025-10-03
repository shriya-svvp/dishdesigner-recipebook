const path = require("path");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "../db.json"));
const middlewares = jsonServer.defaults();

// Middlewares
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Prefix all routes with /api
server.use("/api", router);

// Export for Vercel
module.exports = server;

// ✅ Start server locally if not in Vercel
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`✅ JSON Server is running on http://localhost:${PORT}`);
  });
}
