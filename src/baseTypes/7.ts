/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  MONDAY= 'monday',
  TUESDAY = 'tuesday', 
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thuersday',
  FRIDAY = 'friday',
  SATURDAY= 'saturday',
  SUNDAY = "sunday"
      };

const isWeekend = (day:DayOfWeek): boolean =>{
  if(day === DayOfWeek.SATURDAY || day === DayOfWeek.SUNDAY){
    return true;
  }
  return false;
}

