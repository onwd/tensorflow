import { FeatureLabel } from '../enums';
import { Feature } from './feature';

export abstract class FeatureExtractionResult<T> {
  public features: Array<Feature<T>>;

  public get isUncertain(): boolean {
    return this.features.some((feature) => feature.label === FeatureLabel.UNKNOWN);
  }

  public get inputs(): Array<number> {
    if (!this._inputs) {
      this._inputs = this.features
        .filter((feature) => this.isInputFeature(feature))
        .map((feature) => feature.value);
    }

    return this._inputs;
  }

  public get outputs(): Array<number> {
    if (!this._outputs) {
      this._outputs = this.features
        .filter((feature) => this.isOutputFeature(feature))
        .map((feature) => feature.value);
    }

    return this._outputs;
  }

  protected _inputs: Array<number>;
  protected _outputs: Array<number>;

  protected abstract isInputFeature(feature: Feature<T>): boolean;
  protected abstract isOutputFeature(feature: Feature<T>): boolean;
}
