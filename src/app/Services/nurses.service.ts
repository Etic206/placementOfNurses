import { Injectable } from '@angular/core';
import { Nurses } from '../Models/nurses';
import { DepartmentService } from '../Services/department.service';
import { Departments } from '../Models/departments';

@Injectable({
  providedIn: 'root'
})
export class NursesService {
  list: Nurses[] = [
    {
      ID: "123456782",
      Last_Name: "Roy",
      First_Name: "Shina",
      Several_Hours_Per_Week: 48,
      DepartmentID: [0, 1, 8],
      Wage: 12500,
      Seniority: 3
    },
    {
      ID: "208804326",
      Last_Name: "Volin",
      First_Name: "Baki",
      Several_Hours_Per_Week: 32,
      DepartmentID: [7, 2, 3],
      Wage: 8500,
      Seniority: 4
    },
    {
      ID: "564298723",
      Last_Name: "Toto",
      First_Name: "Amanda",
      Several_Hours_Per_Week: 40,
      DepartmentID: [0, 4, 3],
      Wage: 7500,
      Seniority: 2
    },
    {
      ID: "456598230",
      Last_Name: "Dior",
      First_Name: "Vianna",
      Several_Hours_Per_Week: 48,
      DepartmentID: [1, 5, 4],
      Wage: 17000,
      Seniority: 9
    },
    {
      ID: "122365018",
      Last_Name: "Roy",
      First_Name: "Shina",
      Several_Hours_Per_Week: 32,
      DepartmentID: [6, 2, 4],
      Wage: 13500,
      Seniority: 6
    },
    {
      ID: "421950125",
      Last_Name: "Silver",
      First_Name: "Bianka",
      Several_Hours_Per_Week: 32,
      DepartmentID: [6, 2, 1],
      Wage: 15000,
      Seniority: 7
    },
    {
      ID: "502159810",
      Last_Name: "Boni",
      First_Name: "Namma",
      Several_Hours_Per_Week: 32,
      DepartmentID: [0, 1, 8],
      Wage: 9000,
      Seniority: 2
    },
    {
      ID: "206654124",
      Last_Name: "Mon",
      First_Name: "Dora",
      Several_Hours_Per_Week: 40,
      DepartmentID: [2, 7, 3],
      Wage: 10000,
      Seniority: 3
    },
    {
      ID: "122321058",
      Last_Name: "Larin",
      First_Name: "Rona",
      Several_Hours_Per_Week: 40,
      DepartmentID: [4, 8, 2],
      Wage: 8500,
      Seniority: 4
    },
    {
      ID: "123258012",
      Last_Name: "Berg",
      First_Name: "Shrona",
      Several_Hours_Per_Week: 24,
      DepartmentID: [6, 2, 5],
      Wage: 7000,
      Seniority: 1
    },
    {
      ID: "459852510",
      Last_Name: "Viva",
      First_Name: "Orna",
      Several_Hours_Per_Week: 48,
      DepartmentID: [4, 6, 8],
      Wage: 12500,
      Seniority: 5
    },
    {
      ID: "205598213",
      Last_Name: "Gorg",
      First_Name: "Stella",
      Several_Hours_Per_Week: 40,
      DepartmentID: [3, 2, 4],
      Wage: 7500,
      Seniority: 2
    },
    {
      ID: "895962102",
      Last_Name: "Pingog",
      First_Name: "Tuyti",
      Several_Hours_Per_Week: 48,
      DepartmentID: [0, 1, 3],
      Wage: 13000,
      Seniority: 7
    },
    {
      ID: "840210236",
      Last_Name: "Filan",
      First_Name: "Irena",
      Several_Hours_Per_Week: 24,
      DepartmentID: [3, 7, 8],
      Wage: 8000,
      Seniority: 3
    }]


  addNurse(newNurse: Nurses) {
    this.list.push(newNurse);

  }
  editNurse(nurseID: string, updatedNurse: Nurses) {
    const nurseIndex = this.list.findIndex(nurse => nurse.ID === nurseID);
    if (nurseIndex !== -1) {
      this.list[nurseIndex] = updatedNurse;
    } else {
      console.error("Nurse not found with ID: " + nurseID);
    }
  }
  
  deleteNurse(nurseID: string) {
    const nurseIndex = this.list.findIndex(nurse => nurse.ID === nurseID);
    if (nurseIndex !== -1) {
      this.list.splice(nurseIndex, 1);
    } else {
      console.error("Nurse not found with ID: " + nurseID);
    }
  }
}



