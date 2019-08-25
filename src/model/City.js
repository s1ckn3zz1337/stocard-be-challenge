module.exports = () => class City {
  constructor({
    id, name, lat, lng,
  }) {
    this.attributes = {
      id, name, lat, lng,
    };
  }

  toDetailedJSON() {
    return this.attributes;
  }

  toJSON() {
    return { id: this.attributes.id, name: this.attributes.name };
  }
};
