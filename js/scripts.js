// Movie, time, Age, price
let price = function (movie, age, time) {
  let cost = parseInt(movie.value) * parseFloat(age.value) * parseFloat(time.value);

  const roundToHundredth = (value) => {
    return Number(value.toFixed(2));
  };

  return roundToHundredth(cost);

}

let listTicket = function (movie, time, age, cost) {
  let p = document.createElement("p");
  p.innerText = movie[movie.selectedIndex].innerHTML + " -- " + time[time.selectedIndex].innerHTML + " -- " + age[age.selectedIndex].innerHTML + " -- " + "$" + cost;
  document.querySelector("#tickets").append(p);
  console.log(p);
}

let totalCost = function (total) {
  let totalCost = 0;
  total.forEach(element => {
    totalCost += parseFloat(element)
  });

  const roundToHundredth = (value) => {
    return Number(value.toFixed(2));
  };

  return roundToHundredth(totalCost);

}

function numberOfTickets(movie, time, age, cost) {
  const h1 = document.querySelector("h1");
  let total = [];
  let number = document.getElementById("quantity").value;

  for (i = 0; i < number; i++) {

    listTicket(movie, time, age, cost)
    total.push(cost);
  }
  h1.innerText = "Total: $" + totalCost(total);
}

window.onload = function () {
  let movieEl = document.getElementById("movie");
  let ageEl = document.getElementById("age");
  let timeEl = document.getElementById("time");
  const button = document.querySelector("#button");

  // let total = [];
  button.onclick = function () {

    // listTicket(movieEl, ageEl, timeEl, price(movieEl, ageEl, timeEl));
    numberOfTickets(movieEl, ageEl, timeEl, price(movieEl, ageEl, timeEl));

  }
}