export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: '#ffd803',
                },
                secondary: {
                    main: '#ff7403',
                },
                text: {
                    primary: '#272343',
                    secondary: '#2d334a',
                    disabled: '#52505b'
                },
                background: {
                    default: '#fffffe',
                    paper: '#e3f6f5'
                },
                sectionLight: {
                    background:'#fffffe',
                    headline: '#272343',
                    paragraph: '#2d334a',
                    link: '#ffd803',
                },
                sectionDark: {
                    background:'#e3f6f5',
                    headline: '#272343',
                    paragraph: '#2d334a',
                    link: '#272343',
                },
                form: {
                    background: '#e3f6f5',
                    input: '#fffffe',
                    label: '#272343',
                    button: '#272343',
                    buttonText: '#fffffe',
                },
                cardLight: {
                    background: '#fffffe',
                    heading: '#272343',
                    subHeading: '#2d334a',
                    paragraph: '#2d334a',
                    button: '#bae8e8',
                    buttonText: '#fffffe',
                    stroke: '#bae8e8',
                },
                cardDark: {
                    background: '#272343',
                    heading: '#fffffe',
                    subHeading: '#2d334a',
                    paragraph: '#fffffe',
                    button: '#ffd803',
                    buttonText: '#272343',
                    stroke: '#272343',
                },
                header: {
                    main: '#64748B',
                    contrastText: '#fff',
                },
                footer: {
                    background: '#fffffe',
                    headline: '#272343',
                    paragraph: '#2d334a',
                    link: '#ffd803'
                },
            }
            : {
                primary: {
                    main: '#ff8906',
                },
                secondary: {
                    main: '#e53170',
                },
                text: {
                    primary: '#fffffe',
                    secondary: '#a7a9be',
                    disabled: '#52505b'
                },
                background: {
                    default: '#0f0e17',
                    paper: '#27253c'
                },
                sectionDark: {
                    background:'#fffffe',
                    headline: '#0f0e17',
                    paragraph: '#2e2f3e',
                    link: '#e53170',
                },
                sectionLight: {
                    background:'#0f0e17',
                    headline: '#fffffe',
                    paragraph: '#a7a9be',
                    link: '#ff8906',
                },
                form: {
                    background: '#fffffe',
                    input: '#0f0e17',
                    label: '#fffffe',
                    button: '#e53170',
                    buttonText: '#fffffe',
                },
                cardDark: {
                    background: '#fffffe',
                    heading: '#0f0e17',
                    subHeading: '#211f34',
                    paragraph: '#2e2f3e',
                    button: '#ff8906',
                    buttonText: '#fffffe',
                    stroke: '#e53170',
                },
                cardLight: {
                    background: '#0f0e17',
                    heading: '#fffffe',
                    subHeading: '#2e2f3e',
                    paragraph: '#a7a9be',
                    button: '#e53170',
                    buttonText: '#fffffe',
                    stroke: '#2e2f3e',
                },
                header: {
                    main: '#64748B',
                    contrastText: '#fff',
                },
                footer: {
                    background: '#0f0e17',
                    headline: '#fffffe',
                    paragraph: '#a7a9be',
                    link: '#ff8906'
                },
        }),
    },
    spacing: 4,
    typography: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        body1: {
            fontWeight: 500,
        },
        button: {
            fontStyle: 'bold',
        },
    },
});