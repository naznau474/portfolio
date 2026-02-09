// Меню для мобильных устройств
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Закрыть меню при клике на ссылку
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Анимация при прокрутке
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Наблюдаем за карточками
    const cards = document.querySelectorAll('.cv-card, .project-card');
    cards.forEach(card => {
        observer.observe(card);
    });
    
    // Динамический год в футере
    const yearSpan = document.querySelector('.copyright');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = yearSpan.textContent.replace('2024', currentYear);
    }
    
    // Простой пример "flip card" для компонентов компьютера
    const createFlipCardExample = () => {
        // Этот код можно использовать на отдельной странице с компонентами компьютера
        console.log("Flip card example ready");
    };
    
    createFlipCardExample();
});

// Простая игра "Угадай число" (Python концепция в JS)
function numberGuessingGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let gameOver = false;
    
    return {
        guess: function(number) {
            if (gameOver) return "Game over! Start a new game.";
            
            attempts++;
            
            if (number === secretNumber) {
                gameOver = true;
                return `Gratulerer! Du gjettet riktig på ${attempts} forsøk.`;
            } else if (number < secretNumber) {
                return "For lavt! Prøv igjen.";
            } else {
                return "For høyt! Prøv igjen.";
            }
        },
        getAttempts: function() {
            return attempts;
        },
        isGameOver: function() {
            return gameOver;
        },
        newGame: function() {
            const newSecret = Math.floor(Math.random() * 100) + 1;
            secretNumber = newSecret;
            attempts = 0;
            gameOver = false;
            return "Nytt spill startet! Gjett et tall mellom 1 og 100.";
        }
    };
}

// Пример использования игры
const game = numberGuessingGame();
console.log("Eksempel på spilllogikk:");
console.log(game.guess(50));
console.log(game.guess(75));
console.log(game.guess(63));

// Эффект параллакса для героя
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});