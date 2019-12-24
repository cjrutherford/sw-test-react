import * as bcrypt from 'bcryptjs';

export const SaltedHash = async (pass) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(pass, salt);
        return hash;
    }catch(e) {
        throw e;
    }
}
