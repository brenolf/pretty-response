var pretty = require('../')

describe('PrettyResponse', function () {
  var response, next

  beforeEach(function () {
    response = {
      status: sinon.stub()
    }

    next = sinon.stub()

    pretty(null, response, next)
  })

  it('exposes HTTP code functions and call next middleware', function () {
    expect(response.ok).to.be.a('function')
    expect(response.notFound).to.be.a('function')
    expect(response.created).to.be.a('function')
    expect(response.noContent).to.be.a('function')
    expect(response.internalServerError).to.be.a('function')

    expect(next).to.have.been.calledOnce
  })

  it('creates callable functions', function () {
    response.ok()
    response.notFound()
    response.internalServerError()

    expect(response.status).to.have.been.calledWith(200)
    expect(response.status).to.have.been.calledWith(404)
    expect(response.status).to.have.been.calledWith(500)
  })
})
