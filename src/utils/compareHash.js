import * as bcrypt from 'bcryptjs';

export const CompareHash = async (string, hash) => {
    try{
        const comparison = await bcrypt.compare(string, hash);
        if(!comparison) throw new Error('unable to compare string to hash');
        return comparison;
    }catch(e) {
        throw e;
    }
}