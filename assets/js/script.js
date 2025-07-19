// ============================================
// WELCOMING SPEECH FUNCTIONALITY
// ============================================
function initializeWelcomeMessage() {
    const userName = document.getElementById('userName');
    if (userName) {
        // Prompt user for their name
        const name = prompt('Siapa nama Anda?');
        if (name && name.trim() !== '') {
            userName.textContent = name.trim();
            // Store name in localStorage for future visits
            localStorage.setItem('userName', name.trim());
        } else {
            // Check if name exists in localStorage
            const storedName = localStorage.getItem('userName');
            if (storedName) {
                userName.textContent = storedName;
            }
        }
    }
}

// ============================================
// CURRENT TIME FUNCTIONALITY
// ============================================
function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const currentTimeElement = document.getElementById('currentTime');
    if (currentTimeElement) {
        currentTimeElement.textContent = timeString;
    }
}

// ============================================
// FORM PREVIEW FUNCTIONALITY
// ============================================
function updatePreview() {
    const nameInput = document.getElementById('name');
    const birthDateInput = document.getElementById('birthDate');
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const messageInput = document.getElementById('message');
    
    const previewName = document.getElementById('previewName');
    const previewBirthDate = document.getElementById('previewBirthDate');
    const previewGender = document.getElementById('previewGender');
    const previewMessage = document.getElementById('previewMessage');
    
    if (nameInput && previewName) {
        nameInput.addEventListener('input', () => {
            previewName.textContent = nameInput.value || 'Harfi Novan';
        });
    }
    
    if (birthDateInput && previewBirthDate) {
        birthDateInput.addEventListener('input', () => {
            if (birthDateInput.value) {
                const date = new Date(birthDateInput.value);
                const formattedDate = date.toLocaleDateString('id-ID', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                });
                previewBirthDate.textContent = formattedDate;
            } else {
                previewBirthDate.textContent = '01/11/1995';
            }
        });
    }
    
    if (genderInputs && previewGender) {
        genderInputs.forEach(input => {
            input.addEventListener('change', () => {
                if (input.checked) {
                    previewGender.textContent = input.value;
                }
            });
        });
    }
    
    if (messageInput && previewMessage) {
        messageInput.addEventListener('input', () => {
            previewMessage.textContent = messageInput.value || 'Lucu Banget buat Website';
        });
    }
}

// ============================================
// FORM VALIDATION & SUBMISSION
// ============================================
function validateForm(formData) {
    const errors = [];
    
    // Validate name
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Nama harus diisi minimal 2 karakter');
    }
    
    // Validate birth date
    if (!formData.birthDate) {
        errors.push('Tanggal lahir harus diisi');
    } else {
        const birthDate = new Date(formData.birthDate);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        if (age < 5 || age > 100) {
            errors.push('Tanggal lahir tidak valid');
        }
    }
    
    // Validate gender
    if (!formData.gender) {
        errors.push('Jenis kelamin harus dipilih');
    }
    
    // Validate message
    if (!formData.message || formData.message.trim().length < 10) {
        errors.push('Pesan harus diisi minimal 10 karakter');
    }
    
    return errors;
}

function handleFormSubmission() {
    const form = document.getElementById('messageForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // Validate form
            const errors = validateForm(data);
            
            if (errors.length > 0) {
                alert('Terjadi kesalahan:\n\n' + errors.join('\n'));
                return;
            }
            
            // Show success message with data
            const message = `Pesan berhasil dikirim!\n\nData yang dikirim:\n` +
                           `Nama: ${data.name}\n` +
                           `Tanggal Lahir: ${data.birthDate}\n` +
                           `Jenis Kelamin: ${data.gender}\n` +
                           `Pesan: ${data.message}`;
            
            alert(message);
            
            // Reset form after submission
            form.reset();
            
            // Reset preview to default values
            document.getElementById('previewName').textContent = 'Harfi Novan';
            document.getElementById('previewBirthDate').textContent = '01/11/1995';
            document.getElementById('previewGender').textContent = 'Laki - Laki';
            document.getElementById('previewMessage').textContent = 'Lucu Banget buat Website';
        });
    }
}

// ============================================
// CONTACT FORM FUNCTIONALITY
// ============================================
function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            // Simple validation
            if (!data.fullName || !data.email || !data.subject || !data.message) {
                alert('Mohon lengkapi semua field yang wajib diisi!');
                return;
            }
            
            alert('Thank you for your message!\n\nWe will get back to you soon.\n\nSubmitted data:\n' + 
                  JSON.stringify(data, null, 2));
            
            // Reset form
            this.reset();
        });
    }
}

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// ============================================
// SMOOTH SCROLLING
// ============================================
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize welcome message (only on index page)
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        initializeWelcomeMessage();
    }
    
    // Initialize common functionality
    updateCurrentTime();
    updatePreview();
    handleFormSubmission();
    handleContactForm();
    setActiveNavigation();
    initializeSmoothScrolling();
    
    // Update time every second
    setInterval(updateCurrentTime, 1000);
});
