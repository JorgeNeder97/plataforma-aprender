export interface TeamUser {
    teamUser: string,
    teamPassword: string,
};

export interface SchoolUser {
    schoolUser: string,
    schoolPassword: string,
};

export interface teamUserAuth {
    teamAccessToken: string,
    teamRefreshToken: string,
    userId: string,
    userName: string,
    isAuthenticated: boolean,
};

export interface schoolUserAuth {
    schoolAccessToken: string,
    isAuthenticated: boolean,
};