import React, {FC, useState} from 'react';
import './App.css';
import SuperEllipse, {Preset, SuperEllipseImg} from "react-superellipse";

const size = 512;
const imgSrc = "https://images.unsplash.com/photo-1585572336833-4f34f2101c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60";

function App() {
    const [r1, setR1] = useState(Preset.KakaoTalk.r1);
    const [r2, setR2] = useState(Preset.KakaoTalk.r2);
    const p1 = 4;
    const p2 = 24;

    return <div className="App">
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="super-ellipse" style={{
                display: 'flex',
                margin: 12,
                borderRadius: 120,
                overflow: "hidden",
                width: size,
                height: size,
                minWidth: size,
                boxSizing: "border-box",
            }}>
                <img src="https://images.unsplash.com/photo-1585572336833-4f34f2101c18?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60" width={size} height={size}/>
                <PresetName>
                    <span>round rect</span>
                    <small>border-radius: 120px</small>
                </PresetName>
            </div>
            <SuperEllipse style={{width: size, height: size}} r1={Preset.iOS.r1} r2={Preset.iOS.r2} className="super-ellipse">
                <img src={imgSrc} width={size} height={size}/>
                <PresetName>
                    <span>iOS</span>
                    <small>r1: {Preset.iOS.r1}, r2: {Preset.iOS.r2}</small>
                </PresetName>
            </SuperEllipse>
            <SuperEllipse style={{width: size, height: size}} r1={Preset.KakaoTalk.r1} r2={Preset.KakaoTalk.r2} className="super-ellipse">
                <img src={imgSrc} width={size} height={size}/>
                <PresetName>
                    <span>카카오톡</span>
                    <small>r1: {Preset.KakaoTalk.r1}, r2: {Preset.KakaoTalk.r2}</small>
                </PresetName>
            </SuperEllipse>
        </div>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <SuperEllipse style={{width: size, height: size}} r1={r1} r2={r2} className="super-ellipse">
                <img src={imgSrc} width={size} height={size}/>
                <PresetName>r1: {r1}<br/>r2: {r2}</PresetName>
            </SuperEllipse>
            <div>
                <div>r1: <input type="range" min={0} max={0.5} step={0.001} value={r1} onChange={e => setR1(parseFloat(e.target.value))} style={{width: size}}/></div>
                <div>r2: <input type="range" min={0} max={0.5} step={0.001} value={r2} onChange={e => setR2(parseFloat(e.target.value))} style={{width: size}}/></div>
            </div>
        </div>

        <hr/>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            <SuperEllipse style={{width: 48, height: 48}} p1={p1} p2={p2} className="super-ellipse">
                <img src={imgSrc} width="100%" height="100%"/>
                <PresetName sm>p1: {p1}<br/>p2: {p2}</PresetName>
            </SuperEllipse>
            <SuperEllipse style={{width: 60, height: 60}} p1={p1} p2={p2} className="super-ellipse">
                <img src={imgSrc} width="100%" height="100%"/>
                <PresetName sm>p1: {p1}<br/>p2: {p2}</PresetName>
            </SuperEllipse>
            <SuperEllipse style={{width: 120, height: 120}} p1={p1} p2={p2} className="super-ellipse">
                <img src={imgSrc} width="100%" height="100%"/>
                <PresetName sm>p1: {p1}<br/>p2: {p2}</PresetName>
            </SuperEllipse>
            <SuperEllipse style={{width: 180, height: 180}} p1={p1} p2={p2} className="super-ellipse">
                <img src={imgSrc} width="100%" height="100%"/>
                <PresetName sm>p1: {p1}<br/>p2: {p2}</PresetName>
            </SuperEllipse>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src="./ios.png"/>
            <div style={{width: 1125, height: 810, background: 'black', position: 'relative'}}>
                <AppIcon x={81} y={216}/>
                <AppIcon x={342} y={216}/>
                <AppIcon x={603} y={216}/>
                <AppIcon x={864} y={216}/>

                <RoundAppIcon x={81} y={522}/>
                <RoundAppIcon x={342} y={522}/>
                <RoundAppIcon x={603} y={522}/>
                <RoundAppIcon x={864} y={522}/>
            </div>
        </div>

        <div style={{padding: 12, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{display: 'flex', justifyContent: 'center', position: 'relative', width: size * 2, height: size * 2}}>
                <p style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2em",
                }}>
                    <span style={{color: 'red'}}>iOS icon squircle(equation: |x/60|^5+|y/60|^5=1)</span><br/>
                    <span style={{color: 'blue'}}>react-superellipse Preset.iOS</span><br/>
                    <span style={{color: 'orange'}}>rounded rect(120px)</span><br/>
                </p>
                <canvas id="canvas" width={size * 2 * 2} height={size * 2 * 2} style={{
                    display: 'flex',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    transform: 'scale(0.5)',
                    transformOrigin: 'left top',
                }} ref={ref => {
                    if (!ref) return;

                    let ctx = ref.getContext('2d')!;
                    ctx.clearRect(0, 0, ref.width, ref.height);
                    ctx.strokeStyle = 'rgba(255,0,0,0.5)';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    for (let t = 0; t < Math.PI * 2; t += 0.01) {
                        let {x, y} = squirclePolar(t);
                        x *= 8.52;
                        y *= 8.52;
                        x += size;
                        y += size;
                        ctx.lineTo(x * 2, y * 2);
                    }
                    ctx.closePath();
                    ctx.stroke();
                }}/>
                <SuperEllipseImg width={size * 2} height={size * 2} r1={Preset.iOS.r1} r2={Preset.iOS.r2}
                                 href="" strokeColor="rgba(0,0,255,0.5)" strokeWidth={2}
                                 style={{
                                     display: 'flex',
                                     position: 'absolute',
                                     left: 0,
                                     top: 0
                                 }}/>
                <div style={{
                    display: 'flex',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: size * 2,
                    height: size * 2,
                    borderRadius: 120 * 2,
                    overflow: "hidden",
                    border: '2px solid rgba(0,255,128,0.3)',
                    boxSizing: "border-box",
                }}>
                </div>
            </div>
        </div>
    </div>
}

function AppIcon(props: { x: number; y: number; }) {
    return <div style={{position: 'absolute', left: props.x, top: props.y}}>
        <SuperEllipse style={{background: 'white', width: 180, height: 180}}>
            <p style={{
                fontSize: 28,
                margin: 0,
                paddingTop: 18
            }}>월요일</p>
            <p style={{
                margin: 0,
                fontSize: 116,
                lineHeight: `98px`,
            }}>6</p>
        </SuperEllipse>
        <h4 style={{
            color: 'white',
            fontSize: 32,
            margin: 0,
            fontWeight: "normal",
            marginTop: 12,
        }}>캘린더</h4>
    </div>
}

function RoundAppIcon(props: { x: number; y: number; }) {
    return <div style={{position: 'absolute', left: props.x, top: props.y}}>
        <div style={{background: 'white', width: 180, height: 180, borderRadius: 42}}>
            <p style={{
                fontSize: 28,
                margin: 0,
                paddingTop: 18
            }}>월요일</p>
            <p style={{
                margin: 0,
                fontSize: 116,
                lineHeight: `98px`,
            }}>6</p>
        </div>
        <h4 style={{
            color: 'white',
            fontSize: 32,
            margin: 0,
            fontWeight: "normal",
            marginTop: 12,
        }}>캘린더</h4>
    </div>
}

function squircleCartesian(x: number, y: number): boolean {
    return Math.pow(Math.abs(x / 60), 5) + Math.pow(Math.abs(y / 60), 5) < 512 * 60 * 1.5;
}

function squirclePolar(t: number): { x: number, y: number } {
    return {
        x: Math.pow(Math.abs(Math.cos(t)), 2 / 5) * 60 * sgn(Math.cos(t)),
        y: Math.pow(Math.abs(Math.sin(t)), 2 / 5) * 60 * sgn(Math.sin(t)),
    }
}

function sgn(n: number) {
    return n > 0 ? 1 : -1;
}

const PresetName: FC<{ sm?: boolean }> = ({children, sm = false}) => <span className="preset-name" style={{fontSize: sm ? '12px' : undefined}}>{children}</span>

export default App;
