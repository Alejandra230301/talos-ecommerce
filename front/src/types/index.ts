export interface LoginProps{
    email: string;
    password: string
}

export interface LoginErrorProps{
    email?: string;
    password?: string
}

export interface RegisterProps{
    name: string;
    email: string;
    password: string
    confirm: string;
    [key: string]: string;
}

export interface RegisterErrorProps{
    name: string;
    email: string;
    password: string
    confirm: string;
    [key: string]: string;
}

