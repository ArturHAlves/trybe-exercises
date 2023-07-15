import HttpException from './HttpException';

export default class NotFoundException extends HttpException {
  private static status = 404;

  constructor(message?: string) {
    super(NotFoundException.status, message || 'Not Found');
  }
}
