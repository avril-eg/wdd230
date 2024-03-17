function initBanner() {
    const banner = document.getElementById("banner");
    const closeBannerBtn = document.getElementById("closeBanner");

    // Check if today is Monday, Tuesday, or Wednesday
    const today = new Date();
    const dayOfWeek = today.getDay();
    const isBannerVisible = dayOfWeek >= 1 && dayOfWeek <= 3;

    // Set initial visibility
    banner.classList.toggle("banner", isBannerVisible);
    banner.classList.toggle("banner-hide", !isBannerVisible);

    // Close the banner when the close button is clicked
    closeBannerBtn.addEventListener("click", function () {
    banner.classList.add("banner-hide");
    });
}