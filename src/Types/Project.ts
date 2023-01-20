import { Address } from "./Address";

type Image = {
    path: string;
    isThumbnail: boolean;
}

export type Project = {
    id: string;
    title: string;
    description: string;
    address: Address;
    images: Image[]
    userId: string;
}