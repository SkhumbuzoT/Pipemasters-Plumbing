// Massage Therapist Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeNavigation();
    initializeFloatingButton();
    initializeHero();
    initializeAbout();
    initializeServices();
    initializeBooking();
    initializeTestimonials();
    initializeContact();
    initializeFooter();
    
    // Smooth scrolling for all anchor links
    document.addEventListener('click', function(e) {
        if (e.target.matches('[data-scroll]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('data-scroll');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Navigation Component
function initializeNavigation() {
    const nav = document.getElementById('navigation');
    const config = window.businessConfig;
    
    nav.innerHTML = `
        <div class="nav-container">
            <div class="nav-logo">${config.businessName}</div>
            <div class="nav-links">
                <a href="#" data-scroll="hero">Home</a>
                <a href="#" data-scroll="about">About</a>
                <a href="#" data-scroll="services">Services</a>
                <a href="#" data-scroll="testimonials">Testimonials</a>
                <a href="#" data-scroll="contact">Contact</a>
            </div>
            <a href="#" class="nav-book-btn" data-scroll="booking">Book Now</a>
            <button class="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    `;
    
    // Handle scroll effects
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = 'none';
        }
    });
}

// Floating Book Button
function initializeFloatingButton() {
    const button = document.getElementById('floating-book-button');
    button.innerHTML = `
        <a href="#" class="floating-book-btn" data-scroll="booking">
            <i class="fas fa-calendar-plus"></i> Book Now
        </a>
    `;
}

// Hero Section
function initializeHero() {
    const hero = document.getElementById('hero');
    const config = window.businessConfig;
    
    const titleWords = config.hero.title.split(' ');
    const lastWord = titleWords.pop();
    const firstPart = titleWords.join(' ');
    
    hero.className = 'hero section';
    hero.innerHTML = `
        <div class="hero-bg" style="background-image: url('${config.hero.backgroundImage}')"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1 class="hero-title">
                ${firstPart} <span class="text-accent">${lastWord}</span>
            </h1>
            <p class="hero-subtitle">${config.hero.subtitle}</p>
            <div class="hero-buttons">
                <a href="#" class="btn-primary" data-scroll="booking">
                    <i class="fas fa-calendar-check"></i> Schedule Appointment
                </a>
                <a href="#" class="btn-outline" data-scroll="about">
                    <i class="fas fa-play"></i> Learn More
                </a>
            </div>
        </div>
        <div style="position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); animation: bounce 2s infinite;">
            <i class="fas fa-chevron-down" style="color: white; font-size: 1.5rem;"></i>
        </div>
    `;
}

// About Section
function initializeAbout() {
    const about = document.getElementById('about');
    const config = window.businessConfig;
    
    const nameWords = config.therapistName.split(' ');
    const firstName = nameWords[0];
    const lastName = nameWords[1] || '';
    
    about.className = 'section section-bg-white';
    about.innerHTML = `
        <div class="container">
            <div class="grid grid-2">
                <div class="animate-slide-up">
                    <h2 class="section-title">
                        Meet ${firstName} <span class="text-accent">${lastName}</span>
                    </h2>
                    <p class="about-text">${config.about.bio}</p>
                    <div class="certifications">
                        ${config.about.certifications.map(cert => `
                            <div class="certification-item">
                                <i class="fas fa-certificate"></i>
                                <span>${cert}</span>
                            </div>
                        `).join('')}
                    </div>
                    <blockquote class="quote">"${config.about.quote}"</blockquote>
                </div>
                <div class="animate-slide-up">
                    <img src="${config.about.photo}" alt="${config.therapistName} - Professional Massage Therapist" class="about-image">
                </div>
            </div>
        </div>
    `;
}

// Services Section
function initializeServices() {
    const services = document.getElementById('services');
    const config = window.businessConfig;
    
    services.className = 'section section-bg-cream';
    services.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Healing <span class="text-accent">Services</span></h2>
                <p class="section-subtitle">
                    Choose from our range of therapeutic massage services, each designed to address your specific wellness needs and restore your body's natural balance.
                </p>
            </div>
            <div class="grid grid-3">
                ${config.services.map(service => `
                    <div class="card">
                        <img src="${service.image}" alt="${service.title} Treatment" class="card-image">
                        <div class="card-content">
                            <h3 class="card-title">${service.title}</h3>
                            <p class="card-text">${service.description}</p>
                            </div>
                            <ul class="benefits-list">
                                ${service.benefits.map(benefit => `
                                    <li><i class="fas fa-check"></i> ${benefit}</li>
                                `).join('')}
                            </ul>
                            <button class="btn-primary w-full" onclick="scrollToBooking()">
                                Book This Service
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Booking Section
function initializeBooking() {
    const booking = document.getElementById('booking');
    const config = window.businessConfig;
    
    booking.className = 'section section-bg-white';
    booking.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Schedule Your <span class="text-accent">Appointment</span></h2>
                <p class="section-subtitle">
                    Choose your preferred date and time for a personalized massage experience. Book easily online or call us directly.
                </p>
            </div>
            <div class="grid grid-2">
                <div class="booking-calendar">
                    <h3 class="card-title mb-6">Select Date & Time</h3>
                    <div class="card" style="padding: 1.5rem;">
                        <div class="calendar-header">
                            <button class="calendar-nav" onclick="changeMonth(-1)">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <h4 class="calendar-title">March 2024</h4>
                            <button class="calendar-nav" onclick="changeMonth(1)">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div class="calendar-grid">
                            <div class="calendar-day-header">Sun</div>
                            <div class="calendar-day-header">Mon</div>
                            <div class="calendar-day-header">Tue</div>
                            <div class="calendar-day-header">Wed</div>
                            <div class="calendar-day-header">Thu</div>
                            <div class="calendar-day-header">Fri</div>
                            <div class="calendar-day-header">Sat</div>
                            ${generateCalendarDays()}
                        </div>
                    </div>
                    <div class="mt-6">
                        <h4 class="card-title mb-4">Available Times - March <span id="selected-date">15</span></h4>
                        <div class="time-slots">
                            <button class="time-slot" onclick="selectTime(this, '9:00 AM')">9:00 AM</button>
                            <button class="time-slot" onclick="selectTime(this, '11:00 AM')">11:00 AM</button>
                            <button class="time-slot" onclick="selectTime(this, '1:00 PM')">1:00 PM</button>
                            <button class="time-slot" onclick="selectTime(this, '3:00 PM')">3:00 PM</button>
                            <button class="time-slot" onclick="selectTime(this, '5:00 PM')">5:00 PM</button>
                            <button class="time-slot" disabled>7:00 PM</button>
                        </div>
                    </div>
                </div>
                <div class="form">
                    <h3 class="card-title mb-6">Booking Details</h3>
                    <form id="booking-form" onsubmit="handleBookingSubmit(event)">
                        <div class="form-group">
                            <label class="form-label">Select Service</label>
                            <select class="form-select" name="service" required>
                                <option value="">Choose a service</option>
                                ${config.services.map(service => `
                                    <option value="${service.title.toLowerCase().replace(/\s+/g, '-')}">${service.title} - $${service.price} (${service.duration} min)</option>
                                `).join('')}
                            </select>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">First Name</label>
                                <input type="text" class="form-input" name="firstName" placeholder="Enter your first name" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Last Name</label>
                                <input type="text" class="form-input" name="lastName" placeholder="Enter your last name" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email Address</label>
                            <input type="email" class="form-input" name="email" placeholder="your.email@example.com" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Phone Number</label>
                            <input type="tel" class="form-input" name="phone" placeholder="(555) 123-4567" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Special Requests or Health Concerns</label>
                            <textarea class="form-textarea" name="notes" rows="4" placeholder="Please let us know about any health conditions, injuries, or special requests..."></textarea>
                        </div>
                        <div class="checkbox-group mb-6">
                            <input type="checkbox" class="checkbox" id="terms" name="terms" required>
                            <label for="terms" style="font-size: 0.875rem; color: var(--charcoal-600);">
                                I agree to the cancellation policy and terms of service
                            </label>
                        </div>
                        <button type="submit" class="btn-primary w-full" style="font-size: 1.125rem; padding: 1rem;">
                            <i class="fas fa-calendar-check"></i> Confirm Booking
                        </button>
                    </form>
                    <div class="card mt-6" style="padding: 1.5rem;">
                        <h4 class="card-title mb-3">Quick Contact</h4>
                        <div class="contact-item">
                            <i class="fas fa-phone" style="color: var(--sage-500); margin-right: 0.75rem;"></i>
                            <span>${config.contact.phone}</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-envelope" style="color: var(--sage-500); margin-right: 0.75rem;"></i>
                            <span>${config.contact.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Testimonials Section
function initializeTestimonials() {
    const testimonials = document.getElementById('testimonials');
    const config = window.businessConfig;
    
    testimonials.className = 'section section-bg-cream';
    testimonials.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Client <span class="text-accent">Testimonials</span></h2>
                <p class="section-subtitle">
                    Hear from our satisfied clients about their transformative massage experiences and journey to wellness.
                </p>
            </div>
            <div class="testimonials-carousel">
                <div class="testimonials-slides" id="testimonial-slides">
                    ${config.testimonials.map((slideTestimonials, slideIndex) => `
                        <div class="testimonials-slide">
                            <div class="grid grid-3">
                                ${slideTestimonials.map(testimonial => `
                                    <div class="testimonial-card">
                                        <div class="testimonial-header">
                                            <div class="testimonial-avatar">${testimonial.initials}</div>
                                            <div>
                                                <div class="testimonial-name">${testimonial.name}</div>
                                                <div class="testimonial-stars">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="testimonial-text">"${testimonial.review}"</p>
                                        <p class="testimonial-service">${testimonial.service}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="carousel-nav">
                    <button class="carousel-btn" onclick="changeTestimonialSlide(-1)">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="carousel-btn" onclick="changeTestimonialSlide(1)">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div class="stats">
                <div class="stat">
                    <div class="stat-number">${config.stats.happyClients}</div>
                    <div class="stat-label">Happy Clients</div>
                </div>
                <div class="stat">
                    <div class="stat-number">${config.stats.yearsExperience}</div>
                    <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat">
                    <div class="stat-number">${config.stats.massageTypes}</div>
                    <div class="stat-label">Massage Types</div>
                </div>
                <div class="stat">
                    <div class="stat-number">${config.stats.satisfactionRate}</div>
                    <div class="stat-label">Satisfaction Rate</div>
                </div>
            </div>
        </div>
    `;
    
    // Auto-rotate testimonials
    let currentSlide = 0;
    setInterval(() => {
        changeTestimonialSlide(1);
    }, 8000);
}

// Contact Section
function initializeContact() {
    const contact = document.getElementById('contact');
    const config = window.businessConfig;
    
    contact.className = 'section section-bg-white';
    contact.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Get In <span class="text-accent">Touch</span></h2>
                <p class="section-subtitle">
                    Ready to start your wellness journey? Contact us today to schedule your appointment or ask any questions about our services.
                </p>
            </div>
            <div class="grid grid-2">
                <div class="form">
                    <h3 class="card-title mb-6">Send Us a Message</h3>
                    <form id="contact-form" onsubmit="handleContactSubmit(event)">
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">First Name</label>
                                <input type="text" class="form-input" name="firstName" placeholder="Your first name" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Last Name</label>
                                <input type="text" class="form-input" name="lastName" placeholder="Your last name" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email Address</label>
                            <input type="email" class="form-input" name="email" placeholder="your.email@example.com" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Phone Number</label>
                            <input type="tel" class="form-input" name="phone" placeholder="(555) 123-4567">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Subject</label>
                            <select class="form-select" name="subject" required>
                                <option value="">Select a subject</option>
                                <option value="general">General Inquiry</option>
                                <option value="booking">Booking Question</option>
                                <option value="services">Service Information</option>
                                <option value="pricing">Pricing Question</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Message</label>
                            <textarea class="form-textarea" name="message" rows="5" placeholder="Tell us how we can help you..." required></textarea>
                        </div>
                        <button type="submit" class="btn-primary w-full" style="font-size: 1.125rem; padding: 1rem;">
                            <i class="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
                <div>
                    <div class="contact-info">
                        <h3 class="card-title mb-6">Contact Information</h3>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-details">
                                <h4>Address</h4>
                                <p>${config.contact.address.street}<br>${config.contact.address.city}, ${config.contact.address.state} ${config.contact.address.zip}</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-details">
                                <h4>Phone</h4>
                                <p>${config.contact.phone}</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <h4>Email</h4>
                                <p>${config.contact.email}</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-clock"></i>
                            </div>
                            <div class="contact-details">
                                <h4>Business Hours</h4>
                                <div class="hours-list">
                                    <p>Monday - Friday: ${config.hours.monday}</p>
                                    <p>Saturday: ${config.hours.saturday}</p>
                                    <p>Sunday: ${config.hours.sunday}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="map-placeholder">
                        <h3 class="card-title mb-6">Find Us</h3>
                        <div class="map-container" style="background-image: url('https://www.shutterstock.com/search/happy-customer-plumbing');">
                            <div class="map-overlay">
                                <i class="fas fa-map-marker-alt"></i>
                                <p style="font-weight: 500; color: var(--charcoal-800);">Interactive Map</p>
                                <p style="font-size: 0.875rem; color: var(--charcoal-600);">Click to view in Google Maps</p>
                            </div>
                        </div>
                    </div>
                    <div class="contact-info mt-6">
                        <h3 class="card-title mb-6">Follow Us</h3>
                        <div class="social-links">
                            <a href="${config.social.facebook}" class="social-link">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="${config.social.instagram}" class="social-link">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="${config.social.yelp}" class="social-link">
                                <i class="fab fa-yelp"></i>
                            </a>
                            <a href="${config.social.google}" class="social-link">
                                <i class="fab fa-google"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Footer Section
function initializeFooter() {
    const footer = document.getElementById('footer');
    const config = window.businessConfig;
    
    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>${config.businessName}</h3>
                    <p>Your journey to wellness starts here. Professional massage therapy in a tranquil, healing environment.</p>
                    <div class="social-links">
                        <a href="${config.social.facebook}" class="social-link">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="${config.social.instagram}" class="social-link">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="${config.social.yelp}" class="social-link">
                            <i class="fab fa-yelp"></i>
                        </a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Services</h4>
                    <ul class="footer-links">
                        ${config.services.slice(0, 5).map(service => `
                            <li><a href="#" data-scroll="services">${service.title}</a></li>
                        `).join('')}
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul class="footer-links">
                        <li><button data-scroll="about">About ${config.therapistName.split(' ')[0]}</button></li>
                        <li><button data-scroll="services">Our Services</button></li>
                        <li><button data-scroll="booking">Book Appointment</button></li>
                        <li><button data-scroll="contact">Contact Us</button></li>
                        <li><a href="#">Gift Certificates</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contact Info</h4>
                    <p><i class="fas fa-map-marker-alt" style="margin-right: 0.5rem;"></i>${config.contact.address.street}, ${config.contact.address.city}, ${config.contact.address.state}</p>
                    <p><i class="fas fa-phone" style="margin-right: 0.5rem;"></i>${config.contact.phone}</p>
                    <p><i class="fas fa-envelope" style="margin-right: 0.5rem;"></i>${config.contact.email}</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 ${config.businessName} ${config.tagline}. All rights reserved. | Licensed Massage Therapist</p>
            </div>
        </div>
    `;
}

// Calendar Functions
function generateCalendarDays() {
    let days = '';
    for (let i = 1; i <= 31; i++) {
        days += `<button class="calendar-day" onclick="selectDate(this, ${i})">${i}</button>`;
    }
    return days;
}

function selectDate(element, day) {
    document.querySelectorAll('.calendar-day').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
    document.getElementById('selected-date').textContent = day;
}

function selectTime(element, time) {
    document.querySelectorAll('.time-slot').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
    window.selectedTime = time;
}

function changeMonth(direction) {
    // Placeholder for month navigation
    console.log('Change month:', direction);
}

// Testimonial Carousel
let currentTestimonialSlide = 0;
function changeTestimonialSlide(direction) {
    const slides = document.getElementById('testimonial-slides');
    const totalSlides = window.businessConfig.testimonials.length;
    
    currentTestimonialSlide += direction;
    if (currentTestimonialSlide >= totalSlides) currentTestimonialSlide = 0;
    if (currentTestimonialSlide < 0) currentTestimonialSlide = totalSlides - 1;
    
    slides.style.transform = `translateX(-${currentTestimonialSlide * 100}%)`;
}

// Form Handlers
function handleBookingSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    if (!window.selectedTime) {
        alert('Please select an appointment time.');
        return;
    }
    
    const selectedDate = document.getElementById('selected-date').textContent;
    const config = window.businessConfig;
    
    // Create email with booking details
    const subject = 'Massage Booking Request';
    const body = `Hello,

I would like to book a massage appointment with the following details:

Service: ${data.service}
Date: March ${selectedDate}, 2024
Time: ${window.selectedTime}

Client Information:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}

Special Requests: ${data.notes || 'None'}

Please confirm this appointment at your earliest convenience.

Thank you!`;
    
    window.location.href = `mailto:${config.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    alert('Your booking request has been prepared! Your email client should open with the booking details.');
}

function handleContactSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const config = window.businessConfig;
    
    const subject = `Contact Form: ${data.subject}`;
    const body = `Hello,

You have received a new message from your website contact form:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject}

Message:
${data.message}

Please respond to this inquiry at your earliest convenience.`;
    
    window.location.href = `mailto:${config.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    alert('Thank you for your message! Your email client should open with your inquiry.');
    event.target.reset();
}

// Utility Functions
function scrollToBooking() {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

// Add bounce animation to hero chevron
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
            transform: translate3d(-50%, 0, 0);
        }
        40%, 43% {
            transform: translate3d(-50%, -8px, 0);
        }
        70% {
            transform: translate3d(-50%, -4px, 0);
        }
        90% {
            transform: translate3d(-50%, -2px, 0);
        }
    }
`;
document.head.appendChild(style);
