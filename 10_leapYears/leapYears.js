const leapYears = function(year) {
    // isleapYear
    if((year % 100 != 0)){
        if((year % 4 == 0)) return true;
        // notleapYear
        else return false;
    }
    // notleapYear
    else if((year % 100 == 0) && (year % 400 == 0)) return true;
    
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
