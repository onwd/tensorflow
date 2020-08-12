import { Feature } from './feature';

export class FeatureExtractionResult {
  public features: Array<Feature>;

  public get inputs(): Array<number> {
    if (!this._inputs) {
      this._inputs = this.features
        .filter((feature) => { /* Define criteria to get input features only here */ })
        .map((feature) => feature.probability);
    }

    return this._inputs;
  }

  public get outputs(): Array<number> {
    if (!this._outputs) {
      this._outputs = this.features
        .filter((feature) => { /* Define criteria to get output features only here */ })
        .map((feature) => feature.probability);
    }

    return this._outputs;
  }

  protected _inputs: Array<number>;
  protected _outputs: Array<number>;
}
