const formatValue =(value : number | string | boolean) => {
  if( typeof value === 'string'){
    return value.toUpperCase();
  }else if(typeof value === 'number'){
    return value*10;
  }else if(typeof value === 'boolean'){
    return value = !value;
  }
  else{
    throw new Error('Please provide number or string, or boolean type data');
  }
}




const getLength = (input : string | number[] | string[]) => {
  if( typeof input === 'string'){
    return input.length
  }else if(Array.isArray(input)){
    return input.length;
  }
  else{
    throw new Error(`Please provide a string or number type array `);
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




const getUniqueValues = (array1: number[] | string[], array2: number[] | string[]) => {

  let uniqueArray : (number[] | string[]) = [];
  let currentIndex=0;  

  for(let i=0; i<array1.length; i++){
    uniqueArray[currentIndex]=array1[i]
    currentIndex++;
    }

    for(let i=0; i < array2.length; i++){
      let available = false;

      for(let j = 0; j < currentIndex; j++){
        if(uniqueArray[j] === array2[i]){
          available = true;
          break;
        }
      }

      if(!available){        
        uniqueArray[currentIndex]= array2[i];
        currentIndex++;      
      }
    }
  return uniqueArray;
}




type Cart = {
  name: string;
  price : number;
  quantity : number;
  discount?: number ;
}

const  calculateTotalPrice = (array : Cart[]) => {

  const cartSubtotal = array.reduce((subTotal, product) => {
    const neatPrice = product.price*product.quantity;

    if(product.discount){
      const discountAmount = neatPrice* (product.discount/100);
      return subTotal + (neatPrice-discountAmount);
    }
    return subTotal+ neatPrice;
  }, 0);
  
  return cartSubtotal;
}
