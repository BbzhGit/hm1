let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

 let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
 };   

 let a1 = prompt("Введите обязательную статью расходов в этом месяце",''),
     a2 = prompt("Во сколько обойдется?", ''),
     a3 = prompt("Введите обязательную статью расходов в этом месяце",''),
     a4 = prompt("Во сколько обойдется?", '');

    appData.expenses.a1 = a2;
    appData.expenses.a3 = a4;
    
    alert("Бюджет на один день: " + appData.budget/30);
    console.log(appData.expenses.a1 + ", " + appData.expenses.a3);
    


// var money,
//     time,
//     answerTo3,
//     answerTo4;

// var ans1 = "Ваш бюджет на месяц?",
//     ans2 = "Введите дату в формате YYYY-MM-DD",
//     // 4 punkt
//     ans3 = "Введите обязательную статью расходов в этом месяце",
//     ans4 = "Во сколько обойдется?";


// money = prompt(ans1);
// time = prompt(ans2);
// answerTo3 = prompt(ans3);
// answerTo4 = prompt(ans4);


// //

// var appData = {
//     budget: money,
//     timeData: time,
//     expenses:{
//         answerTo3: answerTo3
//     },
//     //optionalExpenses: 
//     //income
//     savings: false
// };

// alert("Бюджет на один день: " + appData.budget/30 );
// alert(appData.expenses);



