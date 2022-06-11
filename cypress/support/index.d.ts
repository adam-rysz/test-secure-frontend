declare namespace Cypress {
    interface Chainable {
        login(username: string, password: string): void;
        register(username: string, password: string, firstName: string, lastName: string, email: string): void;
    }
}