import { FeatureLabel } from '../enums';
import { Feature } from './feature';

export class FeatureExtractionResult<T> {
  public features: Array<Feature<T>>;

  public get isUncertain(): boolean {
    return this.features.some((feature) => feature.label === FeatureLabel.UNKNOWN);
  }

  public get inputs(): Array<number> {
    if (!this._inputs) {
      this._inputs = this.features
        .filter((feature) => { /* Define criteria to get input features only here */ })
        .map((feature) => feature.value);
    }

    return this._inputs;
  }

  public get outputs(): Array<number> {
    if (!this._outputs) {
      this._outputs = this.features
        .filter((feature) => { /* Define criteria to get output features only here */ })
        .map((feature) => feature.value);
    }

    return this._outputs;
  }

  protected _inputs: Array<number>;
  protected _outputs: Array<number>;
}
