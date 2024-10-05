//Without any constructor:
class Employee
{
    id=1001;
    ename="SREESHMA";
    displayInfo()
    {
        console.log(this.id+" "+this.ename);
    }
}
let emp=new Employee();
emp.displayInfo();