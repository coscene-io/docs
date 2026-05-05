# Cron

Cron syntax is used to schedule when automation actions should run. In coScene automation, Cron only describes when to trigger. The action to execute and the record inputs are determined by the trigger's associated action and record conditions.

## Cron syntax

Cron scheduling uses 5 fields separated by spaces:

```
# ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of the month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday)
# │ │ │ │ │
# * * * * *
```

:::tip
When creating a scheduled trigger, you also choose a time zone. The hour and date fields in the Cron expression are interpreted in that selected time zone. For example, `0 9 * * 1` with `Asia/Shanghai` runs every Monday at 09:00 Beijing time.
:::

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

## Common Notes

- coScene automation uses 5-field Cron expressions and does not include a seconds field.
- The Cron expression itself does not include a command to execute. The action is configured in the trigger's associated action.
- Scheduled triggers can be combined with record conditions to restrict which records are matched each time the schedule fires.
