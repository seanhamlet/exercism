"""
word_count - Given a phrase, count the occurrences
             of each word in that phrase.
"""

import re

def word_count(sentence):
    # replace non alphanumeric or hyphen with space
    # then split at space into list
    words = re.sub("\W|\_", " ",  sentence.lower()).split()

    # make unique word list
    words_unique = set(words)

    # create dict with words as keys and set count to zero
    count = dict((word,0) for word in words_unique)

    # then loop through each word and count how many there are in list
    for word in words:
        count[word] += 1

    return count
