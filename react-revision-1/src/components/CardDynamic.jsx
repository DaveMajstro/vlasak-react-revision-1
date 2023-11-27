function Card(props) {
  const {name, text, link} = props;
  
    return (
      <>
      <div className="cardDynamic">
      <h1>{name}</h1>
      <p>{text}</p>
      <a href={{link}}>SSPS</a>
      </div>
      </>
    )
  }
  
  export default Card
  