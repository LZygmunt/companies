export default ( mainClass, classList ) => {
    let list;
    if ( typeof classList === "string" && classList !== "") {
      list = [ mainClass, classList ]
        .filter( item => item !== undefined && item !== null && item !== "" )
        .join( " " );
    } else if ( classList && classList.length ){
      list = [ mainClass, ...classList ]
        .filter( item => item !== undefined && item !== null && item !== "" )
        .join( " " );
    } else {
      list = mainClass;
    }

  return list;
};
