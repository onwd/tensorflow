import { Feature } from './feature';
import { FeatureExtractorSharedData } from './feature-extractor-shared-data';

export abstract class FeatureExtractor {
  public abstract extract(data: any, sharedData: FeatureExtractorSharedData): Feature | Promise<Feature>;
}
