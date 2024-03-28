import request from "supertest";
import app from "../server.js";
import express from "express";

describe("GET /books/:id", () => {
  it("should get a book by id", async () => {
    const res = await request(app).get("/books/999");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("_id");
  });

  it("should return 404 if book not found", async () => {
    const res = await request(app).get("/books/999");
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("message", "Book not found");
  });
});
