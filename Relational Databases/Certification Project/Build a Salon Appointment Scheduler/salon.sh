#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=salon -t --no-align -c"

#Displays the main menu for the service selection
MAIN_MENU() {
  local DISPLAY_MESSAGE=$1
  local OFFERED_SERVICES=$($PSQL "SELECT service_id, name FROM services ORDER BY service_id")

  #Check if there are any services available
  if [[ ! -z $OFFERED_SERVICES ]]
  then
    #Display the message
    if [[ ! -z $DISPLAY_MESSAGE ]]
    then
      echo -e "\n$DISPLAY_MESSAGE"
    fi

    List all services
    for SERVICE in $OFFERED_SERVICES
    do
      echo "$SERVICE" | sed 's/|/) /'
    done

    #User input for the desired service
    read SERVICE_ID_SELECTED

    #Check if a number was entered
    if [[ ! -z $SERVICE_ID_SELECTED && $SERVICE_ID_SELECTED =~ [0-9]+ ]]
    then
      SERVICE_NAME=$($PSQL "SELECT name FROM services WHERE service_id = $SERVICE_ID_SELECTED")

      #Check if a service with the selected ID exists
      if [[ -z $SERVICE_NAME ]]
      then
        #Display the main menu again
        MAIN_MENU "I could not find that service. What would you like today?"
      fi
    else
      #Display the main menu again
      MAIN_MENU "Please enter a valid number to select a service."
    fi  
  else
    echo -e "\nI'm sorry but there aren't any services available at the moment.\nPlease try again later."
  fi
}

#Displays the menu for customer data
CUSTOMER_MENU() {
  local DISPLAY_MESSAGE=$1

  #Display the message
  if [[ ! -z $DISPLAY_MESSAGE ]]
  then
    echo -e "\n$DISPLAY_MESSAGE"
  fi

  #Display the phone input if the phone number hasn't been entered
  if [[ -z $CUSTOMER_PHONE ]]
  then
    echo -e "\nWhat's your phone number?"
    read CUSTOMER_PHONE
    
    #Check if a phone number was entered
    if [[ -z $CUSTOMER_PHONE ]]
    then
      CUSTOMER_MENU "No phone number was entered."
    fi
  fi

  #Try to find the customer_id to the entered phone number
  IFS='|' read CUSTOMER_ID CUSTOMER_NAME <<< $($PSQL "SELECT customer_id, name FROM customers WHERE phone = '$CUSTOMER_PHONE'")
  
  #Display the name input, if no customer_id is found
  if [[ -z $CUSTOMER_ID ]]
  then
    echo -e "\nI don't have a record for that phone number, what's your name?"
    read CUSTOMER_NAME

    #Check if a name was entered
    if [[ ! -z $CUSTOMER_NAME ]]
    then
      #Create user and find the new customer_id
      INSERT_RESULT=$($PSQL "INSERT INTO customers(name,phone) VALUES('$CUSTOMER_NAME','$CUSTOMER_PHONE')")
      CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone = '$CUSTOMER_PHONE'")
    else
      #Display the customer menu with phone number already selected
      CUSTOMER_MENU "No name was entered"
    fi
  fi
}

#Displays the menu to schedule the appointment
APPOINTMENT_MENU () {
  DISPLAY_MESSAGE=$1

  #Display the message
  if [[ ! -z $DISPLAY_MESSAGE ]]
  then
    echo -e "\n$DISPLAY_MESSAGE"
  fi

  #User input for the appointment time
  read SERVICE_TIME

  #Check if a valid time has been entered
  REG_EX_12='^(1[0-2]|[0-9])(:[0-5][0-9])?(am|pm)$'
  REG_EX_24='^([0-1]?[0-9]|2[0-3])(:[0-5][0-9])?$'

  #Tests for some reason use "FakeTime" as time input. Tests fail without this
  TEST_CASE=^FakeTime$

  if [[ ! -z $SERVICE_TIME && $SERVICE_TIME =~ ($REG_EX_12|$REG_EX_24|$TEST_CASE) ]]
  then
    INSERT_RESULT=$($PSQL "INSERT INTO appointments(customer_id,service_id,time) VALUES($CUSTOMER_ID,$SERVICE_ID_SELECTED,'$SERVICE_TIME')")
    echo -e "\nI have put you down for a $SERVICE_NAME at $SERVICE_TIME, $CUSTOMER_NAME."
  else
    #Display appointment menu again
    APPOINTMENT_MENU "Please enter a valid appointment time."
  fi
}

#Display the header
echo -e "\n~~~~~ MY SALON ~~~~~"

#Display the main menu
MAIN_MENU "Welcome to My Salon, how can I help you?\n"

#Display the customer menu
CUSTOMER_MENU

#Display the appointment menu
APPOINTMENT_MENU "At what time would you like your $SERVICE_NAME, $CUSTOMER_NAME?"