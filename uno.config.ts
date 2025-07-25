import {defineConfig, presetWind3, presetAttributify, presetTypography} from 'unocss';

export default defineConfig({
    presets: [presetWind3(), presetAttributify(), presetTypography()],
    shortcuts: {
        clickable: 'text-primary cursor-pointer',
        btn: 'bg-primary opacity-30 shadow ml-2 mr-2 py-3 px-3.5 border-none rounded-md',
        'btn-sm': 'py-2 px-2.5',
        panel: 'p-2 rounded-lg bg-white bg-opacity-10',
        'panel-1': 'bg-white bg-opacity-5',
        'panel-2': 'bg-white bg-opacity-10',
        'panel-3': 'bg-white bg-opacity-15',
        'panel-4': 'bg-white bg-opacity-20',
    },
    theme: {
        colors: {
            black: '#121212',
            // https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors
            primary: '#5eead4', // teal-300
            secondary: '#ea5e73',
            tertiary: {
                green: '#5eea8f',
                blue: '#5eb9ea',
                midblue: '#5e73ea',
                purple: '#d55eea',
            }
        }
    }
});