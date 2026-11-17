export function MoodBoardItem({color,image,description}){
 return(
  <div className="mood-board-item" style={{backgroundColor:color}} >
    <img className="mood-board-image" src={image}/>
    <h3 className="mood-board-text">{description}</h3>
  </div>
 );
}

export function MoodBoard(){
  const boards=[
    {id:1,color:"yellow",image:"https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",description:"Rocks"},
    {id:2,color:"red",image:"https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",description:"Arroyo"},
    {id:3,color:"blue",image:"https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",description:"Ocean"},
    {id:4,color:"purple",image:"https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",description:"Barco"}
  ]
  return(
    <div className="mood-board">
    <h1 className="mood-board-heading">Destination Mood Board</h1>
     {boards.map((board)=>(
      <MoodBoardItem 
        key={board.id}
        color={board.color}
        image={board.image}
        description={board.description}
      />
  ))}
    </div>
  );
};
