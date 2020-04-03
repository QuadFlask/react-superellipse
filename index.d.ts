import React, { CSSProperties, FC } from "react";
import { Preset } from "superellipsejs";
interface SuperEllipseProps {
    width: number;
    height: number;
    style?: CSSProperties;
    r1?: number;
    r2?: number;
    p1?: number;
    p2?: number;
}
declare const SuperEllipse: FC<SuperEllipseProps & React.HTMLAttributes<HTMLDivElement>>;
export interface SuperEllipseImgProps {
    width: number;
    height: number;
    href: string;
    style?: CSSProperties;
    r1?: number;
    r2?: number;
    backgroundColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
}
export declare const SuperEllipseImg: (props: SuperEllipseImgProps) => JSX.Element;
export { Preset };
export default SuperEllipse;
