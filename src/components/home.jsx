import './home.css';
import image from '../images/img.jpeg';
import images from '../images/img2.jpeg'
function Home (){
    return (
        <div className="main">
           
 <div className="profile-card">
 <div className="blur"></div>

    <div className="card-header">
    <h1 className="head" style={{color:"white"}}>UnderGround Water prediction By Narayana</h1>
    

  <div className="card mb-3" style={{maxWidth:"540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
    <img src={images} className="img-fluid rounded" alt="image"></img>
      <img src={image} className="img-fluid rounded" alt="image"></img>
     
     
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"><u>About</u></h5>
        <p className="card-text"> Narayana pyeneti
Expirenced more than<b>10 years</b>  in UnderGround Water prediction</p>
<p className="card-text"><b>100+ bore points</b>..</p>
<p className="card-text"><b>90% success rate</b></p>
      </div>
      <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title">
      <u>Address</u> 
     </h5>
     <p className="card-text">
     2-43,sree rangapuram camp, bommanahall Mandal, Anantapuram dist
     </p>
        </div>
   
    </div>
    <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title">
   <u>Cost
</u>      </h5>
     <p className="card-text"><b>499/- </b>for prediction and <b>499/-</b> for success</p>
     <p className="card-text">Gpay ,Phonepe Avilable</p>
        </div>
   
    </div>
      <div className="col-md-8">
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