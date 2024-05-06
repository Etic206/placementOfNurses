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
      Wage: 12500,
      Seniority: 3,
      Password:"1234"

    },
    {
      ID: "208804326",
      Last_Name: "Volin",
      First_Name: "Baki",
      Several_Hours_Per_Week: 32,
      Wage: 8500,
      Seniority: 4,
      Password:"1234"

    },
    {
      ID: "564298723",
      Last_Name: "Toto",
      First_Name: "Amanda",
      Several_Hours_Per_Week: 40,
      Wage: 7500,
      Seniority: 2,
      Password:"1234"

    },
    {
      ID: "456598230",
      Last_Name: "Dior",
      First_Name: "Vianna",
      Several_Hours_Per_Week: 48,
      Wage: 17000,
      Seniority: 9,
      Password:"1234"

    },
    {
      ID: "122365018",
      Last_Name: "Roy",
      First_Name: "Shina",
      Several_Hours_Per_Week: 32,
      Wage: 13500,
      Seniority: 6,
      Password:"1234"

    },
    {
      ID: "421950125",
      Last_Name: "Silver",
      First_Name: "Bianka",
      Several_Hours_Per_Week: 32,
      Wage: 15000,
      Seniority: 7,
      Password:"1234"

    },
    {
      ID: "502159810",
      Last_Name: "Boni",
      First_Name: "Namma",
      Several_Hours_Per_Week: 32,
      Wage: 9000,
      Seniority: 2,
      Password:"1234"

    },
    {
      ID: "206654124",
      Last_Name: "Mon",
      First_Name: "Dora",
      Several_Hours_Per_Week: 40,
      Wage: 10000,
      Seniority: 3,
      Password:"1234"

    },
    {
      ID: "122321058",
      Last_Name: "Larin",
      First_Name: "Rona",
      Several_Hours_Per_Week: 40,
      Wage: 8500,
      Seniority: 4,
      Password:"1234"

    },
    {
      ID: "123258012",
      Last_Name: "Berg",
      First_Name: "Shrona",
      Several_Hours_Per_Week: 24,
      Wage: 7000,
      Seniority: 1,
      Password:"1234"

    },
    {
      ID: "459852510",
      Last_Name: "Viva",
      First_Name: "Orna",
      Several_Hours_Per_Week: 48,
      Wage: 12500,
      Seniority: 5,
      Password:"1234"

    },
    {
      ID: "205598213",
      Last_Name: "Gorg",
      First_Name: "Stella",
      Several_Hours_Per_Week: 40,
      Wage: 7500,
      Seniority: 2,
      Password:"1234"

    },
    {
      ID: "895962102",
      Last_Name: "Pingog",
      First_Name: "Tuyti",
      Several_Hours_Per_Week: 48,
      Wage: 13000,
      Seniority: 7,
      Password:"1234"

    },
    {
      ID: "840210236",
      Last_Name: "Filan",
      First_Name: "Irena",
      Several_Hours_Per_Week: 24,
      Wage: 8000,
      Seniority: 3,
      Password:"1234"
    }]

    findNurse(username: string, password: string): Nurses | null {
      const foundNurse = this.list.find(nurse => nurse.ID === username && nurse.Password === password);
      if (foundNurse) {
        return foundNurse;
      } else {
        return null; 
      }
    }
    
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
  getNurseById(Nurses: any[], nurseId: string): any {
    const foundNurse = Nurses.find(nurse => nurse.ID === nurseId);
 
  
    if (foundNurse) {
      return {
        First_Name: foundNurse.First_Name.toUpperCase(),
        Last_Name: foundNurse.Last_Name.toUpperCase()
      };
    } else {
      return null; // Return null if nurse with the specified ID is not found
    }      
  }

  getNurseDetailsList(nurses: any[]): any[] {
    console.log('אני בתוך getNurseDetailsList')
    console.log(NursesService);
    console.log('--------')
    console.log(this.list[0].First_Name)

    return nurses.map(nurse => {
      return {
        First_Name: nurse.First_Name,
        Last_Name: nurse.Last_Name, // Add any other relevant properties here
        ID: nurse.ID,
        DepartmentName: nurse.DepartmentName,

      };
    });
  }
}



