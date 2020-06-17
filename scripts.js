function getInterest() {
    event.preventDefault();
    let principal = parseFloat(document.getElementById("investment-amount").value);
    let interestRate = parseFloat(document.getElementById("interest-rate").value);
    interestRate = interestRate / 100;
    let duration = document.getElementById("duration").value
    let newDuration = /.+months*$/.test(duration) ? parseFloat(duration.match(/\d/) / 12) : parseFloat(duration)
    let interest = principal * interestRate * newDuration;
    let amount = (principal + interest).toFixed(2);
    document.getElementById("interest").innerHTML = "Interest: " + interest.toFixed(2);
    document.getElementById("total").innerHTML = "Amount invested plus interest: " + amount;
}

document.getElementById('calculate').addEventListener("click", getInterest)