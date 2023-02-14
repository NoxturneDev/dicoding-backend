const Response = require('./Response');

class FailedResponse extends Response {
  constructor(helper) {
    super(helper);

    this.status = 'fail';
    this.responseOpt = {
      ...this.responseOpt, status: this.status,
    };
  }

  createResponse(message, code) {
    const response = this.helper.response({
      ...this.responseOpt, message,
    });

    response.code(code);
    return response;
  }

  notFound(message) {
    return this.createResponse(message, 404);
  }

  invalidData(message) {
    return this.createResponse(message, 400);
  }
}

module.exports = FailedResponse;
