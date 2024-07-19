function validateForm() {
    // Basic form validation
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var dod = document.getElementById('dod').value;
    var content = document.getElementById('content').value;
    var author = document.getElementById('author').value;

    if (!name || !dob || !dod || !content || !author) {
        alert('Please fill in all fields');
        return false;
    }

    return true;
}
