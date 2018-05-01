describe('homepage', () => {
  it('title', () => {
    browser.url('/')
    browser.getTitle().should.be.equal('swhurl.com')
  })
  it('header', () => {
    browser.url('/')
    browser.getText('h1').should.be.equal('swhurl.com')
  })
})
