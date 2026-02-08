#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

#Option to set a different maximum number
if [[ ! -z $1 && $1 =~ ^[0-9]+$ ]]
then
  MAX_NUM=$1
else
  MAX_NUM=1000
fi

USER_MENU() {
  echo "Enter your username:"
  read USERNAME

  #Check if a name has been entered
  if [[ ! -z $USERNAME ]]
  then
    #Get user ID
    USER_ID=$($PSQL "SELECT user_id FROM users WHERE username='$USERNAME'")

    #Ceck if user exists
    if [[ -z $USER_ID ]]
    then
      #Add new user
      INSERT_USER_RESULT=$($PSQL "INSERT INTO users(username) VALUES('$USERNAME')")
      USER_ID=$($PSQL "SELECT user_id FROM users WHERE username='$USERNAME'")
      
      echo "Welcome, $USERNAME! It looks like this is your first time here."
    else
      #GET data from previous games
      IFS="|" read GAMES_PLAYED BEST_GAME <<< $($PSQL "SELECT COUNT(game_id), MIN(guesses) FROM games WHERE user_id = '$USER_ID'")

      echo "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."
    fi
  else
    #Display the menu again
    USER_MENU
  fi
}

GUESS_MENU() {
  SECRET_NUMBER=$(( $RANDOM %$MAX_NUM ))
  GUESSES=0

  echo "Guess the secret number between 1 and $MAX_NUM:"

  while [[ $USER_GUESS -ne $SECRET_NUMBER ]]
  do
    #Increment guess count
    (( GUESSES++ ))

    read USER_GUESS
    
    if [[ ! $USER_GUESS =~ ^[0-9]+$ ]]
    then
      echo "That is not an integer, guess again:"
    elif [[ $USER_GUESS -eq $SECRET_NUMBER ]]
    then
      echo "You guessed it in $GUESSES tries. The secret number was $SECRET_NUMBER. Nice job!"
    elif [[ $USER_GUESS -gt $SECRET_NUMBER ]]
    then
      echo "It's lower than that, guess again:"
    elif [[ $USER_GUESS -lt $SECRET_NUMBER ]]
    then
      echo "It's higher than that, guess again:"
    fi    
  done

  #Add game to DB
  INSERT_GAME_RESULT=$($PSQL "INSERT INTO games(user_id,secret_number,guesses) VALUES($USER_ID, $SECRET_NUMBER, $GUESSES)")
}

USER_MENU
GUESS_MENU