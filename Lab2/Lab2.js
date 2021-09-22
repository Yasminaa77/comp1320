



function getDayOfTheWeek(day, month, year){

    //--->>> calculation with "last 2 digit" of year(as a string)
    let cal1 = Math.floor((year.slice(-2) / 12));
    let cal2 = Math.floor((year.slice(-2) % 12));
    let cal3 = Math.floor((year.slice(-2) % 12)/4);
    let monthNum ;

    //--->>> Passing a month number for each typed "month"
    if (month === "January" || month === "October" ){
        monthNum = 1;

    }else if(month === "April" || month === "July" ){
        monthNum = 0;

    }else if (month === "February" || month === "November" || month === "March"){
        monthNum = 4;

    }else if(month === "August" ){
        // console.log("it works")
        monthNum = 3;

    }else if(month === "May"  ){
        monthNum = 2;

    }else if(month === "June" ){
         monthNum = 5;

    }else if(month === "September" || month === "December" ) {
        monthNum = 6;

    }else{
        console.log("PLEASE ENTER THE VALID MONTH NAME")
    }


    //--->>>Special dates:
    // Call the Leap year function, Check if is true and..

    let leap = isLeapYear(year);

    if ((leap === true && month === "January") || (leap === true && month === "February")){
        monthNum=-1;

         if( year >= 2100){
             monthNum += 4;

         } else if ( year >= 2000 ){
             monthNum += 6;

        } else if (  year >= 1800){
            monthNum += 2;

        } else if (  year >= 1700){
            monthNum += 4;

        } else if (  year >= 1600) {
            monthNum += 6;
        }
    }


    //--->>> Final Calculation, turning the number to the dayOfWeek
    //return to Main.js to get printed by console OUTSIDE function

    let weekday = (cal1 + cal2 + cal3 + day + monthNum) % 7;

    let daysOfWeek = ["Friday","Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    return daysOfWeek[weekday];
    // console.log( daysOfWeek[weekday]);
}



function isLeapYear (year){

    if((year % 4 ===0 || year % 400 ===0  ) && !year % 100 === 0){
        return true;
    }
    return false;
}
//--->>> https://www.mathsisfun.com/leap-years.html



function makeCalender() {
    const currentYear = "2021";
    let monthName;
    let monthsOfYear = ["January", "February", "March", "April", "May","June","July","August","September","October","November", "December"];

     for (let i = 0; i < monthsOfYear.length; i++) {

         monthName = monthsOfYear[i];

             if (monthName === "January" || monthName === "March" || monthName === "May" || monthName === "July" || monthName === "August" || monthName === "October" || monthName == "December") {


                 for (let i = 1; i <= 31; i++) {
                     let result = getDayOfTheWeek(i, monthName, currentYear)
                     console.log(`${monthName}-${i}-${currentYear} is a ${result} `)

                 }

             } else if (monthName === "April" || monthName === "June" || monthName === "September" || monthName === "November") {
                 for (let i = 1; i <= 30; i++) {
                     let result = getDayOfTheWeek(i, monthName, currentYear)
                     console.log(`${monthName}-${i}-${currentYear} is a ${result}`)

                 }
             } else {
                 for (let i = 1; i <= 28; i++) {

                     let result = getDayOfTheWeek(i, monthName, currentYear)
                     console.log(`${monthName}-${i}-${currentYear} is a ${result}`)
                 }
                 // console.log(`${months}-${days}-${years} is a ${}`)
             }

     }





}




module.exports = { getDayOfTheWeek, makeCalender};
