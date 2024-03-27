import { Inject, Injectable, Optional } from '@nestjs/common';
import * as fs from 'fs';
import { StoreConfig } from './store.config';

@Injectable()
export class StoreService {
  constructor(
    @Optional() @Inject('STORE_SERVICE') private storeConfig: StoreConfig,
  ) {
    if (storeConfig && !fs.existsSync(this.storeConfig.dirname)) {
      fs.mkdirSync(this.storeConfig.dirname);
    }
  }
  save(data: any) {
    fs.appendFileSync(
      `${this.storeConfig.dirname}/${this.storeConfig.filename}`,
      JSON.stringify(data),
    );
  }
}
