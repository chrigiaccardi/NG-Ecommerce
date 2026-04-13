export interface User {
    id: string;
    email: string;
    name: string;
    imageUrl: string;
}

export interface SignUpParams {
    name: string;
    email: string;
    password: string;
    checkout?: boolean;
    dialogId: string;
}

// in questo caso il tipo SignInParams è uguale a SignUpParams ma omette il dato 'name'
export type SignInParams = Omit <SignUpParams, 'name'>
