## 🎯 Interview Questions 

# Interface vs Type — মূল পার্থক্য

* Interface অন্য interface ও type—দুটোকেই extend করতে পারে। Type আরেকটি type বা interface-কে extend করতে পারে কিন্তু সেক্ষেত্রে & intersection ব্যবহার করতে হয় ।
```
<!-- Interface -->
interface Person {
  name: string;
}

interface Student extends Person {
  roll: number;
}

<!-- Type -->
type Person = {
  name: string;
}

type Student = Person & {
  roll: number;
}

```
## ব্যবহার ঃ 
 * Interface ব্যবহার :

- Object-এর structure define করার ক্ষেত্রে

 - Extend বা inheritance এর জন্য দরকার হলে

- Declaration merging এর সুবিধার জন্য

* Type ব্যবহার :

- Primitive type এর জন্য দরকার (string, number ইত্যাদি)

 - Union / Intersection type এর ক্ষেত্রে প্রয়োজন 

- Tuple বা complex type এর জন্য দরকার হয়
