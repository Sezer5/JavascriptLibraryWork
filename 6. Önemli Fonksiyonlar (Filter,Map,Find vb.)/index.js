const points = [70,75,25,35,10,80,27];

const studentPassed = points.filter(point =>{
    return point > 50;
});

console.log('Filter Metodu Geçer Notlar',studentPassed);

const students = [
    {name: 'sezer' , passed:true , point:40},
    {name: 'seda' , passed:false , point:60},
    {name: 'kevser' , passed:true , point:30},
    {name: 'cahit' , passed:false , point:100},
    {name: 'sezer' , passed:false , point:75},
    {name: 'sezer' , passed:true , point:33},
];

const studentSuccess = students.filter(student=>{
    return !student.passed;
});

console.log(studentSuccess);

/* MAP METODU BELİRLİ BİR ŞARTI SAĞLAYAN ELEMANLARLA İŞLEM YAPINCA GERİYE DİZİ OLARAK DÖNDÜRÜR */

const newPoints = points.map(point =>{
    return point + 10;
});

console.log(newPoints);

const passedStudentPoints = students.map(student=>{
    if(student.point < 50){
        student.point+=15;
        return student;
    }else{
        return student;
    };
});

console.log(passedStudentPoints);

/* REDUCE METHODU REDUCE METHODU REDUCE METHODU REDUCE METHODU REDUCE METHODU REDUCE METHODU REDUCE METHODU REDUCE METHODU  */
/* Burada Value Değeriyle sağlanan şartlar olduğunda dizi içerisinde geriye istenen değer döndürülmektedir.*/
const result = points.reduce((value,point)=>{
    if(point > 50){
        value++;
    }
    return value;
},0);

console.log(result);

const sezerTotal = students.reduce((value,student)=>{
    if(student.name == "sezer"){
        value+=student.point;
    };
    return value;
},0);

console.log(sezerTotal);
