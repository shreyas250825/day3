let score: number = 85;

if (true) {
    let score: number = 42; // Block scope
    console.log("Inner score:", score);
}

console.log("Outer score:", score);

const COUNTRY = "India";
// COUNTRY = "USA"; // ❌ Error: Cannot reassign a constant

// let score: number = 100; // ❌ Error: Cannot re-declare 'score' in the same block
