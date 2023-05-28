class Baby {
  constructor(randomDNAFunction) {
    this.dna = new DNA(randomDNAFunction());
  }
}
