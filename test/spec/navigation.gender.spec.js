describe('Navigation - Gender Nav', () => {
  it('womens title', () => {
    browser.url('/womens')
    browser.getTitle().should.be.equal('mf.swhurl.com | womens')
  })
  it('mens title', () => {
    browser.url('/mens')
    browser.getTitle().should.be.equal('mf.swhurl.com | mens')
  })
  it('/ - women and men are not bold', () => {
    browser.url('/')
    const womens = $$('a.Header__StyledLink-biqmqs-3')[2]
    const mens = $('a.Header__StyledLink-biqmqs-3')
    womens.getText().should.be.equal('WOMEN')
    womens.getCSSProperty('font-weight').value.should.be.equal(400)
    mens.getText().should.be.equal('MEN')
    mens.getCSSProperty('font-weight').value.should.be.equal(400)
  })
  it('/womens - women is bold, men is not', () => {
    browser.url('/womens')
    const womens = $$('a.Header__StyledLink-biqmqs-3')[2]
    const mens = $('a.Header__StyledLink-biqmqs-3')
    womens.getCSSProperty('font-weight').value.should.be.equal(700)
    mens.getCSSProperty('font-weight').value.should.be.equal(400)
  })
  it('/mens - men is bold, women is not', () => {
    browser.url('/mens')
    const womens = $$('a.Header__StyledLink-biqmqs-3')[2]
    const mens = $('a.Header__StyledLink-biqmqs-3')
    womens.getCSSProperty('font-weight').value.should.be.equal(400)
    mens.getCSSProperty('font-weight').value.should.be.equal(700)
  })
})
