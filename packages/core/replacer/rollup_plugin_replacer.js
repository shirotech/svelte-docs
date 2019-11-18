import {CWD,INCLUDES,THEME} from './../constants';

const vars = {
    "@CWD": CWD,
    "@INCLUDES": INCLUDES,
    "@THEME": THEME,
}

export default function () {
    return {
        name: 'rollup_plugin_replacer',
        resolveId(id) { 
            return Object.keys(vars).reduce((str,v) => {
                return (id.startsWith(v)) ? id.replace(v,vars[v]) : str;
            },null);
        }
    }
}