// Создать класс Employee у которого будут следующие поля (задаются через конструктор):

// firstName - тип string
// lastName - тип string
// age - тип number
// jobPosition - тип string
// salary - тип number
// К данному классу, также необходимо добавить:

// “геттер” fullName - который будет выводить полное имя (комбинация firstName и lastName)
// добавить статический свойство - "кол-во дней отпуска в году" = 18
// добавить метод, который будет считать годовую зарплату сотрудника

class Employee {
  static holidayDays = 18;
  constructor(name, surname, age, jobPosition, salary) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }

 get fullName(){
   return `${this.name} ${this.surname}`
 }

  get info() {
    return (this.salary*12 + "$");
  }



  static holiday() {
    console.log("18 days holiday");
  }

}
// this.sayHi = function (message = "Hi") {
//   console.log(`${message}, ${this.name} ${this.surname}`);
// };
// this.yearSalary = function (salary = "1000") {
//   console.log(`${salary}*12`);
// };

const employee1 = new Employee("Irishka", "Valentinovna", 21, "IT-recruter",1000  );
const employee2 = new Employee("Misha", "Nguyen", 19, "Full-stuck developer", 4500 );
console.log(employee1);
console.log(employee2);
console.log(employee1.fullName);
console.log(employee1.info);
console.log(employee2.fullName);
console.log(employee2.info);
Employee.holiday();
// Создать 2 экземпляра этого класса (по аналогии с cat1, cat2 - как делали на занятии).