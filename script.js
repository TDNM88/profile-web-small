document.addEventListener('DOMContentLoaded', function() {
    const loungeButton = document.getElementById('lounge-button');
    const galleryButton = document.getElementById('gallery-button');
    const contentDiv = document.getElementById('content');

    // Lưu trữ nội dung ban đầu của trang Lounge
    const initialLoungeContent = contentDiv.innerHTML;

    function setActiveButton(activeButton, inactiveButton) {
        activeButton.classList.add('active');
        inactiveButton.classList.remove('active');
    }

    loungeButton.addEventListener('click', function() {
        // Khôi phục nội dung ban đầu của trang Lounge
        contentDiv.innerHTML = initialLoungeContent;
        contentDiv.className = 'lounge-content';
        setActiveButton(loungeButton, galleryButton);
    });

    galleryButton.addEventListener('click', function() {
        contentDiv.innerHTML = '<gradio-app src="https://tdn-m-tams-image-gen.hf.space"></gradio-app>';
        contentDiv.className = 'gallery-content';
        setActiveButton(galleryButton, loungeButton);
    });
});