import React from 'react';

class Gallery extends React.Component {
    render() {return(
        <div class="container-fluid">
          <h1 class="text-center">Bright & Beautiful </h1>
          <p class="text-center" style={{fontFamily:"cursive", fontSize:"large"}}>The only true wisdom is in knowing you know nothing</p>
        
          <div class="d-flex flex-wrap  justify-content-center">
            <div class="d-flex flex-column bg-warning">
              <img class="img-fluid" alt="1st" src="https://images.unsplash.com/photo-1593698054469-2bb6fdf4b512?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZHlpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
              <img class="img-fluid" alt ="2nd" src="https://media.istockphoto.com/photos/light-bulb-over-the-stack-of-colorful-books-picture-id1346622848?b=1&k=20&m=1346622848&s=170667a&w=0&h=UJ8uuhSfcQLV0fi14q07hfbJcHzB5EWJophgvZ4G4o8="/>
              <img class="img-fluid" alt ="3rdA" src="https://images.unsplash.com/photo-1507587396692-5afe1f777676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZHlpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
            </div>
        
            <div class="d-flex flex-column text-center bg-danger">
              <img class ="img-fluid" alt="4thA" src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
             
            </div>
        
            <div class="d-flex flex-column text-center bg-info ">
              <img class="img-fluid" alt ="5th" src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
              <img class="img-fluid" alt="6th" src="https://images.unsplash.com/photo-1509266272358-7701da638078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
        
            </div>
        
            <div class="d-flex flex-column text-center  bg-warning">
              <img class="img-fluid" alt="7th" src="https://images.unsplash.com/photo-1533669955142-6a73332af4db?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974"/>
          
            </div>
        
            <div class="d-flex flex-column bg-danger ">
              <img class="img-fluid" alt="9th" src="https://images.unsplash.com/photo-1544185310-0b3cf501672b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"/>
              <img class="img-fluid" alt="last" align="right" src="https://images.unsplash.com/photo-1615884241431-d07c87e30ab2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"/>
            </div>
          </div>
        </div>
        )
    }
  }

  export default Gallery;