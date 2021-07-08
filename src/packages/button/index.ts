import Button from './button.vue';
import  '../../styles/button.scss';

Button.install = (app:any) => {
    app.component(Button.name,Button)
}
export default Button;