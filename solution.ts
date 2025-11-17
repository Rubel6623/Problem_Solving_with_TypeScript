const formatValue =(value : number | string | boolean) => {
  if( typeof value === 'string'){
    return value.toUpperCase();
  }else if(typeof value === 'number'){
    return value*10;
  }else if(typeof value === 'boolean'){
    return value = !value;
  }
}



const getLength = (input : string | number[] | string[]) => {
  if( typeof input === 'string'){
    return input.length
  }else if(Array.isArray(input)){
    return input.length;
  }
}

