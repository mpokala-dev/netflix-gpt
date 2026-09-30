- npx i create-react-app netflix-gpt
- remove all style classes in index.css file
- remove all the code in App.js file from return and only add a div element to start with.
- configure tailwind css
  - search for tailwind css for create-react-app and follow the guidelines to configure tailwind css
- create components folder - for all components
  - rafce - Login.js, Header.js, Body.js, Browse.js
  - <App >
        <Header>
        <Body>
            <Login>
            <Browse>

- <b>npm i -D react-router-dom</b> to enable routing to the application in App.js.

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign in/up Form
- Form Validation
- useRef Hook
- Firebase Setup - done on console.firebase with project name netflixgpt
- Deploying our app to production - installed firebase CLI but blocked hosting on free plan
- Create SignUp User Account - should do using firebase auth
- Implement Sign In user Api - should do using firebase auth
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile - yet to implement
- if the user is not logged in Redirect /browse to Login Page and hide sigout button if user is null
- Unsubscribe to OAuthStateChanged by firebase provider in unmount phase - useEffect(()=>{const unsubscribe = OAuthStateChanged(); return ()=>unsubscribe()},[]) // best practice to remove unneccessary Auth calls on unmount.
- Constants file
