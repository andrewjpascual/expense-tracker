
# React Expense Tracker

My MERN stack expense tracker that supports CRUD capabilities with mobile and web responsiveness.

> Note : This is hosted through a free heroku account so the application may take some time to load.

Link: https://apexpenses.herokuapp.com

## Table of contents

-  [About](#about)
-  [Technologies](#technologies)
-  [Features](#features)
-  [Challenges](#challenges)
-  [Inspiration and Ideas Learned](#inspiration and learned concepts)
-  [To-Do](#future to-do)

## About

This was my first project that involves the full MERN (MongoDB , Express, React, NodeJS) stack. With this application, I improved my knowledge and skills with CRUD based apps and learned about MongoDB Atlas and ChartJS, while I concurrently reinforced knowledge on React, NodeJS, Express, and deployment to Heroku.

## Technologies

Project is created with:

-  MongoDB
-  Express
-  React
-  NodeJS
-  ChartJS
-  Wireframe (as layout guide)
-  Heroku (free tier account)

## Features

- Add a Transaction :
  - Each transaction includes details, amount, and category
  - Alert for any invalid transaction (Doesn't include details / amount)

- Interactive Visual Chart :
  - User can see where the majority of 
  - You can click a category to remove it from the chart
  - When adding / deleting a transaction, the chart will update automatically

- History :
  - Keeps a record of the transaction history
  - Can delete transactions if needed
  - If there are too many records, the history list becomes a scrollable window

## Challenges

There were a few challenges during the creation of this project. First, it was the implementation of ChartJS and what kind of chart I wanted to display for the project. At first, I imagined I would have the chart simply be a bar chart that reveals all of the assets bringing income versus the assets that are expenses. I then revised this idea to simply be how the transactions are being allocated, thus led to the use of categories and a simple donut chart. Next, the second portion was correctly hooking up the front end to the back end so that I can see my app locally. This was fixed after correcting the versions of my node modules. Third, was correcting my MongoDB database and the heroku connection. The MongoDB database was not being used by the app but after a few hours of review, I found that my database had to be set to *use everywhere* within the network access. Additionally, the app was not being displayed to heroku correctly. Here, I had to remake a new heroku project, make sure I do not have a .git folder in my client folder, update my package.json "heroku build" line and update my app.use function in server.js. Once these changes were made after another day of review I managed to hook up the app to Heroku correctly.

## Inspiration and Learned Concepts

I wanted to learn more about the MERN stack and so I built an application for it. Huge inspiration by Brad Traversy and Llama Dev for the idea and how to deploy to Heroku. With this project I also learned about chartJS. I aim to possibly build more charts / visuals for different pages in the future. Additionally I learned about MongoDB and mongoose and how to deploy a MERN stack to Heroku.

## Future To-Do

- [x] Make the history window scrollable after a large number of transactions
- [x] Alert for invalid transactions
- [ ] Fix the numbers / text for overflow
- [ ] Possibly add commas to the numbers for easier reading
- [ ] Create an authenticated login, logout feature so other users can use this app for their own expenses
- [ ] Play around with more charts / chart libraries for different visuals
- [ ] Edit transactions



