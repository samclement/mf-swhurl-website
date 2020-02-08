describe('homepage', () => {
  it('title', () => {
    browser.url('/')
    browser.getTitle().should.be.equal('mf.swhurl.com')
  })
  it('header', () => {
    browser.url('/')
    const h2 = $('h2')
    h2.getText().should.be.equal('mf.swhurl.com')
  })
})
