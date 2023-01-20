import axios from "axios";

export const login = async (email: string, password: string) => {
    try {
        const user = await axios.post("http://localhost:3000/login");
        return user;
    } catch (error) {
        throw error;
    }
}