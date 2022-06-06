'use strict';

// Список курсов
let courses = [
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in Germany', prices: [500, null] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in France', prices: [null, null] }
]
  
// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200]
let requiredRange2 = [100, 350]
let requiredRange3 = [200, null]
  
// Решение
const filterCourses = ([from, to]) => {
  return courses.filter(item => {
    const priceFrom = item.prices[0];
    const priceTo = item.prices[1];
    // Не понял, что значит [null, null], на всякий случай сделал проверку
    if([priceFrom, priceTo].every(a => a === null)) {
      return false 
    }
    if([0, null].some(i => i === from) || to !== null) {
        if(priceFrom >= 0 && priceFrom <= to) {
          return true
      }
    }
    if(to === null){
      if(priceFrom > 0 || priceFrom === null){
        return true
      }
    }
  });
};
console.log(filterCourses(requiredRange1));
console.log(filterCourses(requiredRange2));
console.log(filterCourses(requiredRange3));


