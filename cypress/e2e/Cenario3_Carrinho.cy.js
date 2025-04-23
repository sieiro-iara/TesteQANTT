    describe('template spec', () => {
    //Comprar um item
  it('passes', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').click().type("testentt001@yopmail.com")
    cy.get('[data-testid="senha"]').click().type("Teste@01")
    cy.get('[data-testid="entrar"]').click()
    cy.url().should('eq', 'https://front.serverest.dev/home')
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('[data-testid="adicionar carrinho"]').click()
    cy.url().should('eq', 'https://front.serverest.dev/carrinho') 
  })
  
  //Comprar multiplos itens
  it('passes', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').click().type("testentt001@yopmail.com")
    cy.get('[data-testid="senha"]').click().type("Teste@01")
    cy.get('[data-testid="entrar"]').click()
    cy.url().should('eq', 'https://front.serverest.dev/home')
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('[data-testid="product-increase-quantity"]').click()
    cy.contains('Preço R$200').should('be.visible')
    cy.contains('Total: 2').should('be.visible')
    cy.get('[data-testid="product-increase-quantity"]').click()
    cy.contains('Preço R$300').should('be.visible')
    cy.contains('Total: 3').should('be.visible')
    cy.get('[data-testid="adicionar carrinho"]').click()
    cy.url().should('eq', 'https://front.serverest.dev/carrinho') 
  })

  //Limpar lista de compras
  it('passes', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').click().type("testentt001@yopmail.com")
    cy.get('[data-testid="senha"]').click().type("Teste@01")
    cy.get('[data-testid="entrar"]').click()
    cy.url().should('eq', 'https://front.serverest.dev/home')
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('[data-testid="product-increase-quantity"]').click()
    cy.contains('Preço R$200').should('be.visible')
    cy.contains('Total: 2').should('be.visible')
    cy.get('[data-testid="product-increase-quantity"]').click()
    cy.contains('Preço R$300').should('be.visible')
    cy.contains('Total: 3').should('be.visible')
    cy.get('[data-testid="limparLista"]').click()
    cy.contains('Seu carrinho está vazio').should('be.visible')
  })
})