export interface StoreRootConfig {
  dirname: string;
}

export interface StoreFeatureConfig {
  filename: string;
}

// có cũng đc ko có cũng đc
export type StoreConfig = Partial<StoreFeatureConfig & StoreRootConfig>;

export const STORE_CONFIG_TOKEN = 'STORE_CONFIG';
