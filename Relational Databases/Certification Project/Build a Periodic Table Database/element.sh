#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=periodic_table -t --no-align -c"

if [[ ! -z $1 ]]
then
  if [[ $1 =~ ^[0-9]+$ ]]
  then
    CONDITION="atomic_number = $1"
  else
    CONDITION="symbol = '$1' OR name = '$1'"
  fi

  ELEMENT=$($PSQL "
    SELECT atomic_number, name, symbol, type, atomic_mass, melting_point_celsius, boiling_point_celsius FROM elements 
    INNER JOIN properties USING (atomic_number)
    INNER JOIN types USING (type_id)
    WHERE $CONDITION
  ") 

  if [[ ! -z $ELEMENT ]]
  then  
    echo $ELEMENT | while IFS='|' read ELEMENT_AT_NR ELEMENT_NAME ELEMENT_SYMBOL ELEMENT_TYPE ELEMENT_AT_MASS ELEMENT_MELT ELEMENT_BOIL
    do
      echo "The element with atomic number $ELEMENT_AT_NR is $ELEMENT_NAME ($ELEMENT_SYMBOL). It's a $ELEMENT_TYPE, with a mass of $ELEMENT_AT_MASS amu. $ELEMENT_NAME has a melting point of $ELEMENT_MELT celsius and a boiling point of $ELEMENT_BOIL celsius."
    done
  else
    echo 'I could not find that element in the database.'
  fi
else
  echo "Please provide an element as an argument."
fi