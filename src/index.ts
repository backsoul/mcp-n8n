import { MCPServer } from "mcp-framework";

const server = new MCPServer({
  transport: {
    type: "http-stream",
    options: {
      port: 8080,
      endpoint: "/mcp",
      responseMode: "stream",
      batchTimeout: 30000,
      headers: { "X-Custom-Header": "value" },
      cors: {
        allowOrigin: "*",
        allowMethods: "GET, POST, DELETE, OPTIONS",
        allowHeaders:
          "Content-Type, Accept, Authorization, x-api-key, Mcp-Session-Id, Last-Event-ID",
        exposeHeaders: "Content-Type, Authorization, x-api-key, Mcp-Session-Id",
        maxAge: "86400",
      },
    },
  },
});

server.start().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
