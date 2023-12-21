// Array of names
var names = ["John", "Jane", "Jack", "Alice", "Bob"];

// Loop over the array
for (var i = 0; i < names.length; i++) {
    // Get the current name
    var currentName = names[i];

    // Check if the name starts with 'j' or 'J'
    if (currentName.charAt(0).toLowerCase() === 'j') {
        // Print Goodbye
        console.log("Goodbye " + currentName);
    } else {
        // Print Hello
        console.log("Hello " + currentName);
    }
}
