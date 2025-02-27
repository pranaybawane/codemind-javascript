

console.log("===== Traversing Objects =========");
for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        const element = person[key];// person["name"]
        console.log(`${key} ==> ${element}`);
    }
}