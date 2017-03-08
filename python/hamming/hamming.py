"""
hamming - Calculate the Hamming difference between two DNA strands
"""

def distance(dna_1, dna_2):
    if len(dna_1) != len(dna_2):
        raise ValueError('DNA strands not same length!')
    diff_list = []
    for i in range(len(dna_1)):
        if dna_1[i] != dna_2[i]:
            diff_list.append(dna_1[i])
    return len(diff_list)
