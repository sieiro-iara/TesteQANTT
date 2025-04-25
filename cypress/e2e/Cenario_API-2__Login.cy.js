describe("Teste rota login", () => {
  const API_URL = "https://serverest.dev/login/";
  const EMAIL = "testentt001@yopmail.com";
  const PASSWORD = "Teste@01";

  it("Login Valido - POST", () => {
    cy.request({
      method: "POST",
      url: API_URL,
      body: {
        email: EMAIL,
        password: PASSWORD,
      },
    }).as("loginUserRequest");

    cy.get("@loginUserRequest").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Login realizado com sucesso");
    });
  });

  it("Login Invalido - POST", () => {
    cy.request({
      method: "POST",
      url: API_URL,
      body: {
        email: EMAIL,
        password: "a",
      },
      failOnStatusCode: false 
    }).as("loginUserRequest");

    cy.get("@loginUserRequest").then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq("Email e/ou senha inválidos");
    });
  });
});
