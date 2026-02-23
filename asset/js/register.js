export function register(event) {
    event.preventDefault();

    const roleElement = document.querySelector('input[name="role"]:checked');
    const fullNameElement = document.querySelector('#fullName');
    const emailElement = document.querySelector('#email');
    const phoneElement = document.querySelector('#phone');
    const addressElement = document.querySelector('#address');
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const weightElement = document.querySelector('input[name="weight"]');
    const passwordElement = document.querySelector('#password');
    const conformPasswordElement = document.querySelector('#conformPassword');
    const bloodGroupElement = document.querySelector('select[name="blood_group"]');

    if (!roleElement || !fullNameElement || !emailElement || !phoneElement || !addressElement || !genderElement || !weightElement || !passwordElement || !conformPasswordElement || !bloodGroupElement) {
        alert("Some form elements are missing. Please check the form.");
        console.error("Missing elements:", {
            role: !!roleElement,
            fullName: !!fullNameElement,
            email: !!emailElement,
            phone: !!phoneElement,
            address: !!addressElement,
            gender: !!genderElement,
            weight: !!weightElement,
            password: !!passwordElement,
            conformPassword: !!conformPasswordElement,
            bloodGroup: !!bloodGroupElement
        });
        return;
    }

    const role = roleElement.value;
    const fullName = fullNameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const address = addressElement.value;
    const gender = genderElement.value;
    const weight = weightElement.value;
    const password = passwordElement.value;
    const conformPassword = conformPasswordElement.value;
    const bloodGroup = bloodGroupElement.value;

    if (password !== conformPassword) {
        alert("Passwords do not match!");
        return;
    }

}
