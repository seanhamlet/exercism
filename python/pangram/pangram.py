"""
pangram - determine if sentence is a pangram
(uses every letter of alphabet)
"""

def is_pangram(sentence):
    alpha = list('abcdefghijklmnopqrstuvwxyz');
    return all(x in sentence.lower() for x in alpha)
