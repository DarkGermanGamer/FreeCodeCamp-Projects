function oddOrEvenDay(timestamp) {
  let date = new Date(timestamp);
  let day = date.getUTCDate();

  if(day % 2 == 0) {
    return "even";
  }
  else {
    return "odd";
  }
}