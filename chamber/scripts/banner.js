function initBanner() {
    const banner = document.getElementById("banner");
    const bannerBtn = document.getElementById("closeBanner");

    // Check if today is Monday, Tuesday, or Wednesday
    var today = new Date();
    var dayOfWeek = today.getDay();
    // var dayOfWeek = 1; // for testing purposes
    var bannerVisible = dayOfWeek >= 1 && dayOfWeek <= 3;

    // Set initial visibility
    banner.classList.toggle("banner", bannerVisible);
    banner.classList.toggle("banner-hide", !bannerVisible);

    // Close the banner when the close button is clicked
    bannerBtn.addEventListener("click", function () {
        banner.classList.add("banner-hide");
    });
}


