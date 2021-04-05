/* eslint-disable no-plusplus */
const generateTeams = (n) => {
  const num = n || 20;
  const teams = [];
  for (let i = 0; i < num; i++) {
    teams.push({
      id: i,
      name: ['aaaaa', 'dddd', 'cccccc', 'zzzzzz'][Math.floor(Math.random() * 4)],
      description: 'bbbbb',
      type: ['real', 'fantasy'][Math.floor(Math.random() * 2)],
      website: 'some website',
      tags: ['a', 'a', 'a', 'a', 'a', 'a'],
    });
  }

  return teams;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  generateTeams,
};
