function convertToCastString(directors){
  return directors.map(director=>director.name).join(" / ");
}

function convertToCastInfos(casts) {
  let castsArray = casts.map(cast => {
    return {
      name: cast.name,
      img: cast.avatars ? cast.avatars.large : ""
    }
  })
  return castsArray;
}

export{
  convertToCastString,
  convertToCastInfos
}