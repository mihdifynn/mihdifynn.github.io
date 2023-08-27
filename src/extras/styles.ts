import { styles } from './interfaces';
import bannerImage from '../static/banner.jpg';


export const sxParent: Readonly<styles> = {
    minHeight: '100vh',
    bgcolor: 'background.default',
    color: 'text.primary'
}

export const sxHeader: Record<string, Readonly<styles>> = {
    logo: {
        flexGrow: 1,
        color: 'primary.main'
    },
    largeItems: {
        display: {
            xs: 'none',
            sm: 'block'
        }
    },
    iconButton: {
        mr: 2,
        ml: -2.5,
        display: {
            sm: 'none'
        }
    },
};

export const sxDrawer: Record<string, Readonly<styles>> = {
    logo: {
        my: 2,
        color: 'primary.main'
    },
    main: {
        width: 240,
        px: 2,
        textTransform: 'capitalize',
        bgcolor: 'background.paper',
        minHeight: '100vh'
    },
    drawer: {
        display: {
            xs: 'block',
            sm: 'none'
        },
    }
}

export const sxBanner: Record<string, Readonly<styles>> = {
    parent: {
        bgcolor: 'primary.main',
        height: '100vh',
        backgroundImage: (theme: Record<string, any>): string => `linear-gradient(
                180deg,
                rgba(0, 0, 0, 0),
                ${theme.palette.background.paper}
            ), url(${bannerImage})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export const sxFooter: Record<string, Readonly<styles>> = {
    parent: {
        p: 1,
        textAlign: 'center'
    }
}