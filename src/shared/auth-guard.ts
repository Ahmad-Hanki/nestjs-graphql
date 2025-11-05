import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // Convert to GraphQL context
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    const authHeader = req.headers['x-auth'];

    if (authHeader === 'true') {
      return true; // ✅ Access allowed
    }

    // ❌ Deny access using a custom error
    throw new HttpException(
      {
        message: 'Unauthorized access. Please provide a valid x-auth header.',
        error: { header: 'x-auth' },
        status
      },
      HttpStatus.UNAUTHORIZED,
    );
  }
}
