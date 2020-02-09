describe('homepage', () => {
  it('title', () => {
    browser.url('/')
    browser.getTitle().should.be.equal('mf.swhurl.com')
  })
})
