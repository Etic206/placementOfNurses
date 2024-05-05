import { Injectable } from '@angular/core';
import { Departments } from '../Models/departments'


@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  list: Departments[] = [
    {
      ID: 0,
      DepartmentName: "Children",
      Total_Shift_Nurses: 3
    },
    {
      ID: 1,
      DepartmentName: "ICU",
      Total_Shift_Nurses: 4
    },
    {
      ID: 2,
      DepartmentName: "Maternity",
      Total_Shift_Nurses: 2
    },
    {
      ID: 3,
      DepartmentName: "Heart",
      Total_Shift_Nurses: 3
    },
    {
      ID: 4,
      DepartmentName: "Orthopedics",
      Total_Shift_Nurses: 2
    },
    {
      ID: 5,
      DepartmentName: "Emergency",
      Total_Shift_Nurses: 4
    },
    {
      ID: 6,
      DepartmentName: "Cardiology",
      Total_Shift_Nurses: 3
    },
    {
      ID: 7,
      DepartmentName: "ENT",
      Total_Shift_Nurses: 2
    },
    {
      ID: 8,
      DepartmentName: "Surgery",
      Total_Shift_Nurses: 3
    },
  ]


  constructor() { }

  addDepartment(newDepartment: Departments) {
    const departmentExists = this.list.some(dept => dept.DepartmentName === newDepartment.DepartmentName);

    if (!departmentExists) {
      this.list.push(newDepartment);
      console.log("Department added successfully");
    } else {
      console.error("Department already exists");
    }
  }

  editDepartment(departmentID: number, updatedDepartment: Departments) {
    const departmentIndex = this.list.findIndex(dept => dept.ID === departmentID);

    if (departmentIndex !== -1) {
      this.list[departmentIndex] = updatedDepartment;
      console.log("Department edited successfully");
    } else {
      console.error("Department not found with ID: " + departmentID);
    }
  }

  deleteDepartment(departmentID: number) {
    const departmentIndex = this.list.findIndex(dept => dept.ID === departmentID);

    if (departmentIndex !== -1) {
      this.list.splice(departmentIndex, 1);
      console.log("Department deleted successfully");
    } else {
      console.error("Department not found with ID: " + departmentID);
    }
  }
}
