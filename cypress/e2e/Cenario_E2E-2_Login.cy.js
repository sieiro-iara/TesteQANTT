describe('Cenario de Teste Login', () => {
//Login de usuario comum
it('passes', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').click().type("testentt001@yopmail.com")
    cy.get('[data-testid="senha"]').click().type("Teste@01")
    cy.get('[data-testid="entrar"]').click()
    cy.wait(5000)
    cy.url().should('eq', 'https://front.serverest.dev/home')
  })

    //Login de usuario admin
    it('passes', () => {
      cy.visit('https://front.serverest.dev/login')
      cy.get('[data-testid="email"]').click().type("testentt002@yopmail.com")
      cy.get('[data-testid="senha"]').click().type("Teste@01")
      cy.get('[data-testid="entrar"]').click()
      cy.wait(5000)
      cy.url().should('eq', 'https://front.serverest.dev/admin/home')
    })

    //Erro ao logar campos em branco
    it('passes', () => {
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="entrar"]').click()
        cy.wait(5000)
        cy.contains('Email é obrigatório').should('be.visible')
        cy.contains('Password é obrigatório').should('be.visible')
      })

    
    //Erro ao logar usuario invalido
    it('passes', () => {
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="email"]').click().type("testentt004@yopmail.com")
        cy.get('[data-testid="senha"]').click().type("Teste@02")
        cy.get('[data-testid="entrar"]').click()
        cy.wait(5000)
        cy.contains('Email e/ou senha inválidos').should('be.visible')
      })
})