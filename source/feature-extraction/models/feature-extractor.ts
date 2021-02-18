import { Feature } from './feature';

export abstract class FeatureExtractor<D, T, S> {
  public abstract featureType: T;

  public abstract extract(data: D, sharedData: S): Feature<T> | Promise<Feature<T>>;
}
