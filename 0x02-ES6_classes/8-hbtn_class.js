/* eslint no-underscore-dangle:0 */
export default class Holbertonclass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  toString() {
    return this._location;
  }

  valueof() {
    return this._size;
  }
}
