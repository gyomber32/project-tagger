import axios from "axios";
import { loggedInUser } from "../Data/user";
import { User } from "../Types";

const loginPromise = new Promise<Partial<User>>((resolve, reject) => {
    setTimeout(() => {
        resolve(loggedInUser);
    }, 3000);
});

export const login = async (email: string, password: string, mock: boolean = false) => {
    try {
        if (mock) {
            return loginPromise;
        }
        const result = await axios.post<Partial<User>>("http://localhost:3000/login");
        return result;
    } catch (error) {
        throw error;
    }
}