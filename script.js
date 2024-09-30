document.addEventListener('DOMContentLoaded', function() {
    const loungeButton = document.getElementById('lounge-button');
    const galleryButton = document.getElementById('gallery-button');

    function setActiveButton(activeButton, inactiveButton) {
        activeButton.classList.add('active');
        inactiveButton.classList.remove('active');
    }

    loungeButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    galleryButton.addEventListener('click', function() {
        window.location.href = 'app.html';
    });

    // Kiểm tra trang hiện tại và đặt nút active tương ứng
    if (window.location.pathname.includes('app.html')) {
        setActiveButton(galleryButton, loungeButton);
    } else {
        setActiveButton(loungeButton, galleryButton);
    }

    // Xử lý accordion
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.classList.toggle('active');
            
            // Đóng các mục khác khi mở một mục mới
            accordionButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.nextElementSibling.classList.remove('active');
                }
            });
        });
    });
});