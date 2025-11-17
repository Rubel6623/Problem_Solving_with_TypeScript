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

const filterByRating = (array : Books[]) : Books[] =>{
  const topBooks =array.filter((item) => item.rating >=4).map((item) =>{
    return {title :item.title, rating: item.rating}
  })
  return topBooks;
}



type User = {
  id : number;
  name : string;
  email : string;
  isActive : boolean;
}

const filterActiveUsers= (users : User[]): User[]=>{
  const activeUser = users.filter((user) => user.isActive).map((user) => {
    return { id: user.id, name: user.name, email: user.email, isActive: user.isActive}
  })
  return activeUser;
}

interface Book {
  title : string;
  author : string;
  publishedYear : number;
  isAvailable : boolean;
}

const printBookDetails = (book : Book) => {
  console.log(`title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable? 'Yes': 'No'}`);
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: false,
};

printBookDetails(myBook);