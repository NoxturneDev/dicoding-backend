const Response = require('./ResponseClass');

class FailedResponse extends Response {
  constructor(helper) {
    super(helper);

    this.status = 'fail';
    this.responseOpt = {
      ...this.responseOpt, status: this.status,
    };
  }

  notFound(message) {
    const response = this.helper.response({
      ...this.responseOpt, message,
    });

    response.code(404);
    return response;
  }

  invalidData(message) {
    const response = this.helper.response({
      ...this.responseOpt, message,
    });

    response.code(400);
    return response;
  }
}

module.exports = FailedResponse;
