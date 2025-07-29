const CONFIG = {
  //  https://api.datamuse.com/words?rel_syn=WORD
  API: 'https://api.datamuse.com/words?',
  DEFAULT_AMOUNT: 10,
  TYPES: [
    {
      label: 'synonyms',
      key: 'rel_syn',
      icon: '🟰',
      color: '#1abc9c',
      description:
        'Words that mean the same or are closely related in meaning.',
    },
    {
      label: 'rhymes',
      key: 'rel_rhy',
      icon: '🎵',
      color: '#e67e22',
      description: 'Words that rhyme with the given word.',
    },
    {
      label: 'definitions',
      key: 'ml',
      icon: '📖',
      color: '#3498db',
      description:
        'Words that are semantically similar (based on meaning).',
    },
  ],
  DIFFICULTY_LEVEL: {
    easy: { label: 'easy', start: 20, end: Infinity, ans_amount: 25 },
    medium: { label: 'medium', start: 10, end: 19.99, ans_amount: 15 },
    hard: { label: 'hard', start: 3, end: 9.99, ans_amount: 8 },
    hardcore: { label: 'hardcore', start: 0, end: 2.99, ans_amount: 3 },
  },
};

export default CONFIG;
