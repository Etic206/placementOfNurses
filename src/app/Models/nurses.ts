import {Departments} from '../Models/departments'
export class Nurses {

    ID!: string;
    Last_Name!: string;
    First_Name!: string;
    Several_Hours_Per_Week!: number;
    DepartmentID!: number[]; 
    Wage!: number;
    Seniority!: number;

    constructor() { }
}