<img width="1740" alt="444" src="https://user-images.githubusercontent.com/79020081/188288095-4e36752c-0d85-4f95-9134-a8f5234e2f01.png">

The best authentication workflow in [#reactnative](https://www.linkedin.com/feed/hashtag/?keywords=reactnative&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6971964533301002240) ever!  
Basically many people do follow conditional rendering for checking whether the user is logged in or not, this process is quite ok but in this, we do need to check whether the user is login or not on each page/screen so that means from each page we're sending a request to the server and this isn't okay, it may slow done the whole process.  
  
So before directly going to the solution here are some of the problems that may occur if you are doing conditional rendering on each page.  
  
**PROBLEM STATEMENT**  

 1. Whether the user is logged in he can still visit Auth Pages like
    Login, Register, Onboarding, and OTP screens, you can add
    conditional rendering on these pages too, but useEffect takes some
    time to execute so the user may able to see these pages for a sec or
    2 but we don't even want to allow the user to have a look of these
    pages for a while after login! 
  2. Once the user is logged in and if that user presses the back button, he'll get the previous screen which will be one of the Auth
    Screen and this shouldn't happen, the things should happen when the
    user press the back button from the home screen is App should get
    close.
  
So these are the two main issues that beginners may encounter and here is the best, easy and optimized solution. 
  
**PROCESS**  

We'll implement two stacks ( AuthStack, and AppStack) AuthStack will contain all the screens related to authentication and AppStack will contain all the main screens of the App like Home, Profile, listing, search and many more, in short, complete app screens except authentication will be in AppStack.  
  
At the global level, the app will be checking whether the user is login or not, if a user is logged in, we'll provide him AppStack if he is not, then AuthStack!  
  
So once he is logged in he won't have access to AuthStack which means he won't have access to all authentication screens.  
  
1. Create an AuthContext using CreateContext and AuthProvider.  
2. Create a state that will hold a boolean value for isLogin.  
3. Send HTTP Request from the file where you created AuthContext and change the value of isLogin according to the response fetched from the HTTP request.  
4. Inside App.js we will take the value of isLogin using useContext Hook and if isLogin is true then we will give AppStack and if not than AuthStack.

