/*
 * Calculating file hash
 * @author skitsanos, http://skitsanos.com
 * @version 1.0.20210704
 */

const crypto = require('crypto');
const fs = require('fs');

const fileHash = (filePath, algorithm = 'md5') => new Promise(resolve =>
{
    const hash = crypto.createHash(algorithm);
    fs.createReadStream(filePath).on('data', data => hash.update(data)).on('end', () => resolve(hash.digest('hex')));
});


(async () =>
{
    const hash = await fileHash('package.json');
    console.log(hash);
})();
