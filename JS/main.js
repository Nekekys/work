function main (form){
    var fail = false;
    var day = form.day.value;
    var month = form.month.value;
    var year = form.year.value;
    
    
    
    if( ( (day == 'День')&(month == 'Месяц') ) || ( (day == 'День')  & (year == 'Год') ) || ( (month == 'Месяц')  & (year == 'Год') )  ){
        alert("Вы не ввели данные");
         return false;
    }
    
    
    
    if(day == 'День'){
        alert("Вы не ввели День");
         return false;
    }
    if(month == 'Месяц'){
        alert("Вы не ввели Месяц");
         return false;
    }
    if(year == 'Год'){
        alert("Вы не ввели Год");
         return false;
    }
    
    
    
    var month_numd = 0; 
    var day_n = Number(day);
    
    if(month == 'Январь'){month_numd = 1};
    if(month == 'Февраль'){month_numd = 2};
    if(month == 'Март'){month_numd = 3};
    if(month == 'Апрель'){month_numd = 4};
    if(month == 'Май'){month_numd = 5};
    if(month == 'Июнь'){month_numd = 6};
    if(month == 'Июль'){month_numd = 7};
    if(month == 'Август'){month_numd = 8};
    if(month == 'Сентябрь'){month_numd = 9};
    if(month == 'Октябрь'){month_numd = 10};
    if(month == 'Ноябрь'){month_numd = 11};
    if(month == 'Декабрь'){month_numd = 12};
     
   if(((month_numd == 2)&(day_n == 30))||((month_numd == 2)&(day_n == 31))||((month_numd == 4)&(day_n == 31))||((month_numd == 6)&(day_n == 31))||((month_numd == 9)&(day_n == 31))||((month_numd == 11)&(day_n == 31))){
       alert("Не правильные данные");
        return false;
   };
    
    

    

    var n = 55 - day_n - month_numd*2;
    alert(n);
    
function goToPage()
{
	document.html = 'audio.html';
}

alert(n);
    
    
};