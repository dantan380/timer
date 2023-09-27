const args = process.argv.slice(2);

for(time of args){
    if (time < 0){
        console.log("Please provide only positive numbers.");
        process.exit();
    } 

    if (time === NaN ){
        console.log("Please provide at least one positive number");
        process.exit();
    }

    const regex = /^[^\d-]+$/g //Regex which includes any letter or symbol that is not an integer.
    if (time.match(regex)){
        console.log("Please do not provide letters or any other symbols. Only provide positive integers.")
        process.exit();
    }
    setTimeout(() => {
        process.stdout.write('\x07');
    }, time * 1000)
};