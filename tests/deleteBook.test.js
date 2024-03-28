import request from "supertest";
import app from "../server.js";

describe("DELETE /books/:id", () => {
  it("should delete a book by id", async () => {
    const res = await request(app).delete("/books/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Book deleted successfully");
  });

  it("should return 404 if book not found", async () => {
    const res = await request(app).delete("/books/1");
    expect(res.statusCode).toEqual(404);
  });
});