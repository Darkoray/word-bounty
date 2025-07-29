import Game from './game.js';
import CONFIG from './config.js';

// App state
const state = {
  currentWord: '',
  answerWords: [],
  answerAvailable: 0,
  currentDifficulty: 0,

  currentType: CONFIG.TYPES[0].label,
  typeKey: CONFIG.TYPES[0].key,

  difficultyObj: CONFIG.DIFFICULTY_LEVEL.easy,
  difficultyLevel: CONFIG.DIFFICULTY_LEVEL.easy.label,
  difficultyArr: [],
};

const controlDOM = async function () {
  try {
    //        TEMPORARY         //
    ({ label: state.currentType, key: state.typeKey } = CONFIG.TYPES[0]);
    state.difficultyObj = CONFIG.DIFFICULTY_LEVEL.easy;
    state.difficultyLevel = state.difficultyObj.label;
  } catch (err) {
    console.error(err);
  }
};

const controlGame = async function () {
  try {
    ({ word: state.currentWord, tag: state.currentDifficulty } =
      await Game.getRandomWord(state.difficultyObj));

    state.answerWords = await Game.getAnswerWords(
      state.typeKey,
      state.currentWord,
      state.difficultyObj
    );
    state.answerAvailable = state.answerWords.length;
    state.difficultyArr = Game.getDifficultyArr();
  } catch (err) {
    throw err;
  }
};

// Initialization
let isLoading = false;
const init = async function () {
  try {
    if (isLoading) return;
    isLoading = true;

    await controlDOM();
    await controlGame();

    console.log(state);
  } catch (err) {
    console.error('💥Error: ' + err.message);
  } finally {
    isLoading = false;
  }
};
await init();
