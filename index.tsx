import React, {CSSProperties} from "react";
import {calcSuperEllipsePath, getSuperEllipsePathAsDataUri, Preset} from "superellipsejs";
import useMeasure from 'react-use-measure';

export interface SuperEllipseProps {
    r1?: number;
    r2?: number;
    p1?: number;
    p2?: number;
}

interface Bounds {
    readonly width: number;
    readonly height: number;
}

function SuperEllipse(props: SuperEllipseProps & React.HTMLAttributes<HTMLDivElement>) {
    const [ref, bounds] = useMeasure();

    return <div {...props} ref={ref} style={{
        ...props.style,
        ...getMaskStyle(bounds, props)
    }}>{props.children}</div>;
}

export function getMaskStyle(bounds: Bounds, props: SuperEllipseProps): CSSProperties {
    const w = bounds.width;
    const h = bounds.height;
    const {r1 = Preset.iOS.r1, r2 = Preset.iOS.r2, p1, p2} = props;
    const {dataUri} = getSuperEllipsePathAsDataUri(w, h, p1 !== undefined ? p1 : r1 * Math.min(w, h), p2 !== undefined ? p2 : r2 * Math.min(w, h));
    return {
        maskImage: `url("${dataUri}")`,
        maskPosition: 'center',
        maskRepeat: 'no-repeat',
        // maskSize: 'contain',
        WebkitMaskImage: `url("${dataUri}")`,
        WebkitMaskPosition: 'center',
        WebkitMaskRepeat: 'no-repeat',
        // WebkitMaskSize: 'contain'
    };
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
    const {r1 = Preset.iOS.r1, r2 = Preset.iOS.r2} = props;
    const {strokeWidth = 0, strokeColor = 'rgba(255,255,255,0.5)', backgroundColor} = props;
    const path = calcSuperEllipsePath(w, h, r1 * Math.min(w, h), r2 * Math.min(w, h));
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
