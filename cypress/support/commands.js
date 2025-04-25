Cypress.Commands.add('gerarEmailYopmail', () => {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const tamanhoEmail = 10;
    let email = '';
    
    for (let i = 0; i < tamanhoEmail; i++) {
        email += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    return email+'@yopmail.com';
});


Cypress.Commands.add('gerarProduto', () => {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const tamanhoProduto = 10;
    let produto = '';
    
    for (let i = 0; i < tamanhoProduto; i++) {
        produto += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    return 'Produto Serie:' + produto;
});


Cypress.Commands.add('gerarProduto', () => {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const tamanhoProduto = 10;
    let produto = '';
    
    for (let i = 0; i < tamanhoProduto; i++) {
        produto += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    return 'Produto Serie:' + produto;
});

Cypress.Commands.add('getToken', (email, senha) => {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: email,
        password: senha
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 201]);
      const token = response.body.authorization
      expect(token).to.be.a('string').and.not.be.empty;
      return token;
    });
  });