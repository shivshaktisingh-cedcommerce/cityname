
import './App.css';

function App() {
  var txt="";
  var cities=["Bengaluru","Mangaluru","Ballari","Vijayapura","Belagavi","Chikkamagaluru","Kalaburagi","Mysuru","Hosapete","Shivamogga","Huballi","Tumakuru"];
     for(let i=0;i<cities.length;i++){
    
         if(cities[i][0]==="B"){
           txt= txt+cities[i]+"     ";
         
         }
       
     }
  return (
    <div className="App">
      <h2>{txt}</h2>
    </div>
  );
}

export default App;
