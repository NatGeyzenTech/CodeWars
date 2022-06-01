/* INSTRUCTIONS:
   Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
   Use conditionals to return the proper message:
    - name equals owner	=> 'Hello boss'
    - otherwise => 'Hello guest'
*/ 

// SOLUTION 1A: basic implementation
function greet (name, owner) {
    return `Hello ${name === owner ? 'boss' : 'guest'}`;
}

// SOLUTION 1B: ES6 arrow function alternative
const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;

// SOLUTION 2A: handling input that is not a string
function greet (name, owner) {
    const isValidArgs = typeof name === "string" && typeof owner === "string";
    if (!isValidArgs) return "Invalid input";
    else if (isValidArgs && name === owner) return "Hello boss";
    return "Hello guest";
}

// SOLUTION 1B: ES6 arrow function alternative
const greet = (name, owner) =>  {
    const isValidArgs = typeof name === "string" && typeof owner === "string";
    if (!isValidArgs) return "Invalid input";
    else if (isValidArgs && name === owner) return "Hello boss";
    return "Hello guest";
}

// SOLUTION 3A: handling input that is not a string or an invalid string
function greet (name, owner) {
    const regex = /^[\S]\w/;
    const isValidName = typeof name === "string" && regex.test(name);
    const isValidOwner = typeof owner === "string" && regex.test(owner);
    const isValidArgs = isValidName && isValidOwner;
    
    if (!isValidArgs) return "Invalid input";
    else if (isValidArgs && name === owner) return "Hello boss";
    return "Hello guest";
}

// SOLUTION 3B: ES6 arrow function alternative
const greet = (name, owner) =>  {
    const regex = /^[\S]\w/;
    const isValidName = typeof name === "string" && regex.test(name);
    const isValidOwner = typeof owner === "string" && regex.test(owner);
    const isValidArgs = isValidName && isValidOwner;
    
    if (!isValidArgs) return "Invalid input";
    else if (isValidArgs && name === owner) return "Hello boss";
    return "Hello guest";
}