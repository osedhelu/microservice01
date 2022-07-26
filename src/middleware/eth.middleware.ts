import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { eth_verify } from 'utils/eth-validate';
@Injectable()
export class EthMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: NextFunction) {
    req.eth = eth_verify(req.headers['x-metamask']);
    next();
  }
}
