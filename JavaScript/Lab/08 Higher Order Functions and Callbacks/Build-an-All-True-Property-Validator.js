function truthCheck(collection, pre) {
  return collection.every(item => item[pre]);
}

const testValue = truthCheck([
  {name: "Quincy", role: "Founder", isBot: false},
  {name: "Naomi", role: "", isBot: false}, 
  {name: "Camperbot", role: "Bot", isBot: true}
], "isBot");
console.log(testValue)