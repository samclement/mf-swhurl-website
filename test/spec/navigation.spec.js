describe('main navigation', () => {
  it('should navigate to the About page', () => {
    navigate('About')
  })
  it('should navigate to the Contact page', () => {
    navigate('Contact')
  })
  it('should navigate to the Login page', () => {
    navigate('Login')
  })
})

function navigate(header) {
  browser.url('/')
  browser.element(`a*=${header}`).click()
  browser.getText('h1').should.be.equal(header)
}
