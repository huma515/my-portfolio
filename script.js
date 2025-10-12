
        (function () {
            // ⚠️ Replace with your actual PUBLIC key (NOT private)
            emailjs.init("K_fOqooodxbESTF1s");
        })();

        document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault();

            // Add current time
            this.time.value = new Date().toLocaleString();

            // ⚠️ Replace with your own EmailJS service and template IDs
            emailjs.sendForm("service_eu40yvl", "template_f0wwkdj", this)
                .then(() => {
                    Swal.fire({
                        icon: "success",
                        title: "✅ Message Sent!",
                        text: "Your message has been delivered successfully.",
                        showConfirmButton: false,
                        timer: 2500,
                        background: "#1f2937",
                        color: "#fff"
                    });
                    this.reset();
                })
                .catch((error) => {
                    console.error("Error:", error);
                    Swal.fire({
                        icon: "error",
                        title: "❌ Failed to Send",
                        text: "Something went wrong. Please try again later.",
                        confirmButtonColor: "#d33",
                        background: "#1f2937",
                        color: "#fff"
                    });
                });
        });
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark')) {
                body.classList.remove('dark');
                body.classList.add('light');
                themeIcon.className = 'fas fa-sun';
            } else {
                body.classList.remove('light');
                body.classList.add('dark');
                themeIcon.className = 'fas fa-moon';
            }
        });

        // Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Animate progress bars
                    const progressBars = entry.target.querySelectorAll('.progress-bar');
                    progressBars.forEach(bar => {
                        setTimeout(() => {
                            bar.classList.add('animate');
                        }, 500);
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Particles Animation
        function createParticles(containerId, count = 20) {
            const container = document.getElementById(containerId);
            if (!container) return;

            for (let i = 0; i < count; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                container.appendChild(particle);
            }
        }

        createParticles('particles', 15);
        createParticles('contactParticles', 10);

        // Scroll to Top Button
        const scrollTopBtn = document.getElementById('scrollTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.transform = 'translateY(0)';
            } else {
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.transform = 'translateY(10px)';
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Contact Form
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();

            // Show success message
            const button = e.target.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent!';
            button.style.backgroundColor = '#10b981';

            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.backgroundColor = '';
                e.target.reset();
            }, 3000);
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Wave animation for emoji
        const wave = document.querySelector('.wave');
        if (wave) {
            setInterval(() => {
                wave.style.transform = 'rotate(20deg)';
                setTimeout(() => {
                    wave.style.transform = 'rotate(-10deg)';
                    setTimeout(() => {
                        wave.style.transform = 'rotate(0deg)';
                    }, 150);
                }, 150);
            }, 3000);
        }
    // <script>(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'989e59df91459083',t:'MTc1OTY4MjMyNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();</script>
