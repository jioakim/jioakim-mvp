# jioakimMVP
A repo to store my MVP Project
Random Name and Place Generator, with the ability to add and delete records
The initial idea is to build a full stack app that will generate ranom names and places against some user provided input.
The goal to provide some kind of correlation between the users input and the ouput of the application.
The initial architecture of the project is as follows:
-> a database (in MongoDB?) that has 3 collections: Names, Middle Names, Places
-> a router based in Node or Express to process the submit from user
-> front end aiming for REACT
-> Some kind of logic to produce funny outputs based on user inputs:
  -> if input is number
  -> if input is Name
  -> if input is Day
  -> if input asks question
  -> length of the input
  -> if input contains strange symbols
  -> if input contains specific words
  -> if input is random words not adhering to any other category


