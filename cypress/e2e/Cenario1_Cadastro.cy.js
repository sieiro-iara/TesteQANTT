describe('template spec', () => {
  //Cadastro usuario comum
  it('passes', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').click().type("UserTeste")
    cy.get('[data-testid="email"]').click().type("testentt001@yopmail.com")
    cy.get('[data-testid="password"]').click().type("Teste@01")
    cy.get('[data-testid="cadastrar"]').click()
    cy.wait(5000)
    cy.url().should('eq', 'https://front.serverest.dev/home')
  })

  //Cadastro usuario admin
  it('passes', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').click().type("UserTesteAdmin")
    cy.get('[data-testid="email"]').click().type("testentt002@yopmail.com")
    cy.get('[data-testid="password"]').click().type("Teste@01")
    cy.get('[data-testid="checkbox"]').click()
    cy.get('[data-testid="cadastrar"]').click()
    cy.wait(5000)
    cy.url().should('eq', 'https://front.serverest.dev/admin/home')
  })

  //Cadastro sem preenchimento de campos obrigatorios
  it('passes', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="cadastrar"]').click()
    cy.contains('Nome é obrigatório').should('be.visible')
    cy.contains('Email é obrigatório').should('be.visible')
    cy.contains('Password é obrigatório').should('be.visible')
  })
})