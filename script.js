document.addEventListener('DOMContentLoaded', () => {

    // --- ICON UPLOADER LOGIC ---
    const iconSelector = document.getElementById('icon-selector');
    const allIconElements = document.querySelectorAll('.app-icon');

    iconSelector.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageUrl = e.target.result;
                allIconElements.forEach(imgElement => {
                    imgElement.src = imageUrl;
                });
            };
            reader.readAsDataURL(file);
        }
    });

    // --- LIVE TEXT UPDATE LOGIC ---
    const appNameInput = document.getElementById('app-name-input');
    const companyNameInput = document.getElementById('company-name-input');
    const appSubtitleInput = document.getElementById('app-subtitle-input'); // New input
    
    const appNameDisplays = document.querySelectorAll('.app-name-display');
    const companyNameDisplay = document.getElementById('android-company-name-display');
    const iosSubtitleDisplay = document.getElementById('ios-subtitle-display'); // New display element

    // Update App Name
    appNameInput.addEventListener('input', (event) => {
        const newName = event.target.value;
        appNameDisplays.forEach(element => {
            if (element.parentElement.classList.contains('home-screen-preview')) {
                element.textContent = newName || 'Your App';
            } else {
                element.textContent = newName || 'Your App Name';
            }
        });
    });

    // Update Company Name
    companyNameInput.addEventListener('input', (event) => {
        const newName = event.target.value;
        companyNameDisplay.textContent = newName || 'Your Company';
    });
    
    // Update iOS Subtitle
    appSubtitleInput.addEventListener('input', (event) => {
        const newSubtitle = event.target.value;
        iosSubtitleDisplay.textContent = newSubtitle || 'A short description';
    });

    // --- THEME TOGGLE LOGIC ---
    const themeToggle = document.getElementById('theme-toggle');

    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.checked = false;
        }
    };

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    applySavedTheme();
});