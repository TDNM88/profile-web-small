document.addEventListener('DOMContentLoaded', function() {
    const loungeButton = document.getElementById('lounge-button');
    const galleryButton = document.getElementById('gallery-button');
    const myAppsButton = document.getElementById('my-apps-button');

    function setActiveButton(activeButton, inactiveButton) {
        activeButton.classList.add('active');
        inactiveButton.classList.remove('active');
    }

    loungeButton.addEventListener('click', function() {
        loungeButton.classList.add('active');
        galleryButton.classList.remove('active');
        myAppsButton.classList.remove('active');
        // Thêm logic để hiển thị nội dung Lounge
    });

    galleryButton.addEventListener('click', function() {
        galleryButton.classList.add('active');
        loungeButton.classList.remove('active');
        myAppsButton.classList.remove('active');
        // Thêm logic để hiển thị nội dung Gallery
    });

    myAppsButton.addEventListener('click', function() {
        myAppsButton.classList.add('active');
        loungeButton.classList.remove('active');
        galleryButton.classList.remove('active');
        // Chuyển hướng đến trang My Apps
        window.location.href = 'app.html';
    });

    // Kiểm tra trang hiện tại và đặt nút active tương ứng
    if (window.location.pathname.includes('app.html')) {
        setActiveButton(myAppsButton, loungeButton);
    } else if (window.location.pathname.includes('gallery.html')) {
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
