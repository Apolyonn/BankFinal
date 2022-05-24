function Home(){
  return (
    <center><Card
      txtcolor="white"
      bgcolor="success"
      header="BadBank"
      title="Welcome to the bank"
      text="Banking made simple and insecure."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    /></center>    
  );  
}
