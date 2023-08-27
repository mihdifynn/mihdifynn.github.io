export interface styles {
    minHeight?: string;
    bgcolor?: string;
    color?: string;
    flexGrow?: number;
    display?: Record<string, string> | string;
    mr?: number;
    ml?: number;
    my?: number;
    width?: number;
    px?: number;
    textTransform?: string;
    height?: string;
    p?: number;
    textAlign?: string;
    backgroundImage?: (_:Record<string, any>) => string;
    justifyContent?: string;
    alignItems?: string
}