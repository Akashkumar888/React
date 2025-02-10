
function Random(){
  let random=Math.random()*100;
  return <h1 style={{color: '#776691'}} >randomNumber: {Math.round(random)}</h1>
}

export default Random;
