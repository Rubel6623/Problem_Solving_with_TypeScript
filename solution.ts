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



class Person {
  name : string;
  age : number;
  constructor(name : string, age : number){
    this.name = name;
    this.age = age;
  }

  getDetails():string{
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}



type Books ={
  title : string;
  rating : number;
}

const filterByRating = (array : Books[]) =>{
  const topBooks =array.filter((item) => item.rating >=4).map((item) =>{
    return {title :item.title, rating: item.rating}
  })
  return topBooks;
}


