react-superellipse [![npm version](https://badge.fury.io/js/react-superellipse.svg)](https://badge.fury.io/js/react-superellipse)
-----

[example](https://quadflask.github.io/react-superellipse/)

![](https://raw.githubusercontent.com/QuadFlask/react-superellipse/master/example/example.png)


## What is this?

React component for Create [Superellipse](https://en.wikipedia.org/wiki/Superellipse) (or [Squircle](https://en.wikipedia.org/wiki/Squircle)) mask using svg and css `mask-image` attribute.

iOS app icon is Squircle and KakaoTalk profile is Superellipse shape.


## example

```tsx
import SuperEllipse from "react-superellipse";

<SuperEllipse width={64} height={64} r1={0.2} r2={0.5}>
    {/* children */}
</SuperEllipse>

// or using preset

import {Preset} from "react-superellipse";
// preset for iOS squircle or Kakaotalk superellipse

<SuperEllipse width={64} height={64} r1={Preset.iOS.r1} r2={Preset.iOS.r2}>
    {/* children */}
</SuperEllipse>
```


## component

### `SuperEllipse`

> Wrapper div component

```ts
interface SuperEllipseProps {
    width: number;
    height: number;
    style?: CSSProperties;
    r1?: number; // 0 ~ 0.5
    r2?: number; // 0 ~ 0.5
}
```

### `SuperEllipseImg`

```ts
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
```
