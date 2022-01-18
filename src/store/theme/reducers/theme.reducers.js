export function toggleTheme(state) {
    if(state.mode === 'light') {
        state.mode = 'dark'
    } else {
        state.mode = 'light'
    }
}