class Location {
    constructor(city, postcode, country, street) {
        this.city = city;
        this.postcode = postcode;
        this.country = country;
        this.street = street;
    }

    toString() {
        return `${this.street}, ${this.postcode}, ${this.city}; ${this.country}`;
    }
}