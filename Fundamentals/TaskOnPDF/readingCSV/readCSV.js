const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('public_TypingActivity_export_2026-04-11_182310.csv')
  .pipe(csv())
  .on('data', (row) => {
    results.push(row);
  })
  .on('end', () => {

    const uniqueData = {};
    const finalResult = [];

    results.forEach(row => {
      const code = row.code;
      const level = row.word; // your last column (1,2,3,4)

      const key = `${code}-${level}`;

      if (!uniqueData[key]) {
        uniqueData[key] = true;

        finalResult.push({
          id: row.id,
          code: row.code,
          word: row.word
        });
      }
    });


    const headers = ['id', 'code', 'word'];
    const csvRows = [];

    csvRows.push(headers.join(','));

    finalResult.forEach(row => {
      const values = headers.map(h => row[h]);
      csvRows.push(values.join(','));
    });

    fs.writeFileSync('output.csv', csvRows.join('\n'));

    console.log(' Fixed CSV created');
  });