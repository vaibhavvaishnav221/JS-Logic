let classInfo = [
    {
        name: 'Aman',
        grade: 'A',
        city: 'Delhi'
    },
    {
        name: 'Shradha',
        grade: 'A+',
        city: 'Pune'
    }, {
        name: 'Karan',
        grade: 'O',
        city: 'Gurgaon'
    }
]

for (let i = 0; i < classInfo.length; i++) {
    console.log(`Student No. ${i+1}`);
    console.log(classInfo[i].name);
    console.log(classInfo[i].grade);
    console.log(classInfo[i].city);
    console.log(`**********************`);
};