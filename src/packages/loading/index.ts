import WaveLoading from './waveLoading.vue';
import '../../styles/loading.scss';

WaveLoading.install = (app: any) => {
    app.component(WaveLoading.name, WaveLoading)
}
export default WaveLoading;
