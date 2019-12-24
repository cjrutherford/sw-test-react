import IPFS from 'ipfs';

export class IpfsService{
    async constructor(){
        this.node = await IPFS.create();

    }
}