require('./database');
const app = require ('./app');

async function main () {
    await app.listen(app.get('5500'));
}


main();