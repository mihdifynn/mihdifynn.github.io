export interface styles {
    minHeight?: string;
    bgcolor?: string;
    color?: string;
    flexGrow?: number;
    display?: Record<string, string> | string;
    mr?: number;
    ml?: number;
    my?: number;
    width?: number | Record<string, string | number>;
    px?: number;
    textTransform?: string;
    height?: string;
    p?: number;
    textAlign?: string;
    backgroundImage?: (_: Record<string, any>) => string;
    justifyContent?: string;
    alignItems?: string;
    borderBottom?: number;
    borderColor?: string;
    '& b'?: Record<string, any>;
    m?: number;
    mb?: number;
    borderRadius?: number;
    flexWrap?: string
}