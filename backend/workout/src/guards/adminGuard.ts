import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotAcceptableException,
} from '@nestjs/common';
import { Errors } from '../common/constants';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    if (!request?.user?.isAdmin) {
      throw new NotAcceptableException(Errors.NO_ACCESS);
    }
    return true;
  }
}
