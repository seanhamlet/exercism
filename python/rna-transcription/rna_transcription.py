"""
rna_transcription - Given a DNA strand, return its RNA complement
                    (per RNA transcription).
"""

def to_rna(dna):
    complement = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    }

    # validate input (only contains GCTA)
    valid = set('GCTA')

    if set(dna) <= valid:
        return ''.join([complement[nuc] for nuc in dna])
    else:
        return ''
