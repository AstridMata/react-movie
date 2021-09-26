const  cardPopular= (props) => {
    
    console.log(props)
    return ( 
        <>
        
        <div className="cards-container" style={{width: "8rem", borderRadius: "5px"}}>
        <div className="card cards shadow p-3 mb-5 rounded" style={{backgroundColor: "black"}}>
  <img src={'https://image.tmdb.org/t/p/w200'+props.image} className="card-img-top rounded" alt="..."/>

  
      
    
    
  </div>
</div>


        </>
     );
}
 
export default cardPopular;