import { FeatureType } from '../enums';

export class Feature {
  public type: FeatureType;
  public probability?: number;
  public reason?: string;
  public error?: any;

  constructor(feature: Partial<Feature>) {
    Object.assign(this, feature);
  }
}
