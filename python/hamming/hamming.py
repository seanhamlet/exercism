"""
hamming - Calculate the Hamming difference between two DNA strands
"""

def distance(dna_1, dna_2):
    if len(dna_1) != len(dna_2):
        raise ValueError('DNA strands not same length!')
    else:
        return sum([d1 != d2 for d1, d2 in zip(dna_1, dna_2)])
