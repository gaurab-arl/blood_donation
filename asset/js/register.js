export function register(event) {
    event.preventDefault();

    const role = document.querySelector('input[name="role"]:checked')?.value;
    const fullName = document.querySelector('#fullName').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const address = document.querySelector('#address').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const weight = document.querySelector('input[name="weight"]').value;
    const password = document.querySelector('#password').value;
    const conformPassword = document.querySelector('#conformPassword').value;
    const bloodGroup = document.querySelector('select[name="blood_group"]').value;

    if (password !== conformPassword) {
        alert("Passwords do not match!");
        return;
    }

    const userData = {
        role,
        fullName,
        email,
        phone,
        address,
        gender,
        weight,
        password,
        bloodGroup
    };

    console.log("Registering user:", userData);
    alert("Registration submitted! (Check console for data)");
}
