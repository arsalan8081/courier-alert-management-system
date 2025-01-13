// Data Storage
let parcels = {};

// Generate a Random OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
}

// Store Staff Details
let staff = [];

// Staff Registration
document.getElementById('staff-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const staffName = document.getElementById('staff-name').value;
  staff.push(staffName);
  const otp = generateOTP();
  const staffid = 1111;

  parcels[staffid] = { staffName, otp };
  
  document.getElementById('registered-staff-info').innerText = `Staff Registered: ${staff.join(', ')}`;
  document.getElementById('staff-otp-info').innerText = `OTP for Parcel: ${otp}`;
  document.getElementById('staff-form').reset();
});

// Handle Parcel by Staff
document.getElementById('parcel-staff-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const enteredOTP = document.getElementById('student-otp').value;
  let isValid = false;
  let collectedParcel = null;
  
  for (const parcel in parcels) {
    if (parcels[parcel].otp == enteredOTP) {
      isValid = true;
      collectedParcel = parcels[parcel];
      delete parcels[parcel]; // Remove parcel after staff collects it
      break;
    }
  }
  
  const notification = document.getElementById('notification');
  
  if (isValid) {
    const staffName = staff[staff.length - 1]; // Last registered staff
    alert(`Parcel collected by ${staffName}. Notification sent to receiver.`);
  } else {
    notification.innerText = 'Invalid OTP. Try Again.';
  }
  
  document.getElementById('parcel-staff-form').reset();
  
  window.location.href = 'admin.html';
});
