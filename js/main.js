document.addEventListener('DOMContentLoaded', function() {
    let currentUrl = window.location.href;
    let navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (currentUrl.includes(link.getAttribute('href'))) {
            link.style.backgroundColor = '#3B82F6';
            link.style.fontWeight = 'bold';
        }
        link.addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
        });
    });
    let images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = '../images/placeholder.jpg';
            this.alt = '图片加载失败';
        });
    });
    let contactTexts = document.querySelectorAll('.contact-info p');
    contactTexts.forEach(text => {
        text.addEventListener('click', function() {
            alert('已复制：' + this.textContent);
        });
    });
});