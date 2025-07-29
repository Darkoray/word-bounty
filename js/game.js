import AJAX from './api.js';

class Game {
  #data;
  #tag;
  #randomWordObj;

  async getRandomWord(diffi) {
    try {
      const letters = 'abcdefghijklmnopqrstuvwxyz';

      do {
        const randomIndex = Math.floor(Math.random() * letters.length);
        const randomLetter = letters[randomIndex];

        this.#randomWordObj = await AJAX.fetchRandomWordObj(randomLetter);

        const { tags } = this.#randomWordObj;
        this.#tag = +tags[0].replace('f:', '');
      } while (!(diffi.start <= this.#tag && this.#tag <= diffi.end));

      const { word } = this.#randomWordObj;

      return { word, tag: this.#tag };
    } catch (err) {
      throw err;
    }
  }

  async getAnswerWords(type, word, diffi) {
    try {
      this.#data = await AJAX.fetchWordsByType(type, word, diffi);
      const words = this.#data.map(entry => entry.word);
      return words;
    } catch (err) {
      throw err;
    }
  }

  getDifficultyArr() {
    try {
      const difficulty = this.#data
        .map(obj => obj.tags)
        .map(arr => arr[0])
        .map(str => str.replace('f:', ''))
        .map(num => +num);

      return difficulty;
    } catch (err) {
      throw err;
    }
  }
}

// NOTE: need to get the state
// while (
// ) {}

export default new Game();
