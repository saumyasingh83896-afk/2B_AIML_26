class hello {

    constructor() {
        console.log("Hello");
    }

}

class hi extends hello {

    constructor() {
        super();
        console.log("hi constructor");
    }

}

let h = new hi();