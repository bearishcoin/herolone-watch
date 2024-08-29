let lastSecondDeg = 0; // متغیر برای ذخیره موقعیت قبلی عقربه ثانیه‌شمار

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds() + now.getMilliseconds() / 1000; // اضافه کردن میلی‌ثانیه‌ها برای حرکت نرم
    const minutes = now.getMinutes() + seconds / 60; // دقیقه‌ها به علاوه کسری از دقیقه برای دقت بیشتر
    const hours = now.getHours() % 12 + minutes / 60; // ساعت به فرمت 12 ساعته به علاوه کسری از ساعت برای دقت بیشتر

    const secondDeg = seconds * 6; // هر ثانیه 6 درجه حرکت می‌کند
    const minuteDeg = minutes * 6; // هر دقیقه 6 درجه حرکت می‌کند
    const hourDeg = hours * 30; // هر ساعت 30 درجه حرکت می‌کند

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    // چک کردن برای جلوگیری از حرکت ناگهانی عقربه ثانیه‌شمار
    if (secondDeg < lastSecondDeg) {
        secondHand.style.transition = 'none'; // غیر فعال کردن انیمیشن برای جلوگیری از حرکت ناگهانی
    } else {
        secondHand.style.transition = 'transform 0.05s linear'; // فعال کردن انیمیشن برای حرکت نرم
    }

    lastSecondDeg = secondDeg; // به روز رسانی مقدار قبلی برای استفاده در چرخش بعدی

    // تنظیم استایل‌های عقربه‌ها
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

// تنظیم تابع به‌روزرسانی به صورت پیوسته هر 50 میلی‌ثانیه
setInterval(updateClock, 50);

updateClock(); // برای به‌روزرسانی فوری عقربه‌ها
