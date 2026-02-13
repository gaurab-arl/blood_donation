
// Tab Switching Logic
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.setting-section');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');

        // Update nav
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Update sections
        sections.forEach(s => s.classList.remove('active'));
        document.getElementById(target).classList.add('active');
    });
});

// Toggle Password Visibility

// Simple Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Role Detection (Simulated for Demo)
function applyRoleStyles() {
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role') || 'admin'; // Default to admin for demo

    document.querySelectorAll('.role-admin').forEach(el => {
        el.style.display = (role === 'admin') ? 'block' : 'none';
    });
    document.querySelectorAll('.role-donor').forEach(el => {
        el.style.display = (role === 'donor') ? 'block' : 'none';
    });

    if (role === 'donor') {
        document.getElementById('userNameDisplay').textContent = 'Alex Rivera';
        document.getElementById('fullName').value = 'Alex Rivera';
        document.getElementById('email').value = 'alex.r@example.com';
    }
}

window.onload = applyRoleStyles;