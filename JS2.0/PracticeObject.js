//object:
// 1.
const person = {
    Name: {
        firstName: "Ishmoth ",
        lastName: " Nuri",
    },
    id: 23,
    working: {
        deals: "richmedia",
        sector: {
            a: "takeover",
            b: "banner",
            c: {
                floating: {
                    type1: "right",
                    type2: "bottom",
                    type3: "left",
                }
            }
        }
    }
};

console.log(person.Name.lastName);
console.log(person.Name['lastName']);
console.log(person.working['sector']);
console.log(person['working']['sector']);
console.log(person['working']['sector']['c']['floating']['type2']);

person.working.sector.d = 'video';
person.demo='v1';
console.log(person);

delete person.demo;

console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));

// 2.
const employee = {
  id: 101,
  name: "joy",
  department: "IT"
};

Object.seal(employee);

employee.department = "Engineering";
delete employee.name;
employee.salary = 50000;

console.log(employee);


// 3.
const AUser = {
  role: "user",
  active: true
};

const BUser = Object.assign({}, AUser, {
  name: "Nuri",
  email: "nuri@mail.com"
});

console.log(BUser);

// 4.nultiple assign
const A = {
  role: "user",
  active: true
};
const B = {
  home: "dhaka",
  id: 1
};
const C = {
  adress: "mirpur",
  pass: '0111'
};
const all = Object.assign({}, A,B,C, {
  name: "Nuri",
  email: "nuri@mail.com"
});

const add = Object.create(A);
A.role = "admin";
console.log(add);
