import { Nurses } from '../Models/nurses'
import { Shifts } from '../Models/shifts'

export class NursesShifts {

    ID!: number;
    ID_Nurse!: Nurses;
    ID_Shifts!: Shifts;

    constructor() { }
}