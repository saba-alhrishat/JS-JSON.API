//  تحويل الكائن إلى JSON وعكسه
 
 let person = {

name : "saba",
age : 22 ,
email : "soso@sa.com"
 };
// تحويل من object  الى json
 let jee = JSON.stringify(person);
 console.log(jee);
// تحويل من json الى object
 let obb = JSON.parse(jee);
 console.log(obb)



//  2 حساب عدد الخصائص

function count (jja){
    return Object.keys(jja).length;
}

let person2 = {
    name : "saba",
    age : 22 ,
    email : "soso@sa.com"
};

console.log(count(person2));



// 3 استخراج عناوين الكتب

let books = {
    books: [
        { title: "Book 1", author: "Author 1", Date: "2020-01-01" },
        { title: "Book 2", author: "Author 2", Date: "2021-05-15" },
        { title: "Book 3", author: "Author 3", Date: "2019-09-12" }
    ]
};

function getbook (json){
    return json.books.map(book => book.title);
}
console.log(getbook(books));


// حساب المتوسط لخاصية معينة4   
let students = {
    students: [
        { name: "Ali", grade: 90 },
        { name: "Boby", grade: 80 },
        { name: "lolo", grade: 85 }
    ]
};

function calc (jsonn){
let total = jsonn.students.reduce((sum , student) => {

    return sum + student.grade;
},0);
return total / jsonn.students.length;

}
console.log(calc(students));
// 5 ترتيب
function sortByGrade(jsonObj) {
    return jsonObj.students.sort((a, b) => b.grade - a.grade); // الترتيب التنازلي
}

console.log(sortByGrade(students));



// 6
let cities = {
    cities: [
        { name: "New York", population: 8419600, country: "USA" },
        { name: "Tokyo", population: 13929286, country: "Japan" },
        { name: "London", population: 8982000, country: "UK" }
    ]
};


function sort (jal){
    return jal.cities.sort ((a,b)=> b.population - a.population);
}
console.log (sort(cities));