import React, {FC, useState} from 'react';
import './App.css';
import SuperEllipse, {Preset} from "../../";

const size = 300;
const imgSrc = "https://images.unsplash.com/photo-1585572336833-4f34f2101c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60";

function App() {
    const [r1, setR1] = useState(Math.round(Preset.KakaoTalk.r1 * size));
    const [r2, setR2] = useState(Math.round(Preset.KakaoTalk.r2 * size));

    return <div className="App">
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="super-ellipse" style={{
                display: 'flex',
                margin: 12,
                borderRadius: Preset.iOS.r2 * size,
                overflow: "hidden"
            }}>
                <img src="https://images.unsplash.com/photo-1585572336833-4f34f2101c18?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60" width="300" height="300"/>
                <PresetName>
                    <span>round rect</span>
                    <small>border-radius: {Preset.iOS.r2 * size}px</small>
                </PresetName>
            </div>
            <SuperEllipse width={size} height={size} r1={Preset.iOS.r1 * size} r2={Preset.iOS.r2 * size} className="super-ellipse">
                <img src={imgSrc} width={size} height={size}/>
                <PresetName>
                    <span>iOS</span>
                    <small>r1: {Math.round(Preset.iOS.r1 * size)},r2: {Math.round(Preset.iOS.r2 * size)}</small>
                </PresetName>
            </SuperEllipse>
            <SuperEllipse width={size} height={size} r1={Preset.KakaoTalk.r1 * size} r2={Preset.KakaoTalk.r2 * size} className="super-ellipse">
                <img src={imgSrc} width={size} height={size}/>
                <PresetName>
                    <span>카카오톡</span>
                    <small>r1: {Math.round(Preset.KakaoTalk.r1 * size)},r2: {Math.round(Preset.KakaoTalk.r2 * size)}</small>
                </PresetName>
            </SuperEllipse>
        </div>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <SuperEllipse width={size} height={size} r1={r1} r2={r2} className="super-ellipse">
                <img src={imgSrc} width={size} height={size}/>
                <PresetName>r1: {r1}<br/>r2: {r2}</PresetName>
            </SuperEllipse>
            <div>
                <div>r1: <input type="range" min={0} max={size / 2} value={r1} onChange={e => setR1(parseInt(e.target.value, 10))} style={{width: size}}/></div>
                <div>r2: <input type="range" min={0} max={size / 2} value={r2} onChange={e => setR2(parseInt(e.target.value, 10))} style={{width: size}}/></div>
            </div>
        </div>
    </div>
}

const PresetName: FC = ({children}) => <span className="preset-name">{children}</span>

export default App;
