/**
 * CALLBACK HELL EXECUTION FLOW - DETAILED EXPLANATION
 * Understanding how arrow functions execute in nested callbacks
 */

console.log('=== CALLBACK HELL EXECUTION EXPLAINED ===\n');

// ============================================
// SIMPLE EXAMPLE: Step-by-step execution
// ============================================

console.log('--- EXAMPLE 1: Simple 3-step callback ---\n');

// Mock async functions that use callbacks
function step1(callback) {
    console.log('  → Step 1: Starting...');
    setTimeout(() => {
        console.log('  ✓ Step 1: Done! Calling callback...');
        callback('Result from step 1');
    }, 1000);
}

function step2(data, callback) {
    console.log(`  → Step 2: Starting with "${data}"...`);
    setTimeout(() => {
        console.log('  ✓ Step 2: Done! Calling callback...');
        callback('Error from 2', 'Result from step 2');
    }, 1000);
}

function step3(data, callback) {
    console.log(`  → Step 3: Starting with "${data}"...`);
    setTimeout(() => {
        console.log('  ✓ Step 3: Done! Calling callback...');
        callback('Error from 3', 'Result from step 3');
    }, 1000);
}

// CALLBACK HELL with arrow functions
console.log('EXECUTION STARTS:');

step1((result1) => {                           // ← Arrow function #1
    console.log(`  📦 Got: "${result1}"`);

    step2(result1, (error, result2) => {              // ← Arrow function #2 (nested)
        console.log(`  📦 Got: "${result2}"`);
        console.log(`  📦 Got Error: "${error}"`);

        step3(result2, (error, result3) => {          // ← Arrow function #3 (nested deeper)
            console.log(`  📦 Got: "${result3}"`);
            console.log(`  📦 Got Error: "${error}"`);
            console.log('  🎉 ALL DONE!\n');
        });
    });
});

console.log('Main code continues...\n');