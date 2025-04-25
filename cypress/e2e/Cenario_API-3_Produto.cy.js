describe("Teste rota login", () => {
  const API_URL = "https://serverest.dev/produtos/";
  const NOME = "Logitech MX Vertical";
  const PRECO = 470;
  const DESCRICAO = "Mouse";
  const QUANTIDADE = 38;

  it("Cadastro Produtos - POST", () => {
    cy.getToken("testentt002@yopmail.com","Teste@01").then((token) => {
      cy.gerarProduto().then((produto) => {
        cy.request({
          method: "POST",
          url: API_URL,
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: {
            nome: produto,
            preco: PRECO,
            descricao: DESCRICAO,
            quantidade: QUANTIDADE,
          },
        }).as("createProdutoRequest");

        cy.get("@createProdutoRequest").then((response) => {
          expect(response.status).to.eq(201);
          cy.log(`produto usado: ${produto}`);
          expect(response.body.message).to.eq("Cadastro realizado com sucesso");
        });
      });
    });
  });

  it("Obtem Produtos - GET", () => {
    cy.request(API_URL).as("produtosRequest");
    cy.get("@produtosRequest").then((produtos) => {
      expect(produtos.status).to.eq(200);
      assert.isArray(
        produtos.body.produtos,
        "Response retorna uma lista de produtos"
      );
    });
  });





});
