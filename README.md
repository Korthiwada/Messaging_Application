# Messaging_Application
  This is a simple project of creating a small messaging interface design using ReactJs. ReactJs is a front end MVC Framework which is based on JavaScript. It is developed by Facebook. ReactJs mainly works on the idea of Components that manage their own state and then compose themselves to make complex UIs. This is a ReactJs code with Embedded Dependencies. The relevant files have been included as scripts in index.html and the main functionalities are coded in App.jsx file in Emascript scripting language.
  
  ### Prerequisites
  So to know what is going on through the above code you need to know the Basics of Javascript,Ecmascript 2015 (EC6) and ReactJs. The above code you only needs a JetBrains WebStorm IDE to get hosted.
  
  ### Installation Steps
  So, Just clone the above repoitory and run it in the JetBrains WebStorm IDE and it will be local hosted in your web browser.
  
  ### About the Code:
  The main functionalities of our Messaging-Application is Sending a mail and viewing Outbox and Inbox. So each of the functionalities are our components and each mail is also a our component. This components will be interacted with each other to produce desired functionalites of the Application. 
  In the above code a Login form is treaded as a Component and it contains 3 states 1.Initial State, 2.Correct Login Stage 3.Wrong Login Stage. In the above Application you can log in using any non zero input.
  In the application the navigation bar is treated as a component, Each mail is traeted as a component and different components that are changed due to the event will only be loaded at that time of event.
  In our application the components are been recursively called from other component based on their state. For example Compose Mail component is called from SideNav component when Compose button has been clicked.
  
  ### Deployment
  To deploy this code we need a AWS Virtual Machine with a JetBrains WebStorm installed, We can host the app on the local host of the machine which can be published by the DNS address of th AWS Virtual Machine.
  
  ### Authors
  Rahul Korthiwada
