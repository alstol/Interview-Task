class Person {
    constructor(id, name, email, phone, address, picture, nationality) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.picture = picture;
        this.nationality = nationality;
    }

    toString() {
        return `${this.name.toString()} ${this.email} ${this.phone} ${this.address.toString()} ${this.nationality} ${this.salary}`;
    }
}