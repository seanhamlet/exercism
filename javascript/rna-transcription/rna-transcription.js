/*

rna-transcription - given a dna strand, return its RNA complement
                    (per RNA transcripton)

*/

var DnaTranscriber = function() {}

DnaTranscriber.prototype.toRna = function(dna) {
  // validate input, make sure it only matches GCTA characters
  var validDna = dna.match(/^[GCTA]+$/);
  if (!validDna) {
    throw new Error("Invalid input");
  }

  // dna to rna transcription object
  var transcription = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };

  var rna = '';

  // loop over dna nucleotides and transcribe into rna
  for (var nuc of dna) {
    rna += transcription[nuc];
  }

  return rna;
}

module.exports = DnaTranscriber;
