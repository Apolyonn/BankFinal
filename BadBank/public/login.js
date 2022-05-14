function Login(){
  const [status, setStatus]     = React.useState('');
  const [show, setShow]         = React.useState(true);
  
  
  const firebaseConfig =
  {
    apiKey: "AIzaSyATZHoXdYBgH-BZDe0qg6K3CjF6zMPjISc",
    authDomain: "bad-bank-c77ae.firebaseapp.com",
    projectId: "bad-bank-c77ae",
    storageBucket: "bad-bank-c77ae.appspot.com",
    messagingSenderId: "753223969560",
    appId: "1:753223969560:web:fe9023dd5623eadcd90c6d"
   };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
  function Auth() {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => console.log(e.message));
  };


  // logout
  function Logout() {
    firebase.auth().signOut();
    setShow(true);
  };

  // login state
  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log(firebaseUser);
      loggedInStatus.innerText = `You are logged in using the following email: ${result.user.email}`;
      
    } else {
      console.log("User is not logged in");
      loggedInStatus.innerText = "You are not yet logged in";
      
    }
  });

  return ( 
    <center><Card
    bgcolor="success"
    header="Login to your account"
    status={status}
    body={show ? (  
          
            <>
            <div>Login to your account</div>
            Login<br/>
            <input type="input" className="form-control" id="email" placeholder="enter email"/><br/>
            <input type="input" className="form-control" id="password" placeholder="enter password"/><br/>
            <button type="submit" className="btn btn-light" id="login" onClick={Auth}>Login</button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <div>Welcome ${result.user.name}</div>
            <button type="submit" className="btn btn-light" id="logout" onClick={Logout}>Logout</button>
            
            </>
          )}
  /></center>
)

}


       
    
