import { Feature } from './feature';
import { FeatureExtractorSharedData } from './feature-extractor-shared-data';

export abstract class FeatureExtractor<T> {
  public abstract extract(data: T, sharedData: FeatureExtractorSharedData): Feature | Promise<Feature>;
}
