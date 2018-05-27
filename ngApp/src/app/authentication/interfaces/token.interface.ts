interface TokenInterface {
    token: string;
}

export interface TokenPayload {
    email: string;
    password: string;
    name?: string;
}
