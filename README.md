# Franzz 🤗

Franzz is a messaging web application focused on connecting groups of franzz (friends) together with multiple unique features.

### Features

1. Stalking map: View your group's live location on a map
2. Photo gallery: Create share high quality photos and videos with your friends by creating albums
3. Youtube: Watch Youtube together with your group of friends while messaging
4. Drawing board: Need to sketch something out together? You can do it using this drawing board!

## Setup

### Cloudinary

### GOOGLE

Enable APIs for:

1. YouTube Data API v3
2. Maps JavaScript API
3. Geolocation API

and

1. OAuth 2.0 Client IDs

### MongoDB

Create a database and add the connection string to server/.env

## Installation 👾

For both client and server run:

```
npm install
npm start
```

For mobile, expo CLI is required:

```
npm i -g expo-cli
```

then install dependencies and start:

```
npm install
expo start
```

## Deployment

Client - [Franzz](https://franzz.netlify.com)
Server - [Franzz API](https://arcane-bastion-72484.herokuapp.com)

## Main Dependencies

### Client

```
"axios": "^0.19.2",
"cloudinary": "^1.19.0",
"google-map-react": "^1.1.6",
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-router-dom": "^5.1.2",
"react-youtube": "^7.9.0",
"socket.io-client": "^2.3.0"
"@react-native-community/async-storage": "^1.8.0",
```

### Mobile

```
"socket.io-client": "2.1.1"
"axios": "^0.19.2",
"expo": "~36.0.0",
"@react-navigation/native": "^5.0.0",
"react-native-gifted-chat": "^0.13.0",
"react-native-storage": "^1.0.1",
"react-native-maps": "^0.26.1",
```

### Server

```
"axios": "^0.19.2",
"bcrypt": "^3.0.7",
"cloudinary": "^1.19.0",
"body-parser": "^1.19.0",
"jsonwebtoken": "^8.5.1",
"mongoose": "^5.8.10",
"passport": "^0.4.1",
"socket.io": "^2.3.0",
```

## Work Distribution

### :metal: Kalvin (ke2low)

I was responsible for the overall design and styling of the application including ensuring that the application would be responsive. I also designed and built the majority of the front-end UI components. In addition, I was involved in implenting the functionality to pass data between the front-end and back-end, so that UI components could be dynamically generated and also so that the components could take in user data. I also contributed to building out the collaborative drawing and geolocation application widgets. Lastly, I utilized FontAwesome, Google Fonts and MaterialUI components to add to the overall design aesthetic of the application.

### :muscle: Julie (juliebede)

My focus for Franz was working with the Youtube Syncing feature (back-end to front-end), this includes connecting clients using SocketIO as well as using the Youtube API. I had also created the photo gallery feature (back-end to front-end), using the Cloudinary API. In specific, I built the platform to integrate media data transfer into the chat textbox, input to be used between our client and server with the cloudinary API. I also assisted in the overall UI design and style of the application in addition to helping clean up inconsistencies that may occured.

### :sweat_drops: Eric (melonfruity)

I focused on building the general structure of the application and managing the project as I had the overall view of everyones work. I designed the file management system for both client and server side as well as the data hierarchy, flow and file structure for the React client. This was done along-side the applications authentification, core chat functionality, the maps and canvas plugins and building the React Native app. Finally, I supported my group members by helping fix bugs and giving suggestions to their focuses if they needed it.

## Screenshots 📸

### Client

!["Chat display upon signing in"](docs/Chat.png)

!["Photo gallery"](docs/photos.png)

!["Youtube"](docs/Youtube.png)

!["Drawing board"](docs/drawing.png)

### Mobile

!["Login"](docs/m-login.png)

!["Home"](docs/m-home.png)

!["Channel"](docs/m-channel.png)
