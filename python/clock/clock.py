"""
clock - create clock independent of date
"""

import math

class Clock:
    def __init__(self, hours, minutes):
        self.hours = (hours + math.floor(minutes / 60)) % 24
        self.minutes = minutes % 60

    # returns string representation of object
    def __str__(self):
        return "{:02d}:{:02d}".format(self.hours, self.minutes)

    # define equality between two objects
    def __eq__(self, other):
        return self.hours == other.hours and self.minutes == other.minutes

    # adds minutes returns new clock object
    def add(self, minutes_to_add):
        return Clock(self.hours, self.minutes + minutes_to_add)
