import HttpException from './HttpException';

export default class BadRequestException extends HttpException {
  private static status = 400;

  constructor(message?: string) {
    super(BadRequestException.status, message || 'Bad request');
  }
}
