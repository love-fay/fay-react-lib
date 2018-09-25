export const encodeHash = ({pathname='', search='', hash=''}) => {
    return encodeURIComponent(JSON.stringify({pathname, search, hash}));
};

export const decodeHash = (hash) => {
    const defaultHash = {pathname:'', search:'', hash:''};
    if(hash && hash.startsWith('#')){
        return {...defaultHash, ...JSON.parse(decodeURIComponent(hash.slice(1)))};
    }
    return defaultHash;
};
