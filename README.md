## 🎯 Interview Questions 

# Interface vs Type — মূল পার্থক্য

* Interface অন্য interface ও type—দুটোকেই extend করতে পারে। Type আরেকটি type বা interface-কে extend করতে পারে কিন্তু সেক্ষেত্রে & intersection ব্যবহার করতে হয় ।

interface Person {
  name: string;
}

interface Student extends Person {
  roll: number;
}


type Person = {
  name: string;
}

type Student = Person & {
  roll: number;
}
