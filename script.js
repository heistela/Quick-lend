document.addEventListener("DOMContentLoaded", () => {
  const calcBtn = document.getElementById("calcBtn");
  const resultBox = document.getElementById("calcResult");

  calcBtn.addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("loanAmount").value);
    const rate = parseFloat(document.getElementById("interestRate").value);
    const term = parseFloat(document.getElementById("loanTerm").value);

    if (isNaN(amount) || isNaN(rate) || isNaN(term)) {
      resultBox.innerHTML = "❌ Please enter valid numbers in all fields.";
      return;
    }

    const monthlyRate = rate / 100 / 12;
    const totalPayments = term * 12;
    const x = Math.pow(1 + monthlyRate, totalPayments);
    const monthly = (amount * x * monthlyRate) / (x - 1);

    if (isFinite(monthly)) {
      resultBox.innerHTML = `✅ Estimated Monthly Payment: <strong>£${monthly.toFixed(2)}</strong>`;
    } else {
      resultBox.innerHTML = "❌ Calculation error. Please check your inputs.";
    }
  });

  // Feature Animation
  function animateFeaturesOnScroll() {
    const section = document.getElementById('features');
    const cards = document.querySelectorAll('.feature-card');
    if (!section) return;

    const triggerPoint = window.innerHeight * 0.85;
    function checkScroll() {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerPoint) {
        cards.forEach((card, i) => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
          card.style.transition = `all 0.4s ease ${i * 0.2}s`;
        });
        window.removeEventListener("scroll", checkScroll);
      }
    }

    cards.forEach(card => {
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
    });

    window.addEventListener("scroll", checkScroll);
  }
  animateFeaturesOnScroll();

  // Stat Counter Animation
  function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 100;

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 25);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }

  window.addEventListener("scroll", () => {
    const statSection = document.getElementById('stats');
    if (statSection.getBoundingClientRect().top < window.innerHeight * 0.85) {
      animateCounters();
    }
  });
});