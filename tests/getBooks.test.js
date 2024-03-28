import request from "supertest";
import app from "../server.js";

describe("GET /books", () => {
  it("should get all books", async () => {
    const res = await request(app).get("/books");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
