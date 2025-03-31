import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const parsedBody = insertContactSchema.safeParse(req.body);
      
      if (!parsedBody.success) {
        return res.status(400).json({
          message: "Invalid form data",
          errors: parsedBody.error.errors,
        });
      }
      
      const contact = await storage.createContact(parsedBody.data);
      
      return res.status(201).json({
        message: "Message sent successfully",
        contact,
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      return res.status(500).json({
        message: "Failed to send message",
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      return res.status(200).json(contacts);
    } catch (error) {
      console.error("Error getting contacts:", error);
      return res.status(500).json({
        message: "Failed to get contacts",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
