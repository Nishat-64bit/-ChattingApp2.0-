# 🚀🚀 Chatting App 2.0 🚀🚀
# React + vite + TailwindCss + FireBase


Hello viewers, This is Actually a ChattingApp based on React,Tailwaind,FireBase.
in this project I have learned many things
- useState Hook
- Tailwaind Css 
- FireBase
- handle event funtionality nesting onchange
- handle eye funtionality
- handle signup funtionality - 1.empty signup prevent 2.Error show on browser (span) 3.1ta input er error solve hole next input e gele 1st error chole jabe And Next ==>

- form validation with 1.Email regex (kew jate invaid email na dite pare) 
- very Important email regex // const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$/; // copy it 
                    //  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;// alernative

- form validation with 2.password (kew jate weak password na dei )  
- very important password ==>
- regex  = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.\-+*/])[A-Za-z\d@$!%*?&.\-+*/]{8,}$/  copy  
- install firebase in terminal
- make folder databaseconfiguration ==> FirebaseConnect.js
- paste sdk firebaseconnect.js
- import main.jsx app
- log firebase 
- go to firbase doc ==> build
- sign up for new user => import registration
- copy firebase hook 
- make signup for new user. copy from firebase
- then make a successful sign up inspect chrom
- loader layout and functionality
- after successful signup delete data from state and input field
- sent verification mail using firebase
- use tostify to show that the verification mail link is sent 
- use tostify to show error when someone register but again want to sign up
- use a function when use successfully input all field and successfully this data goes to firebase use all things in a function when sign up or regestration btn click it.
- make a pages folder under src and make file name regestrationPages then import the component named regestration . so now the main pages is regestrationpages , now import it to the app.jsx and remove the older one named regestration component . 

- oke now we make login page , so make login folder under component and make file login.jsx and import it to the login page and import login page to the app.jsx file 
- so now we have multiple pages , so how should we navigate them ==> React Router Dom ==> next class

- install react router dom
- configure react router dom to app.jsx to navigate multipale page
- make login page and paste the form layout from regestration page to save time
- now make nesting usestate i,e use state e object nia kibabe kaj kora jai  for all input field
- and ekta handler nia sob state eksate samlabo 
- react router dom er link component use kore page navigation kora jai
- userid token save kono je succesfully regester then login korse tar user id => userinfo._tokenResponse.idToken 
- localstroge db te store korte hobe ex : localStorage.setItem("UserToken",userinfo._tokenResponse.idToken)
                                                           // console.log(userinfo._tokenResponse.idToken);
- kibabe localstroge check korbo ?
- go to application => local storge 
- Now comes Login With google part ==>
- firbase auth with google 
- and obbosoe auth provider firebase e google ke enable kore niben 
- oke kew jodi google or successfully mail and pass dea jeta reg korse seta dia login kore tobe se je jono next page i,e home page e jai 
- aer jonno use react router dom navigate 
- and also google dia log in korleo jen navigate korte pare 



 
And Stay with me , Many thing will coming . This is a Big Project . 👁️ Keep Watching 👁️.