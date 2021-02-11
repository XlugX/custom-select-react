import {createContext} from 'react';

export const select = createContext({
    name: '',
    show: false,
    setShow: () => {},
    onChange: () => {}
})