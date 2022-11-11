describe('test for exercise 2', () => {
  it('open site, click on menu links, ', () => {
    cy.visit('https://www.marketbeat.com/')

    cy.get('#mega-menu > ul > li:nth-child(2) > a').should('contain', 'Financial Calendars').click({force: true})
    cy.get('#mega-menu > ul > li.account.has-submenu.simplify-on-side > a').should('contain', 'My MarketBeat').click({force: true})

    cy.get('#headerSearch').type('AAPL')
    cy.get('div.ticker-area').first().click({force: true})
  })
})