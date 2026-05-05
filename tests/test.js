// Simple test for our JavaScript function
function runTests() {
    console.log('Running tests...');
    
    // Test 1: Addition function
    const result1 = addNumbers(2, 3);
    if (result1 === 5) {
        console.log('✓ Test 1 passed: addNumbers(2, 3) = 5');
    } else {
        console.log('✗ Test 1 failed: expected 5, got', result1);
        process.exit(1);
    }
    
    // Test 2: Addition with negative numbers
    const result2 = addNumbers(-1, 1);
    if (result2 === 0) {
        console.log('✓ Test 2 passed: addNumbers(-1, 1) = 0');
    } else {
        console.log('✗ Test 2 failed: expected 0, got', result2);
        process.exit(1);
    }
    
    console.log('All tests passed!');
}

// Include the function to test
function addNumbers(a, b) {
    return a + b;
}

// Run tests
runTests();
