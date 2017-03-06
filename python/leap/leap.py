"""
leap - Given a year, report if it is a leap year.

The tricky thing here is that a leap year in the
Gregorian calendar occurs:

on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400
"""

def is_leap_year(year):
    divisible_by_4   = year % 4 == 0
    divisible_by_100 = year % 100 == 0
    divisible_by_400 = year % 400 == 0
    return (divisible_by_4 and not divisible_by_100) or divisible_by_400
