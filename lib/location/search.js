export const add = (location, data, remember=true) => {
    return {...location, search: '?search='+ encodeURIComponent(JSON.stringify(remember?{...get(location) || {},...data}:data))}
};

export const get = ({search}) => {
    if(search && search.startsWith('?search=')){
        return JSON.parse(decodeURIComponent(search.split('?search=')[1]));
    }
    return null;
};
