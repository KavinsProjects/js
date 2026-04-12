const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('public_TypingActivity_export_2026-04-11_182310.csv')
  .pipe(csv())
  .on('data', (row) => {
    results.push(row);
  })
  .on('end', () => {

    
    results.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    
    const firstData = {};

    results.forEach(row => {
      const code = row.code;

      if (!firstData[code]) {
        firstData[code] = {
          id: row.id,
          word: row.word,
          createdAt: row.createdAt
        };
      }
    });

    const finalResult = Object.values(firstData);

    
    const headers = ['id', 'word', 'createdAt'];
    const csvRows = [];

    
    csvRows.push(headers.join(','));

    
    finalResult.forEach(row => {
      const values = headers.map(header => row[header]);
      csvRows.push(values.join(','));
    });

    const csvData = csvRows.join('\n');

    
    fs.writeFileSync('output.csv', csvData);

    console.log(' CSV file saved as output.csv');
  });