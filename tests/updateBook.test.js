import request from "supertest";
import app from "../server.js";
import express from "express";

describe("PUT /books/:id", () => {
  it("should update a book by id", async () => {
    const res = await request(app).put("/books/999").send({
      title: "Updated Test Book",
      author: "Updated Test Author",
      isbn: "0987654321",
      published_date: "2021-01-01",
    });
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("_id");
  });

  it("should return 404 if book not found", async () => {
    const res = await request(app).put("/books/999").send({
      title: "Updated Test Book",
      author: "Updated Test Author",
      isbn: "0987654321",
      published_date: "2021-01-01",
    });
    expect(res.statusCode).toEqual(404);
  });
});
