import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOGS_FILE = path.join(__dirname, "data", "logs.json");
const GUESTS_FILE = path.join(__dirname, "data", "guests.json");

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, "data"))) {
  fs.mkdirSync(path.join(__dirname, "data"));
}

// Initialize files if they don't exist
if (!fs.existsSync(LOGS_FILE)) {
  fs.writeFileSync(LOGS_FILE, JSON.stringify([]));
}
if (!fs.existsSync(GUESTS_FILE)) {
  fs.writeFileSync(GUESTS_FILE, JSON.stringify([]));
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/guests", (req, res) => {
    try {
      const guest = {
        username: req.body.username,
        timestamp: new Date().toISOString(),
        userAgent: req.headers["user-agent"],
        ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
      };

      const guests = JSON.parse(fs.readFileSync(GUESTS_FILE, "utf-8"));
      guests.push(guest);
      fs.writeFileSync(GUESTS_FILE, JSON.stringify(guests, null, 2));
      
      res.json({ success: true });
    } catch (error) {
      console.error("Error saving guest log:", error);
      res.status(500).json({ error: "Failed to save guest log" });
    }
  });

  app.get("/api/guests", (req, res) => {
    try {
      const guests = JSON.parse(fs.readFileSync(GUESTS_FILE, "utf-8"));
      res.json(guests);
    } catch (error) {
      console.error("Error fetching guests:", error);
      res.status(500).json({ error: "Failed to fetch guests" });
    }
  });

  app.post("/api/logs", (req, res) => {
    try {
      const newLog = {
        ...req.body,
        timestamp: new Date().toISOString(),
        ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
      };

      const logs = JSON.parse(fs.readFileSync(LOGS_FILE, "utf-8"));
      logs.push(newLog);
      fs.writeFileSync(LOGS_FILE, JSON.stringify(logs, null, 2));
      
      res.json({ success: true });
    } catch (error) {
      console.error("Error saving log:", error);
      res.status(500).json({ error: "Failed to save log" });
    }
  });

  app.get("/api/logs", (req, res) => {
    try {
      const logs = JSON.parse(fs.readFileSync(LOGS_FILE, "utf-8"));
      res.json(logs);
    } catch (error) {
      console.error("Error fetching logs:", error);
      res.status(500).json({ error: "Failed to fetch logs" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
