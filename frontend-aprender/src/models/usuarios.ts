export interface TeamUser {
    teamUser: string,
    teamPassword: string,
};

export interface SchoolUser {
    schoolUser: string,
    schoolPassword: string,
};

export interface userAuth {
    userName: string,
    type: string,
    isAuthenticated: boolean,
}