// Track form submissions with Facebook Pixel
document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('#checkoutpage-embed form');
    forms.forEach(form => {
        form.addEventListener('submit', function () {
            if (window.fbq) {
                fbq('track', 'Lead');
            }
        });
    });
});
```