const request = require("supertest");
const express = require("express");
const monitorRoutes = require("../src/routes/monitorRoutes");

const app = express();
app.use("/api/monitors", monitorRoutes);

describe("Monitor API", () => {
  it("should get all monitors", async () => {
    const res = await request(app).get("/api/monitors/get-all-currency");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should get monitor by UID", async () => {
    const res = await request(app).get("/api/monitors/get-uid-currency/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("uid");
  });

  it("should get monitor by ID", async () => {
    const res = await request(app).get("/api/monitors/get-id-currency/enparalelovzla");
    expect(res.statusCode).toEqual(200);
    expect(res.body);
  });

  it("should get history by ID", async () => {
    const res = await request(app).get("/api/monitors/get-history-id/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});