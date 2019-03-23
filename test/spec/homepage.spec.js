describe('homepage', () => {
  it('title', () => {
    browser.url('/')
    browser.getTitle().should.be.equal('mf.swhurl.com')
  })
  it('header', () => {
    browser.url('/')
    const h1 = $('h1')
    h1.getText().should.be.equal('mf.swhurl.com')
  })
})
