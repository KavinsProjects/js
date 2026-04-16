//Object.assign to used combine two objects into one 


const courses = {
    naame : "JavaScript",
    scoree : 56
};

const marks = {
    scoree : 87 // high perfercence
};

finalResult = Object.assign(courses, marks, {teacher : "Mr KAvin"});
console.log(finalResult);