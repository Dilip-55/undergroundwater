import './home.css';
import logo from '../images/img.jpeg'
function Home (){
    return (
        <div className="main">
           
 <div class="profile-card">
 <div className="blur"></div>

    <div class="card-header">
    <h1 className="head" style={{color:"white"}}>UnderGround Water prediction By Narayana</h1>
    

  <div class="card mb-3" style={{maxWidth:"540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={logo} class="img-fluid rounded" alt="image"></img>
      <img src={logo} class="img-fluid rounded" alt="image"></img>
    </div>
    <div className="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><u>About</u></h5>
        <p class="card-text"> Narayana pyeneti
Expirenced more than<b>10 years</b>  in UnderGround Water prediction</p>
<p className="card-text"><b>100+ bore points</b>..</p>
<p className="card-text"><b>90% success rate</b></p>
      </div>
      <div class="col-md-8">
        <div className="card-body">
        <h5 className="card-title">
      <u>Address</u> 
     </h5>
     <p className="card-text">
     2-43,sree rangapuram camp, bommanahall Mandal, Anantapuram dist
     </p>
        </div>
   
    </div>
    <div class="col-md-8">
        <div className="card-body">
        <h5 className="card-title">
   <u>Cost
</u>      </h5>
     <p className="card-text"><b>499/- </b>for prediction and <b>499/-</b> for success</p>
     <p className="card-text">Gpay ,Phonepe Avilable</p>
        </div>
   
    </div>
      <div class="col-md-8">
        <div className="card-body">
        <h5 className="card-title">
      <u> Phone</u>
     </h5>
     <p className="card-text">
     9490481470
     </p>
     <p className="card-text">
     6302734698(Gpay,Phonepe)
     </p>
        </div>
   
    </div>
    </div>
   
  </div>
</div>
 
    </div>
    
 
        </div>
       </div>
        )
}
export default Home;