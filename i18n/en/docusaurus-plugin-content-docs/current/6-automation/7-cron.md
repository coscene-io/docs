# Cron

Cron syntax is used to schedule when actions should run.

## Cron syntax

Cron scheduling uses a series of five numbers, separated by spaces:

```
# ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of the month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday)
# │ │ │ │ │
# │ │ │ │ │
# │ │ │ │ │
# * * * * * <command to execute>
```

In cron syntax, the asterisk (\*) means ’every,’ so the following cron strings are valid:

- Run once an hour at the beginning of the hour: `0 * * * *`
- Run once a day at midnight: `0 0 * * *`
- Run once a week at midnight on Sunday morning: `0 0 * * 0`
- Run once a month at midnight of the first day of the month: `0 0 1 * *`
- Run once a month on the 22nd: `0 0 22 * *`
- Run once a year at midnight of 1 January: `0 0 1 1 *`
- Run twice a month at 3 AM, on the 1st and 15th of the month: `0 3 1,15 * *`

## Cron examples

```
# Run at 7:00pm every day:
0 19 * * *

# Run every minute on the 3rd of June:
* * 3 6 *

# Run at 06:30 every Friday:
30 6 * * 5
```
