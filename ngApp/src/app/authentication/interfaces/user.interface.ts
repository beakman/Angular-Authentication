export interface UserInterface {
    _id: string;
    payload: {
        email: string;
        name: string;
        exp: number;
        iat: number;
    };
}
