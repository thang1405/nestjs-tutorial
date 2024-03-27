import { DynamicModule, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import {
  STORE_CONFIG_TOKEN,
  StoreConfig,
  StoreFeatureConfig,
  StoreRootConfig,
} from './store.config';

let rootStoreConfig: StoreConfig;

const DEFAULT_STORE_DIRNAME = 'store';
const DEFAULT_STORE_FILENAME = 'data.json';

@Module({ providers: [StoreService], exports: [StoreService] })
class RootStoreModule {}

@Module({})
export class StoreModule {
  static forRoot(storeConfig?: StoreRootConfig): DynamicModule {
    rootStoreConfig = StoreModule.createConfig(storeConfig);
    return {
      module: RootStoreModule,
      providers: [
        StoreService,
        {
          provide: STORE_CONFIG_TOKEN,
          useValue: rootStoreConfig,
        },
      ],
    };
  }
  static forFeature(storeConfig: StoreFeatureConfig): DynamicModule {
    const token = 'STORE_SERVICE' + storeConfig.filename;
    console.log(token);

    return {
      module: StoreModule,
      imports: [RootStoreModule],
      providers: [
        StoreService,
        {
          provide: token,
          useFactory: () => {
            const featureStoreConfig = StoreModule.createConfig({
              ...rootStoreConfig,
              ...storeConfig,
            });
            return new StoreService(featureStoreConfig);
          },
        },
      ],
      exports: [token],
    };
  }
  private static createConfig(config: StoreConfig): StoreConfig {
    const defaultConfig: StoreConfig = {
      dirname: DEFAULT_STORE_DIRNAME,
      filename: DEFAULT_STORE_FILENAME,
    };
    return { ...defaultConfig, ...config };
  }
}
