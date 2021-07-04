/*
 * Calculating file hash
 * @author skitsanos, http://skitsanos.com
 * @version 1.0.20210704
 */

const crypto = require('crypto');
const fs = require('fs');

const fileHash = (filePath, algorithm = 'md5') => new Promise(resolve =>
{
    const hrstart = process.hrtime();

    const hash = crypto.createHash(algorithm);
    fs.createReadStream(filePath).on('data', data => hash.update(data))
      .on('end', () => resolve({
          hash: hash.digest('hex'),
          execTime: process.hrtime(hrstart)[1] / 1000000
      }));
});

//Calclulate hash for a file

(async () =>
{
    const hash = await fileHash('wildfly-22.0.0.Final.zip');
    console.log(hash);
})();
