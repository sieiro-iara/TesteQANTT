describe("Teste api usuarios", () => {
    const EMAIL_ESPECIFICO = "teste@qa.com.br";
    const API_URL = "https://serverest.dev/usuarios/";

    it("Obtem Usuarios - GET", () => {
      cy.request(API_URL).as("usersRequest");
      cy.get("@usersRequest").then((users) => {
        expect(users.status).to.eq(200);
        assert.isArray(users.body.usuarios, "Response retorna uma lista de usuarios");
      });
    });

    it("Obtem Usuario por email - GET", () => {
        cy.request({
          url: API_URL,
          qs: {
            email: EMAIL_ESPECIFICO
          }
        }).as("userByEmailRequest");
        
        cy.get("@userByEmailRequest").then((response) => {
          expect(response.status).to.eq(200);
          assert.isArray(response.body.usuarios, "Response retorna uma lista de usuarios");
          expect(response.body.usuarios[0].email).to.eq(EMAIL_ESPECIFICO);
        });
      });
  });