import React from 'react';
import {AbsoluteFill, Composition, Sequence, interpolate, useCurrentFrame} from 'remotion';

const W = 1080;
const H = 1920;
const FPS = 30;
const SCENE = FPS * 6;

const scenes = [
  {
    eyebrow: 'اكتاشف بلاد كتجمع العجايب',
    headline: 'المغرب\nكيعيّش الحلم',
    latin: 'L-MAGHRIB KAY3ICH L-HOLM',
    colors: ['#143c3b', '#26776b', '#f0a64b'],
    symbol: '✳',
    place: 'من البحر حتى للصحراء',
  },
  {
    eyebrow: 'زنقة فيها حكاية',
    headline: 'فاس…\nريحة التاريخ',
    latin: 'FES · L-MEDINA L-3TI9A',
    colors: ['#382c45', '#b25d45', '#f1c778'],
    symbol: '✺',
    place: 'فاس العتيقة',
  },
  {
    eyebrow: 'ألوان وفرحة فكل خطوة',
    headline: 'مراكش…\nنبض ما كيسكتش',
    latin: 'MARRAKECH · DIMA 7AYYA',
    colors: ['#522e3a', '#d26348', '#f3bd65'],
    symbol: '✹',
    place: 'ساحة جامع الفنا',
  },
  {
    eyebrow: 'سكون كيشرح القلب',
    headline: 'الصحراء…\nوالنجوم قراب',
    latin: 'SAHRA · SKY FULL OF STARS',
    colors: ['#10283e', '#285c6b', '#e7a75c'],
    symbol: '✦',
    place: 'ليلة فالكثبان',
  },
  {
    eyebrow: 'المغرب ماشي غير وجهة…',
    headline: 'راه إحساس\nكيبقى معاك',
    latin: 'MOROCCO IS A FEELING',
    colors: ['#193e3d', '#17766b', '#efab4e'],
    symbol: '✳',
    place: 'المغرب كيتسناك',
  },
];

const arabic = {
  fontFamily: 'Arial, Tahoma, sans-serif',
  direction: 'rtl',
  unicodeBidi: 'plaintext',
};

const SceneArt = ({index, color, frame}) => {
  const float = Math.sin(frame / 24) * 18;
  if (index === 0 || index === 4) {
    return (
      <svg viewBox="0 0 1080 820" style={{position: 'absolute', width: '100%', bottom: 160, transform: `translateY(${float}px)`}}>
        <circle cx="775" cy="180" r="100" fill="#ffd17a" opacity=".92" />
        <path d="M0 500 Q210 270 420 480 T850 420 Q960 370 1080 440 L1080 820 L0 820Z" fill="#174f4c" />
        <path d="M0 590 Q260 390 480 570 T900 510 Q1020 490 1080 530 L1080 820 L0 820Z" fill="#103c40" />
        <path d="M0 710 Q260 600 510 690 T1080 640 L1080 820 L0 820Z" fill={color} opacity=".85" />
        <path d="M0 754 Q300 680 570 744 T1080 700" fill="none" stroke="#ffd17a" strokeWidth="5" opacity=".7" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 1080 820" style={{position: 'absolute', width: '100%', bottom: 130, transform: `translateY(${float}px)`}}>
        <path d="M0 820V300H160V160H280V340H390V90H510V330H640V180H760V350H900V140H1020V300H1080V820Z" fill="#e6b979" />
        <path d="M40 390h100v130H40zm290-170h90v170h-90zm350 20h90v160h-90zm280-20h70v170h-70z" fill="#704f55" />
        <path d="M0 570h1080v250H0z" fill="#794d4a" />
        <path d="M170 820V620q0-110 100-110t100 110v200M620 820V640q0-90 90-90t90 90v180" fill="#382c45" stroke="#f1c778" strokeWidth="12" />
        <path d="M0 655h1080M0 715h1080" stroke="#e9b879" strokeWidth="7" opacity=".6" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 1080 820" style={{position: 'absolute', width: '100%', bottom: 130, transform: `translateY(${float}px)`}}>
        <circle cx="830" cy="190" r="95" fill="#ffd37e" />
        <path d="M0 370L270 120l270 250v440H0zm500 30 220-220 240 220v410H500z" fill="#f0c477" />
        <path d="M70 440h120v140H70zm230-150h120v150H300zm360 70h120v130H660zm220 100h100v140H880z" fill="#a84e41" />
        <path d="M0 760q240-210 520 0t560-10v70H0Z" fill="#522e3a" />
        <path d="M200 820V630q0-90 80-90t80 90v190m340 0V620q0-75 70-75t70 75v200" fill="#d26348" stroke="#f8d995" strokeWidth="12" />
        <path d="M105 390h170m-85-80v170m505-20h170m-85-80v170" stroke="#fff0c8" strokeWidth="12" opacity=".75" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 1080 820" style={{position: 'absolute', width: '100%', bottom: 125, transform: `translateY(${float}px)`}}>
      {[130, 270, 460, 630, 790, 940].map((x, i) => <circle key={x} cx={x} cy={95 + (i % 3) * 82} r={i % 2 ? 5 : 8} fill="#fff1cd" opacity=".9" />)}
      <circle cx="810" cy="265" r="58" fill="#fff0c8" />
      <path d="M0 590Q150 480 310 580T620 565Q810 450 1080 555V820H0Z" fill="#b8754e" />
      <path d="M0 650Q260 560 480 655T930 620Q1010 600 1080 625V820H0Z" fill="#d29458" />
      <path d="M0 730Q250 660 500 735t580-30v115H0Z" fill="#f0bd70" />
      <path d="M490 660q40-125 80 0m-65-35h50m-43-25h36" fill="none" stroke="#432f3e" strokeWidth="14" strokeLinecap="round" />
    </svg>
  );
};

const Scene = ({scene, index}) => {
  const frame = useCurrentFrame();
  const enter = interpolate(frame, [0, 24], [0, 1], {extrapolateRight: 'clamp'});
  const exit = interpolate(frame, [SCENE - 20, SCENE], [1, 0], {extrapolateLeft: 'clamp'});
  const opacity = Math.min(enter, exit);
  const rise = interpolate(frame, [0, 28], [54, 0], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{background: `linear-gradient(155deg, ${scene.colors[0]} 0%, ${scene.colors[1]} 58%, ${scene.colors[2]} 155%)`, overflow: 'hidden', color: '#fff8e9'}}>
      <div style={{position: 'absolute', inset: 34, border: '1px solid rgba(255,244,218,.24)', borderRadius: 28}} />
      <div style={{position: 'absolute', top: 87, left: 86, right: 86, display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: .9}}>
        <span style={{fontSize: 24, letterSpacing: 7, fontWeight: 700}}>D I J I T R O V E</span>
        <span style={{fontSize: 25, color: '#ffe0a2'}}>{String(index + 1).padStart(2, '0')} / 05</span>
      </div>
      <div style={{position: 'absolute', top: 290, left: 72, right: 72, textAlign: 'center', opacity, transform: `translateY(${rise}px)`}}>
        <div style={{...arabic, color: '#ffe0a2', fontSize: 34, fontWeight: 600, marginBottom: 34}}>{scene.eyebrow}</div>
        <div style={{...arabic, whiteSpace: 'pre-line', fontSize: 108, lineHeight: 1.34, fontWeight: 900, letterSpacing: -2, textShadow: '0 8px 40px rgba(0,0,0,.2)'}}>{scene.headline}</div>
        <div style={{marginTop: 24, fontSize: 24, letterSpacing: 4, fontWeight: 700, color: '#fff0d3'}}>{scene.latin}</div>
      </div>
      <div style={{position: 'absolute', right: 88, top: 650, fontSize: 88, color: '#ffdfa0', opacity: .82, transform: `rotate(${Math.sin(frame / 30) * 12}deg)`}}>{scene.symbol}</div>
      <SceneArt index={index} color={scene.colors[2]} frame={frame} />
      <div style={{position: 'absolute', left: 86, right: 86, bottom: 120, textAlign: 'center', opacity: .95}}>
        <div style={{height: 2, background: 'rgba(255,248,233,.35)', marginBottom: 28}} />
        <div style={{...arabic, fontSize: 31, fontWeight: 700}}>{scene.place}</div>
        <div style={{marginTop: 18, fontSize: 19, letterSpacing: 5, color: '#ffe0a2'}}>A JOURNEY THAT STAYS WITH YOU</div>
      </div>
    </AbsoluteFill>
  );
};

const Promo = () => (
  <AbsoluteFill style={{backgroundColor: '#143c3b'}}>
    {scenes.map((scene, index) => (
      <Sequence key={scene.place} from={index * SCENE} durationInFrames={SCENE}>
        <Scene scene={scene} index={index} />
      </Sequence>
    ))}
  </AbsoluteFill>
);

export const VideoRoot = () => (
  <Composition id="MoroccoPromo" component={Promo} durationInFrames={SCENE * scenes.length} fps={FPS} width={W} height={H} />
);
