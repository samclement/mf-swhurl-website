describe('main navigation', () => {
  it('should navigate to the About page', () => {
    navigate('About')
  })
  it('should navigate to the Contact page', () => {
    navigate('Contact')
  })
})

function navigate (header) {
  browser.url('/')
  browser.element(`a*=${header}`).click()
  browser.getText('h1').should.be.equal(header)
}
