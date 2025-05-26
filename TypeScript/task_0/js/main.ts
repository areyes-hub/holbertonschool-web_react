// js/main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableHeader = document.createElement('tr');

const header1 = document.createElement('th');
header1.textContent = 'First Name';

const header2 = document.createElement('th');
header2.textContent = 'Location';

tableHeader.appendChild(header1);
tableHeader.appendChild(header2);
table.appendChild(tableHeader);

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
