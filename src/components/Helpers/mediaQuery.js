const size = {
    mobileSmall: '320px',
    mobile: '480px',
    tablet: '768px',
    tabletBig: '960px', // 960px Tablets no formato paisagem e alguns monitores mais antigos
    desktop: '1200px' // 1200px Desktops, notebooks com monitores widescreen
}

export const mediaQuery = {
    mobileSmall: `(max-width: ${size.mobileSmall})`,
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    tabletBig: `(max-width: ${size.tabletBig})`,
    desktop: `(max-width: ${size.desktop})`,
}