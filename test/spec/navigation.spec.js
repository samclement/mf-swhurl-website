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
  const elem = $(`a*=${header}`)
  elem.click()
  const h1 = $('h1')
  h1.getText().should.be.equal(header)
}
