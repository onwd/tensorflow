export class Feature<T> {
  public type: T;
  public label: string;
  public value: number;
  public reason: string | null;
  public timeTaken: number;

  constructor(feature: Partial<Feature<T>>) {
    this.type = feature.type;
    this.label = feature.label;
    this.value = feature.value;
    this.reason = feature.reason ?? null;
    this.timeTaken = feature.timeTaken;
  }
}
