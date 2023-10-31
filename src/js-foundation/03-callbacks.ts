interface User {
    id: number;
    name: string;
};

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

export const getUserById = (id: number, callback: (err?: string, user?: User) => void)  => {
    const user = users.find(user => user.id === id);

    if (!user) return callback(`User with id: ${id} not found`);

    callback(undefined, user)
}
