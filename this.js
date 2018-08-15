let person = {
    firstName:"Noel",
    lastName: "Ryan",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

person.fullName();