export const getAge = (birthdate: string) => {
    if (!birthdate) { throw new Error('birthdate is required'); }

    return Math.floor((new Date().getTime() - new Date(birthdate).getTime()) / 31536000000);
}
