class Person {
    constructor(
                firstname, 
                lastname, 
                email, 
                birthYear) 
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.birthYear = birthYear;
    }

    // wird dem prototyp angehängt
    getAge() {
        return 2019 - this.birthYear;
    }
}

module.exports = Person;