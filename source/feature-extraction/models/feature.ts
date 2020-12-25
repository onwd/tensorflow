import { FeatureType } from '../enums';

export class Feature {
  public type: FeatureType;
  public probability: number | null;
  public reason: string | null;
  public error: Error | null;
  public timeTaken: number;

  constructor(feature: Partial<Feature>) {
    this.type = feature.type;
    this.probability = feature.probability ?? null;
    this.reason = feature.reason ?? null;
    this.error = feature.error ?? null;
    this.timeTaken = feature.timeTaken;
  }
}
