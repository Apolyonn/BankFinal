function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  
 
  
  function validate(field, label){
  
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      
      return true;
    }
   function passLength(props){
    if (props.length < 8) {
      setStatus('Your password is too short');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
   }
    
  function handleCreate(){
    console.log(name,email,password); 
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!passLength(password)) return;
   
    console.log(name,email,password);
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
        var res = await fetch(url);
        var data = await res.json();
        console.log(data);
    })();
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <center><Card
      bgcolor="success"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" disabled={!name||!email||!password} className="btn btn-light" onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit"  className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    /></center>
  )
}