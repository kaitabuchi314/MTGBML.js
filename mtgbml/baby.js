class Baby {
  constructor(mother, modifyAmount) {
    this.mother = mother;
    this.dna = new DNA([...mother.dna]); // Create a new instance of DNA with a copy of the mother's DNA array
    this.modifyDNA(modifyAmount);
  }

  modifyDNA(modifyAmount) {
    const dnaLength = this.dna.length;

    for (let i = 0; i < modifyAmount; i++) {
      const randomIndex = Math.floor(Math.random() * dnaLength); // Generate a random index
      const randomBase = getRandomBase(); // Generate a random DNA base

      this.dna[randomIndex] = randomBase; // Modify the DNA at the random index
    }
  }
}
