export default interface iEmployee {
  registration: string;
  salary: number;
  admissionDate: Date;

  generateRegistration(): string;
}
