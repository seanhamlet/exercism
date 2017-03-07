"""
clock - create clock independent of date
"""

import math

class Clock:

    def __init__(self, hours, minutes):
        # convert time to minutes
        minutes = hours * 60 + minutes
        self.set_hours_minutes(minutes)

    # adds minutes and returns str of time
    def add(self, minutes_to_add):
        # convert current time to minutes with addition of new minutes
        minutes = self.hours * 60 + self.minutes + minutes_to_add
        self.set_hours_minutes(minutes)
        return self.make_time_string(self.hours,self.minutes)

    def set_hours_minutes(self, minutes):
        self.hours = math.floor(minutes / 60) % 24
        self.minutes = minutes % 60

    # returns string representation of object
    def __str__(self):
        return self.make_time_string(self.hours,self.minutes)

    # define equality between two objects
    def __eq__(self, other):
        return self.hours == other.hours and self.minutes == other.minutes

    # defines time string
    @staticmethod
    def make_time_string(hours, minutes):
        return "{:02d}:{:02d}".format(hours,minutes)
