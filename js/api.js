import CONFIG from './config.js';

class AJAX {
  async fetchRandomWordObj(letter) {
    try {
      const res = await fetch(`${CONFIG.API}sp=${letter}*&md=f&max=1`);
      const [obj] = await res.json();
      return obj;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Fetches a list of words from the API based on the specified type and word.
   *
   * @param {string} type - The type of word relationship (e.g., 'rel_syn' for synonyms).
   * @param {string} word - The word to find related words for.
   * @param {number} [amount] - The maximum number of results to fetch.
   * @returns {Promise<WordData[]>} A promise that resolves to an array of related words.
   * @throws Will throw an error if the fetch operation fails.
   */
  async fetchWordsByType(type, word, diffi) {
    try {
      const res = await fetch(
        `${CONFIG.API}${type}=${word}&md=f&max=${diffi.ans_amount}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      throw err;
    }
  }
}

export default new AJAX();
