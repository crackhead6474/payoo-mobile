// login button function - robust version
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const mobileInput = document.getElementById('MobileNumber');
    const pinInput = document.getElementById('Pin');

    if (!loginBtn) return console.error('loginBtn not found');

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const mobileValue = mobileInput ? mobileInput.value.trim() : '';
        const pinValue = pinInput ? pinInput.value.trim() : '';

        console.log('mobileValue:', mobileValue, 'pinValue:', pinValue);

        if (!mobileValue) {
            alert('Please enter your mobile number');
            return;
        }
        if (!/^[0-9]{4}$/.test(pinValue)) {
            alert('Please enter a valid 4-digit PIN');
            return;
        }

        // Demo credentials for local testing only
        const demoMobile = '12345678910';
        const demoPin = '1234';

        if (mobileValue === demoMobile && pinValue === demoPin) {
            alert('Login successful!');
        } else {
            alert('Invalid mobile number or PIN. Invalid Credentials.');
        }
    });
});