import Button from './button';
import WaveLoading from './loading';

const plugins = [
    Button,
    WaveLoading
];

const install = (app:any) => {
    plugins.forEach(plugin => app.use(plugin));
}

export default {
    install
}

export {
    Button,
    WaveLoading,
}