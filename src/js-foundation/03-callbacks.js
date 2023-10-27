const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const getUserById = (id, callback)  => {
    const user = users.find(user => user.id === id);

    if (!user) return callback(`User with id: ${id} not found`);

    callback(null, user)
}

module.exports = { getUserById };
