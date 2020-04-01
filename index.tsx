import React, {CSSProperties, FC} from "react";
import {calcSuperEllipsePath, getSuperEllipsePathAsDataUri, Preset} from "superellipsejs";

interface SuperEllipseProps {
    width: number;
    height: number;
    style?: CSSProperties;
    r1?: number;
    r2?: number;
}

const SuperEllipse: FC<SuperEllipseProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const w = props.width;
    const h = props.height;
    let {r1 = w * Preset.iOS.r1, r2 = w * Preset.iOS.r2} = props;
    const {dataUri} = getSuperEllipsePathAsDataUri(w, h, r1, r2);
    return <div {...props} style={{
        ...props.style,
        width: props.width,
        height: props.height,
        maskImage: `url("${dataUri}")`,
        maskPosition: 'center',
        maskRepeat: 'no-repeat',
        // maskSize: 'contain',
        WebkitMaskImage: `url("${dataUri}")`,
        WebkitMaskPosition: 'center',
        WebkitMaskRepeat: 'no-repeat',
        // WebkitMaskSize: 'contain'
    }}>{props.children}</div>
}

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

export const SuperEllipseImg = (props: SuperEllipseImgProps) => {
    const w = props.width;
    const h = props.height;
    const {r1 = w * Preset.iOS.r1, r2 = w * Preset.iOS.r2} = props;
    const {strokeWidth = 0, strokeColor = 'rgba(255,255,255,0.5)', backgroundColor} = props;
    const path = calcSuperEllipsePath(w, h, r1, r2);
    const id = `super-ellipse-${w}-${h}-${r1}-${r2}`;

    return <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={props.style}>
        <defs>
            <clipPath id={id}>
                <path fill="#000" stroke="none" d={path}/>
            </clipPath>
        </defs>
        <g clipPath={`url(#${id})`}>
            {
                backgroundColor &&
                <rect width={w} height={h} fill={backgroundColor}/>
            }
            <image href={props.href} width={w} height={h} preserveAspectRatio="none"/>
            {
                strokeWidth > 0 &&
                <path stroke={strokeColor} strokeWidth={strokeWidth * 2} fill="none" d={path}/>
            }
        </g>
    </svg>
}

export {Preset}

export default SuperEllipse;
