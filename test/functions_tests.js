const expect = require("chai").expect;
const request = require("supertest");
const app = require("../main");

describe("TEST in /crud path", () => {

  it("crud/read-all", () => {
    return request(app)
      .get("/crud/read-all")
      .then((rep) => {
        expect(rep.status).to.equal(201);
      });
  });

  it("crud/create", () => {
    return request(app)
      .post("/crud/create")
      .send({
        nom: "c13",
        batterie: 100,
        avis: "defaillant",
        flux: [],
      })
      .then((rep) => {
        expect(rep.status).to.equal(201);
      });
  });
  
});
