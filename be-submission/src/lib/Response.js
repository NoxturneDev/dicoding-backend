class Response {
  constructor(helper) {
    this.header = ['Content-Type', 'application/json'];
    this.helper = helper;
    this.responseOpt = {
      header: this.header,
    };
  }

  sendResponse(status, message, data, code) {
    const response = this.helper.response({
      ...this.responseOpt, status, message, data,
    });

    response.code(code);
    return response;
  }

  success(message, data, code) {
    this.responseOpt.status = 'success';
    const response = this.helper.response({
      ...this.responseOpt, message, data,
    });

    response.code(code);
    return response;
  }
}

module.exports = Response;
