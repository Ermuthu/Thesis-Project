## Meditation App
### Dan Martin
#### Thesis Project

![Screenshot](./images/Screenshot.png)

### The technologies I used are:
  * React
  * React-Redux
  * MongoDB
  * Express
  * OAuth with Spotify API and Google API

I am a big fan of react, and was initially planning on using plain react for my frontend, but after spending so much time using react and hearing about redux with react I was eager to do research on my own after this class ended. However, I decided this would be the perfect opportunity to do that. So I did some research on react-redux, and while doing so I decided I would also teach myself how to use Mongo for my database. On top of all of that, this is my first time implementing an OAuth API.

I went through some huge learning curves with all of these new technologies. Redux is awesome, however it can be quite confusing at first. Especially using APIs with OAuth, and Spotify's specifically which requires users access tokens on every call. I tried out a few new NPM packages and cool ES6 tricks I came across during my research.


### Installation instructions for any dependencies
yarn install in the root folder, cd in to the client folder, yarn install in the client folder. cd .. back to the root folder and run `npm run dev`

### Descriptions of any unsolved problems or major hurdles you had to overcome

There is still a lot I want to do with this, and I plan on continuing to work on it, I am now a big fan of redux with react. It took a long time to get things working while figuring it all out, so my actions and reducers have some room for improvement, and with some more practice I know I will be able to DRY up the code a lot and add more features.

Some unsolved problems right now are my API calls and the repetition of the actions and methods, I know there is a way to clean it up I'm just trying to figure out how to implement them exactly.

There were a lot of hurdles that took me quite some time to solve. For example, handling the OAuth system with mongo, and storing the users data, including their access and refresh tokens to then later use in the API calls. Furthermore, using those access tokens specific to the user that is currently logged in, in the action creators when fetching from the API. Handling all of the states in the store got hairy and confusing at times. The whole system of global state, action creators, async promises, dispatching information to reducers, switch statements from those dispatched actions, and returning states based on cases, otherwise returning default state, all handled in the global state store.. Theres also some improvements I want to make to my use of Mongo, I know theres some more I can do with it, especially in terms of making the users experience much more personalized. I really want to let users CRUD everything to their actual Spotify accounts, and let them keep a log of their progress, which I already somewhat implemented, but not fully.

I got the YouTube/Google OAuth to work, yet haven't had enough time to let users search yet, I know exactly how I am going to do it, so I will get to it soon.


#### User stories

- On initial render of home page, users will be prompted to login through their spotify or google accounts, once successfully logged in, they are redirected to their home page (/home).
- On the home screen, they have the option to search through Spotify's API or youtubes.
- They can search through artists, songs, playlists or genres.
- They will soon be able to set goals for their meditations and keep track of them, as well as keep track of the meditations they liked

**Login Page**
![Wireframe 1](./images/login.jpg)
![Wireframe 2](./images/register.jpg)

**Home Page**
![Wireframe 3](./images/home.jpg)

**Playlist**
![Wireframe 4](./images/playlist.jpg)

**Search**
![Wireframe 5](./images/search.jpg)



  **Phase -2**
* File Structure
* Db structure
* Git Repo

**Phase -1**
* Express / react routes
* Set up auth
* Create components
* Structure for front end

**Phase 0** *MVP*
* Successfully getting info from API
* Users can search and save songs
* Users can set goals

**Phase 1**
* Animations
* Use Youtube and Spotify API

**Phase 2**
* Multiple Users
* User profile pictures
