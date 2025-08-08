import {defineConfig, presetWind3, presetAttributify, presetTypography} from 'unocss';

export default defineConfig({
    presets: [presetWind3(), presetAttributify(), presetTypography()],
    shortcuts: {
        clickable: 'text-primary cursor-pointer',
        btn: 'bg-primary bg-opacity-30 shadow py-3 px-3.5 border-none rounded-md',
        'btn-sm': 'py-2 px-2.5',
        panel: 'p-2 rounded-lg bg-white bg-opacity-10',
        input: 'rounded-md px-2 py-2.5 b-none bg-opacity-30 bg-white focus:bg-opacity-50 shadow'
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