const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const path = './data.json';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isValidDate = (date) => {
    const startDate = moment('2019-01-01');
    const endDate = moment('2024-12-13');
    return date.isBetween(startDate, endDate, null, '[]');
};

const markCommit = async (date) => {
    const data = { date: date.toISOString() };
    await jsonfile.writeFile(path, data);
    
    const git = simpleGit();
    await git.add(path);
    await git.commit(date.toISOString(), { '--date': date.toISOString() });
};

const makeCommits = async (n) => {
    const git = simpleGit();

    for (let i = 0; i < n; i++) {
        const randomWeeks = randomInt(0, 54 * 4);
        const randomDays = randomInt(0, 6);
        const randomDate = moment('2019-01-01')
            .add(randomWeeks, 'weeks')
            .add(randomDays, 'days');

        if (isValidDate(randomDate)) {
            console.log(`Creating commit: ${randomDate.toISOString()}`);
            await markCommit(randomDate);
        } else {
            console.log(`Invalid date: ${randomDate.toISOString()}, skipping...`);
        }
    }

    console.log('Pushing all commits...');
    await git.push();
};

makeCommits(50000);
