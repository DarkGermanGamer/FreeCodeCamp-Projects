def resolution_streak(days):
    walkGoal = 10000
    screenGoal = 120
    readGoal = 5

    streak = 0

    for dayResult in days:
        steps,screenTime,pagesRead = dayResult

        if(
            steps < walkGoal 
            or screenTime > screenGoal 
            or pagesRead < readGoal
        ):
            break

        streak += 1

    if streak == len(days): 
        return f"Resolution on track: {streak} day streak."
    else:
        return f"Resolution failed on day {streak + 1}: {streak} day streak."