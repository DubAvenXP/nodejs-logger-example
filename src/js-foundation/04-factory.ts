interface BuildMakePerson {
    generateUUID: () => string;
    getAge: (birthdate: string) => number;
}

interface Person {
    id: string;
    name: string;
    birthdate: string;
    age: number;
}

interface BuildPerson extends Omit<Person, "id" | "age"> {}


export const buildMakePerson = ({ generateUUID, getAge }: BuildMakePerson) => {
    return ({ name, birthdate }: BuildPerson): Person => {
        return {
            id: generateUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        };
    };
};
