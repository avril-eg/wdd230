document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.getElementById('closeBanner');
    const banner = document.getElementById('banner');
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();

    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        banner.style.display = 'block';
    }

    closeButton.addEventListener('click', function () {
        banner.style.display = 'none';
    });
});

