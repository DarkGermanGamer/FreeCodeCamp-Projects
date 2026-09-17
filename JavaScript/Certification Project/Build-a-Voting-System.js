const poll = new Map();

/**
 * Adds an option to the poll
 * @param {string} option: Option to add to the poll
 * @returns {string}: Message about the result
 */
function addOption(option) {
  if(!option) {
    return `Option cannot be empty.`;
  }

  if(!poll.has(option)) {
    poll.set(option, new Set());

    return `Option "${option}" added to the poll.`;
  }
  else {
    return `Option "${option}" already exists.`;
  }
}

/**
 * Casts a vote for the specified option as the specified voter
 * @param {string} option: Option to vote for
 * @param {int} voterId: Id of the voter
 * @returns {string}: Message about the result
 */
function vote(option, voterId) {
  if(!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  else {
    let votes = poll.get(option);

    if(votes.has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`;
    }
    else {
      votes.add(voterId);

      return `Voter ${voterId} voted for "${option}".`;
    }
  }
}

/**
 * Returns the results of the vote
 * @returns {string}: Formatted string, displaying the voting results
 */
function displayResults() {
  let resultMsg = "Poll Results:";

  poll.forEach((value, key) => {
    resultMsg += `\n${key}: ${value.size} votes`;
  });

  return resultMsg;
}

addOption("David Tennant");
addOption("Matt Smith");
addOption("Peter Capaldi");

vote("David Tennant", 1);
vote("Matt Smith", 1);
vote("David Tennant", 2);

console.log(displayResults());