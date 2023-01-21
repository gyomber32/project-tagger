import { User } from "../Types";

export const loggedInUser: Partial<User> = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@hotmail.com",
    address: {
        city: "New York",
        zipCode: "10001",
        street: "Park Avenue",
        houseNumber: "14"

    },
    isAdmin: false,
}