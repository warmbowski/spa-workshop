# SPA Workshop

In this workshop you'll be building and deploying an AngularJS single page application on the Aerobatic platform. The app itself will be a city portal that displays local information for a set of cities of your choosing. There should be a homepage accessible at _http://[yourapp].aerobaticapp.com_ that at a minimum has a list of links to each city specific page. Each city should have a dedicated page in the form _http://[yourapp].aerobaticapp.com/cities/seattle_, _http://[yourapp].aerobaticapp.com/cities/chicago_, etc. Each city page should include current weather conditions and local news headlines specific to that geographic location.

### Getting Started
1. Login to http://www.aerobatic.com with your GitHub credentials.
2. Install the yoke command line tool with npm:  `npm install -g yoke-cli`
3. Pick a name for your team 
3. This repository includes scaffolding for the project to give you a running start. Clone it locally with: 
`git clone https://github.com/aerobatic/spa-workshop.git spa-workshop-teamname && cd spa-workshop-teamname`
4. Initialize your Aerobatic credentials by running `yoke login`
5. Create a new Aerobatic application from the repo you just cloned: `yoke app-create`. Be sure to select `From exiting app` when prompted.
6. Run `npm install`
7. Open your app in development mode with: `yoke serve -o`
8. Start coding. Livereload should automatically keep your browser in sync as you save files.
9. When you're ready to deploy to production: `yoke deploy`

### API Sources

#### Local News
The Bing search API can return local news if you invoke the api with a query on the city name and a source type of “news”. You’ll need to register your application here. This page has some good information on getting started with the Bing API: [http://www.bing.com/developers/s/APIBasics.html](http://www.bing.com/developers/s/APIBasics.html)

#### Weather
[Forecast.io](https://forecast.io/) has a nice weather API that is easy to get started with. First you'll need to create an account at [https://developer.forecast.io](https://developer.forecast.io/). Copy your API key and create a new environment variable in your Aerobatic app dashboard called `FORECAST_IO_API_KEY`. 


### Enhancement Ideas
Time permitting, here's some thoughts on how you might improve upon your application. These are just suggestions, feel free to get creative and take the app in a new direction.

* Enhance the current weather conditions to include a future forecast
* Use the HTML5 location API to auto-suggest which city the current user is in
* Cache the results of geo-location lookups to repeatedly making the same API calls over and over
* Use a more web friendly looking representation of the city name in the URL, i.e. `cities/new-york` rather than `cities/New%20York` 

