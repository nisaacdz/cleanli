export interface Bin {
    id: string;
    capacity: string;
    condition: string;
}

export interface Site {
    serial: string;
    name: String,
    digital_address: string;
    description: string;
    contact: string;
    bins: Bin[];
}

export interface Billing {
    card: string;
    number: string;
}

export interface User {
    name: string;
    email: string;
    contact: string;
    billing: Billing;
    sites: Site[];
}

export interface Admin {
    name: string;
    email: string;
    contact: string;
    id: string;
}