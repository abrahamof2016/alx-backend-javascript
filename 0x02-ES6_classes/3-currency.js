/* eslint no-underscore-dangle: 0 */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this.__code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this.name = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
