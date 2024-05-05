export enum ShiftType {
    Morning = 'Morning',
    Afternoon = 'Afternoon',
    Evening = 'Evening'
}

export class Shifts {

    ID!: number;
    DepartmentName!: string;
    Date!: Date;
    ShiftType!: ShiftType;

    constructor() { }
}