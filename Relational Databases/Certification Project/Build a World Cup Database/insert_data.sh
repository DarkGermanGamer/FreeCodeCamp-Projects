#! /bin/bash

if [[ $1 == "test" ]]
then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi

# Do not change code above this line. Use the PSQL variable above to query your database.

#Reset tables
RESET_RESULT=$($PSQL "TRUNCATE teams, games")
echo $RESET_RESULT

GET_TEAM_ID() {
  if [[ ! -z $1 ]]
  then
    #Try to select team ID
    TEAM_NAME=$1
    TEAM_ID=$($PSQL "SELECT team_id FROM teams WHERE name = '$TEAM_NAME'")

    #If team doesn't exist, insert it as new team, then select the new ID
    if [[ -z $TEAM_ID ]]
    then
      INSERT_TEAM_RESULT=$($PSQL "INSERT INTO teams(name) VALUES('$TEAM_NAME')")
      TEAM_ID=$($PSQL "SELECT team_id FROM teams WHERE name = '$TEAM_NAME'")
    fi
    
    echo $TEAM_ID
  fi
}

cat ./games.csv | while IFS=',' read YEAR ROUND WINNER OPPONENT WINNER_GOALS OPPONENT_GOALS
do
  if [[ $YEAR != 'year' ]]
  then
    #Get team IDs
    WINNER_ID=$(GET_TEAM_ID "$WINNER")
    OPPONENT_ID=$(GET_TEAM_ID "$OPPONENT")

    #Insert games
    INSERT_GAME_RESULT=$($PSQL "INSERT INTO games(year, round, winner_id, opponent_id, winner_goals, opponent_goals) 
      VALUES($YEAR, '$ROUND', $WINNER_ID, $OPPONENT_ID, $WINNER_GOALS, $OPPONENT_GOALS)"
    )
    echo "$YEAR - $ROUND: $WINNER vs. $OPPONENT ($WINNER_GOALS:$OPPONENT_GOALS) created"
  fi
done