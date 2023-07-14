document.addEventListener('DOMContentLoaded', function() {
    const username = document.querySelector('.username');
    const logout = document.querySelector('.logout');
  
    // تغییر رنگ متن یوزرنیما در هاور
    username.addEventListener('mouseover', function() {
      username.style.color = '#7289DA';
      username.style.borderRadius = '5px';
    });
  
    // بازگشت به رنگ متن اصلی یوزرنیما پس از هاور
    username.addEventListener('mouseout', function() {
      username.style.color = '#FFFF00';
      username.style.borderRadius = '0';
    });
  
    // تغییر رنگ پس زمینه و متن دکمه لاگ‌اوت در هاور
    logout.addEventListener('mouseover', function() {
      logout.style.backgroundColor = '#FF0000';
      logout.style.color = '#FFFFFF';
    });
  
    // بازگشت به رنگ پس زمینه و متن اصلی دکمه لاگ‌اوت پس از هاور
    logout.addEventListener('mouseout', function() {
      logout.style.backgroundColor = '#7289DA';
      logout.style.color = '#FFFFFF';
    });
  
    // اضافه کردن رویداد کلیک برای المان‌های لاگ‌اوت و یوزرنیم
    logout.addEventListener('click', function(event) {
      event.preventDefault();
      // عملیات لاگ‌اوت را اینجا انجام دهید
      console.log('Clicked Logout');
    });
  
    username.addEventListener('click', function(event) {
      event.preventDefault();
      // عملیات نمایش اطلاعات کاربر را اینجا انجام دهید
      console.log('Clicked Username');
    });
  });
  