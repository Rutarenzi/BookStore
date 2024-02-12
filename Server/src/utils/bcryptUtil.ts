import {
    genSaltSync,
    hashSync,
    compareSync
} from 'bcryptjs';

class Bcrypt {
    static hash(password: string){
        const PswdSalt = genSaltSync(10);
        const PswdHashed = hashSync(password,PswdSalt)
        return PswdHashed
    }

    static compare(password1: string,password2: string){
        const validPswd = compareSync(password1,password2)
        return validPswd
    }
}

export default Bcrypt