# Draggable-Desktop-Screen-Time-Tracker

STEP 1 :

1.Create a new directory for the project.

2.Open a terminal and navigate to the project directory.

3.Run the following command to initialize a new Electron project:
        
         npx create-electron-app my-app
         
4.Change to the project directory:

         cd my-app

STEP 2 :

1.Open a terminal and navigate to the project directory if you're not already there.

2.Run the following command to install the dependencies:

        npm install electron-react-boilerplate

STEP 3 :

1.In the project directory, navigate to src/renderer/components.

2.Create a new file called Widget.js.

3.Open Widget.js and add the following code

STEP 4 :

1. In the project directory, open src/renderer/App.js.
   
2.Import the Widget component by adding the following line at the top:

       import Widget from './components/Widget';

3.Replace the existing content of the App component with the following code:

   const App = () => (
      <div>
         <h1>Hello, Electron React Boilerplate!</h1>
         <Widget />
      </div>
       );

  export default App;


STEP 5 :

1.Open a terminal and navigate to the project directory if you're not already there.

2.Run the following command to start the application:

      npm start

The Electron.js application will launch with the draggable widget displaying the screen time. The widget will update every second and handle user idleness by displaying an "Idle" indicator.


 


