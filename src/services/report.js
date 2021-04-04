import csv from 'csv-parser';
import fs from 'fs';

export default {


    fastqcSumary: (input, callback) => {
        let headers = ['status','module','library']
        let report = []
        fs.createReadStream(input)
        .on('error', () => {
           return callback('ERROR PARSE SUMARY', null)
        })
        .pipe(csv({ separator: '\t', headers }))
        .on('data', (data) => report.push(data))
        .on('end', () => {
            return callback(null, report)
        });
    },

    fastqcData: (input, callback ) => {
        let data = fs.readFileSync(input,'utf8')
        let lines = data.split('\n')
        let headers = ['measure','value']
        let statistics = lines.slice(3,10)
        if(data){
            return callback(null, statistics.map(line => {
                let data = line.split('\t');
                return headers.reduce((obj, nextKey, index) => {
                    obj[nextKey] = data[index];
                    return obj;
                }, {});
            }))
        }else{
            return callback('ERROR fastqData', null)
        }
        /* let lines = file.split('\n')
        let statistics = lines.slice(3,10)
        let headers = ['measure','value']
        let report = []
        fs.createReadStream(statistics)
        .on('error', () => {
           return callback('ERROR PARSE DATA', null)
        })
        .pipe(csv({ separator: '\t', headers }))
        .on('data', (data) => report.push(data))
        .on('end', () => {
            return callback(null, report)
        }); */
        
    } 
}