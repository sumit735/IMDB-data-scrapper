# IMDB-data-scrapper
This is a data scrapper of imdb made using node.js

DOCS->

requirements-> node.js

step 1 -> npm i (For installing / updating all node modules required to run this project)

step 2 -> open your terminal

step 3 -> node index.js get --url="url" "url" "url"

(run the node command)

As you can see we are separating each url with a space and wrapping it in a double quotes.

Output->


1-> Your urls divided into arrays

[
  'https://www.imdb.com/title/tt6468322/?ref_=hm_fanfav_tt_2_pd_fp1',
  'https://www.imdb.com/title/tt6751668/?ref_=hm_fanfav_tt_3_pd_fp1',
  'https://www.imdb.com/title/tt7286456/?ref_=hm_fanfav_tt_4_pd_fp1',
  'https://www.imdb.com/title/tt8579674/?ref_=hm_fanfav_tt_5_pd_fp1',
  'https://www.imdb.com/title/tt8367814/?ref_=hm_fanfav_tt_6_pd_fp1' 
]

2-> 
[  
  {
    Title: 'Money Heist',
    Rating: '8.5',
    releaseDate: 'TV Series (2017– )',
    summary: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.'
  },
  {
    Title: 'Parasite (2019)',
    Rating: '8.6',
    releaseDate: '8 November 2019 (USA)',
    summary: 'A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.'
  },
  {
    Title: 'Joker (2019)',
    Rating: '8.5',
    releaseDate: '4 October 2019 (USA)',
    summary: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.'
  },
  {
    Title: '1917 (2019)',
    Rating: '8.4',
    releaseDate: '10 January 2020 (USA)',
    summary: 'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.'
  },
  {
    Title: 'The Gentlemen (2019)',
    Rating: '8.0',
    releaseDate: '24 January 2020 (USA)',
    summary: 'An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an 
attempt to steal his domain out from under him.'
  }
]

3 -> There'll be a imdb.csv file in the same directory.. open that csv file to get the scraped data
