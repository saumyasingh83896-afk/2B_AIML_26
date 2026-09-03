const student = (name, ...numbers) => {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    console.log("Name:", name);
    console.log("Total:", total);
};

student("Saumya", 10, 20, 30);