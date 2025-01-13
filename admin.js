// Data Storage
let parcels = {};

// Generate a Random OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
}

// Handle Parcel Registration
document.getElementById('parcel-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = document.getElementById('receiver-name').value;
  const id = document.getElementById('receiver-id').value;
  const parcelNumber = document.getElementById('parcel-number').value;
  const otp = generateOTP();
  
  parcels[parcelNumber] = { name, id, otp };
  
  document.getElementById('otp-info').innerText = `OTP for Parcel #${parcelNumber}: ${otp}`;
  document.getElementById('parcel-form').reset();
});

// Validate OTP
document.getElementById('otp-validation-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const enteredOTP = document.getElementById('otp-input').value;
  let isValid = false;

  for (const parcel in parcels) {
    if (parcels[parcel].otp == enteredOTP) {
      isValid = true;
      delete parcels[parcel]; // Remove parcel after successful collection
      break;
    }
  }
  
//   const resultMessage = isValid ? 'OTP Verified! Parcel Collected.' : 'Invalid OTP. Try Again.';
  const resultMessage = isValid ? alert('OTP Verified! Parcel Collected.') : 'Invalid OTP. Try Again.';
  document.getElementById('otp-validation-form').reset();
  window.location.href = 'index.html';
});
