// -- Promise --
//
// Promise может находиться в трёх состояниях:
//
// ожидание (pending): начальное состояние, не выполнено и не отклонено.
// выполнено (fulfilled): операция завершена успешно.
// отклонено (rejected): операция завершена с ошибкой.
//
// -- Методы --
//
// Promise.all(iterable) — Ожидает исполнения всех промисов или отклонения любого из них. Возвращает промис, который исполнится после исполнения всех промисов в iterable. В случае, если любой из промисов будет отклонен, Promise.all будет также отклонен.
// Promise.allSettled(iterable) — Ожидает завершения всех полученных промисов (как исполнения, так и отклонения). Возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены), содержащий массив результатов исполнения полученных промисов.
// Promise.race(iterable) — Ожидает исполнения или отклонения любого из полученных промисов. Возвращает промис, который будет исполнен или отклонен с результатом исполнения первого исполненного или отклонённого промиса из .iterable.
// Promise.reject(reason) — Возвращает промис, отклонённый из-за reason.
// Promise.resolve(value) — Возвращает промис, исполненный с результатом value.
//
// -- Пример --
//
// const URL = "https://jsonplaceholder.typicode.com/posts";
//
// function asyncHttpRequest (url) {
//   return new Promise((resolve, reject) => { // Возвращаем promise
//       if (url == undefined) // Если вдруг забыли передать url
//         reject(new Error("Expected url and received nothing"));
//       else {
//         resolve(() => {
//           fetch(url).then((response) => { // Создаём запрос
//             return response.json(); // Извлекаем содержимое тела JSON из ответа
//           }).then((myJson) => {
//             return(console.log(myJson)); // Выводим результат запроса в консоль
//           });
//         });
//       }
//     }
//   );}
//
// asyncHttpRequest(URL).then((result) => result(), (error) => console.log(error));
