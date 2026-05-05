function showMessage() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = 'Hello! Your CI/CD pipeline is working!';
    messageDiv.className = 'success';
}

// Function for testing
function addNumbers(a, b) {
    return a + b;
}

// Export for testing (if using Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { addNumbers };
}
