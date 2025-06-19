document.addEventListener("DOMContentLoaded", () => {
  const calcButton = document.querySelector("#calculator button");

  calcButton.addEventListener("click", () => {
    const amount = parseFloat(document.querySelector('#calculator input:nth-child(2)').value);
    const interest = parseFloat(document.querySelector('#calculator input:nth-child(3)').value);
    const years = parseFloat(document.querySelector('#calculator input:nth-child(4)').value);

    if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    const monthlyRate = interest / 100 / 12;
    const totalPayments = years * 12;
    const x = Math.pow(1 + monthlyRate, totalPayments);
    const monthly = (amount * x * monthlyRate) / (x - 1);

    if (isFinite(monthly)) {
      alert(`Your estimated monthly payment is $${monthly.toFixed(2)}`);
    } else {
      alert("Calculation error. Please check the values.");
    }
  });
});