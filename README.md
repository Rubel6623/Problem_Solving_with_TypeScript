## 🎯 Interview Questions 

# Interface vs Type — মূল পার্থক্য

* Interface অন্য interface ও type—দুটোকেই extend করতে পারে। Type আরেকটি type বা interface-কে extend করতে পারে কিন্তু সেক্ষেত্রে & intersection ব্যবহার করতে হয় ।


**Interface**
```
interface Person {
  name: string;
}

interface Student extends Person {
  roll: number;
}
```

**Type**
```
type Person = {
  name: string;
}

type Student = Person & {
  roll: number;
}

```
## ব্যবহার ঃ 
 **Interface ব্যবহার :**

- Object-এর structure define করার ক্ষেত্রে

 - Extend বা inheritance এর জন্য দরকার হলে

- Declaration merging এর সুবিধার জন্য

**Type ব্যবহার :** 

- Primitive type এর জন্য দরকার (string, number ইত্যাদি)

 - Union / Intersection type এর ক্ষেত্রে প্রয়োজন 

- Tuple বা complex type এর জন্য দরকার হয়




##  TypeScript Enums ## 
TypeScript-এ **Enum** এমন একটি ফিচার যা একটি সেটের related constant মানগুলোকে পরিষ্কার ও readable উপায়ে সংরক্ষণ করতে সাহায্য করে।  
এটি বিশেষ করে তখন ব্যবহার করা হয় যখন একটি নির্দিষ্ট তালিকাভুক্ত value সেট ব্যবহার করতে হয়—যেমন: status, roles, directions, categories ইত্যাদি।

Enums দুই ধরনের হতে পারে:  
- **Numeric Enum**  
- **String Enum**

---

##  1. Numeric Enum

Numeric enum-এ প্রতিটি member-কে স্বয়ংক্রিয়ভাবে সংখ্যা (number) মান দেওয়া হয়।  
প্রথম মান ডিফল্টভাবে `0` হয়, পরেরগুলো ক্রমান্বয়ে বাড়ে।

<!-- Numeric Enum -->
```
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

const code = StatusCode.Success;  // 200
```

## 2. String Enum
String enum-এ প্রতিটি member-কে manually একটি string মান দিতে হয়।
এগুলো human-readable এবং debugging-friendly।


<!-- String Enum -->
```
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Pending = "PENDING"
}

const currentStatus = Status.Success; 

```
