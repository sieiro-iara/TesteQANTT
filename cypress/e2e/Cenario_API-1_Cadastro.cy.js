describe("Teste api usuarios", () => {

  const API_URL = "https://serverest.dev/usuarios/";
  const NOME = "Fulano da Silva";
  const PASSWORD = "teste";
  const ADMIN = "true";
  const EMAIL = "fulano@qa.com";

  it("Cadastro Usuarios - POST", () => {
    cy.gerarEmailYopmail().then((emailGerado) => {
      cy.request({
        method: "POST",
        url: API_URL,
        body: {
          nome: NOME,
          email: emailGerado,
          password: PASSWORD,
          administrador: ADMIN,
        },
      }).as("createUserRequest");

      cy.get("@createUserRequest").then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.message).to.eq("Cadastro realizado com sucesso");
        cy.log(`E-mail usado: ${emailGerado}`);
      });
    });
  });

  it("Obtem Usuarios - GET", () => {
    cy.request(API_URL).as("usersRequest");
    cy.get("@usersRequest").then((users) => {
      expect(users.status).to.eq(200);
      assert.isArray(
        users.body.usuarios,
        "Response retorna uma lista de usuarios"
      );
    });
  });

  it("Obtem Usuario por email - GET", () => {
    cy.request({
      url: API_URL,
      qs: {
        email: EMAIL,
      },
    }).as("userByEmailRequest");

    cy.get("@userByEmailRequest").then((response) => {
      expect(response.status).to.eq(200);
      assert.isArray(
        response.body.usuarios,
        "Response retorna uma lista de usuarios"
      );
      expect(response.body.usuarios[0].email).to.eq(EMAIL);
    });
  });
});
