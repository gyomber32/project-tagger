import { Address } from "./Address";

export type User = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: Address;
    phone?: string;
    isAdmin?: boolean;
    isReceivingEmail?: boolean;
    forgottenPasswordToken?: string;
    forgottenPasswordTokenExpires?: number;
};