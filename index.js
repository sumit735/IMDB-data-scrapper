const request = require("request-promise");
const cheerio = require("cheerio");
const json2csv = require("json2csv").Parser;
const fs = require("fs");
const yargs = require('yargs');

const imdbDataGenerator = async (urls) => {
    console.log(urls);
    let imdbData = [];
    for (let movie of urls) {
        const response = await request({
            uri: movie,
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7"
            },
            gzip: true
        })

        let $ = cheerio.load(response);

        let Rating = $('div[class="ratingValue"] > strong > span').text();
        let Title = $('div[class="title_wrapper"] > h1').text().trim();
        let releaseDate = $('a[title="See more release dates"]').text().trim();
        let summary = $('div[class="summary_text"]').text().trim();

        imdbData.push({
            Title,
            Rating,
            releaseDate,
            summary
        });
    }
    console.log(imdbData);
    const j2cp = new json2csv();
    const csv = j2cp.parse(imdbData);

    fs.writeFileSync("./imdb.csv", csv, "utf-8");
};

yargs.command({
    command: 'get',
    describe: 'url of movie or series',
    builder: {
        url: {
            describe: 'Movie or series url to get details. For getting result of multiple movies, write each url with a double quote separating with a space. For example-> node index.js get --url="https://www.imdb.com/title/tt8228288/?ref_=hm_fanfav_tt_1_pd_fp1"  "https://www.imdb.com/title/tt8228288/?ref_=hm_fanfav_tt_1_pd_fp1"',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => imdbDataGenerator(argv.url)
})
yargs.array('url');
yargs.parse();