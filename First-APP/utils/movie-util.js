function convertToCastString(directors){
  return directors.map(director=>director.name).join(" / ");
}


export{
  convertToCastString
}