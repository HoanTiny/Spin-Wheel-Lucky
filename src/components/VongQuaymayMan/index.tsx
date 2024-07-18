// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import './styles.css';

// export default function About() {
//   const [spinning, setSpinning] = useState(false);
//   const [result, setResult] = useState(null);
//   const [turns, setTurns] = useState(0);
//   const wheelRef = useRef(null);
//   const currentRotation = useRef(0);

//   const prizes = [
//     {
//       name: 'Gói ICONS 112+',
//       image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500217677.png',
//     },
//     {
//       name: '800,000,000 BP',
//       image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500300128.png',
//     },
//     {
//       name: 'Gói JNM, DC, HW, CC 105+',
//       image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500224176.png',
//     },
//     {
//       name: 'Gói 24TOTS, EU24, UT, JNM chỉ số 111+',
//       image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500226833.png',
//     },
//     {
//       name: 'Gói 24TOTS, EU24, 23UCL, UT, JNM chỉ số 110+',
//       image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500226892.png',
//     },
//     {
//       name: 'Gói UT, JNM, 23UCL, DC, 23HW, CC 104+',
//       image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500224713.png',
//     },
//     {
//       name: 'Gói UT, JNM, 23UCL, DC, CC 103+',
//       image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500225024.png',
//     },
//     {
//       name: '25,000,000,000 BP',
//       image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500300193.png',
//     },
//     {
//       name: 'Gói 24TOTS, EU24, UT chỉ số 106+',
//       image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500226948.png',
//     },
//     {
//       name: 'Gói EU24, UT, JNM 105+',
//       image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500225812.png',
//     },
//   ];

//   const spin = () => {
//     if (spinning) return;
//     setSpinning(true);
//     setResult(null);

//     const randomIndex = Math.floor(Math.random() * 10);
//     const baseRotation = currentRotation.current % 360;
//     const targetRotation = 360 - baseRotation + 36 * randomIndex;
//     const rotationAngle = targetRotation + 3600;

//     currentRotation.current += rotationAngle;

//     wheelRef.current.style.transition = 'transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)';
//     wheelRef.current.style.transform = `rotate(${currentRotation.current}deg)`;

//     setTimeout(() => {
//       setSpinning(false);
//       setResult(randomIndex);
//       setTurns((prevTurns) => prevTurns + 1);
//     }, 5000);
//   };

//   useEffect(() => {
//     return () => {
//       if (wheelRef.current) {
//         wheelRef.current.style.transition = 'none';
//         wheelRef.current.style.transform = 'rotate(0deg)';
//       }
//     };
//   }, []);

//   return (
//     <div className="home">
//       <div className="spin">
//         <div className="wheel">
//           <ul className="wheel__loots" id="wheel" ref={wheelRef}>
//             <li style={{ transform: 'rotate(0deg)' }}>
//               <img
//                 src="https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500217677.png"
//                 alt="Gói ICONS 112+"
//                 data-tooltip-id="spinItemTooltip"
//                 data-tooltip-content="Gói ICONS 112+"
//               />
//             </li>
//             <li style={{ transform: 'rotate(-36deg)' }}>
//               <img
//                 src="https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500300128.png"
//                 alt="800,000,000 BP"
//                 data-tooltip-id="spinItemTooltip"
//                 data-tooltip-content="800,000,000 BP"
//               />
//             </li>
//             <li style={{ transform: 'rotate(-72deg)' }}>
//               <img
//                 src="https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500224176.png"
//                 alt="Gói JNM, DC, HW, CC 105+"
//                 data-tooltip-id="spinItemTooltip"
//                 data-tooltip-content="Gói JNM, DC, HW, CC 105+"
//               />
//             </li>
//             <li style={{ transform: 'rotate(-108deg)' }}>
//               <img
//                 src="https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500226833.png"
//                 alt="Gói 24TOTS, EU24, UT, JNM chỉ số 111+"
//                 data-tooltip-id="spinItemTooltip"
//                 data-tooltip-content="Gói 24TOTS, EU24, UT, JNM chỉ số 111+"
//               />
//             </li>
//             <li style={{ transform: 'rotate(-144deg)' }}>
//               <img
//                 src="https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500226892.png"
//                 alt="Gói 24TOTS, EU24, 23UCL, UT, JNM chỉ số 110+"
//                 data-tooltip-id="spinItemTooltip"
//                 data-tooltip-content="Gói 24TOTS, EU24, 23UCL, UT, JNM chỉ số 110+"
//               />
//             </li>
//             <li style={{ transform: 'rotate(-180deg)' }}>
//               <img
//                 src="https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500224713.png"
//                 alt="Gói UT, JNM, 23UCL, DC, 23HW, CC 104+"
//                 data-tooltip-id="spinItemTooltip"
//                 data-tooltip-content="Gói UT, JNM, 23UCL, DC, 23HW, CC 104+"
//               />
//             </li>
//             <li style={{ transform: 'rotate(-216deg)' }}>
//               <img
//                 src="https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500225024.png"
//                 alt="Gói UT, JNM, 23UCL, DC, CC 103+"
//                 data-tooltip-id="spinItemTooltip"
//                 data-tooltip-content="Gói UT, JNM, 23UCL, DC, CC 103+"
//               />
//             </li>
//             <li style={{ transform: 'rotate(-252deg)' }}>
//               <img
//                 src="https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500300193.png"
//                 alt="25,000,000,000 BP"
//                 data-tooltip-id="spinItemTooltip"
//                 data-tooltip-content="25,000,000,000 BP"
//               />
//             </li>
//             <li style={{ transform: 'rotate(-288deg)' }}>
//               <img
//                 src="https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500226948.png"
//                 alt="Gói 24TOTS, EU24, UT chỉ số 106+"
//                 data-tooltip-id="spinItemTooltip"
//                 data-tooltip-content="Gói 24TOTS, EU24, UT chỉ số 106+"
//               />
//             </li>
//             <li style={{ transform: 'rotate(-324deg)' }}>
//               <img
//                 src="https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500225812.png"
//                 alt="Gói EU24, UT, JNM 105+"
//                 data-tooltip-id="spinItemTooltip"
//                 data-tooltip-content="Gói EU24, UT, JNM 105+"
//               />
//             </li>
//           </ul>
//           <div className="wheel__turn">Lượt quay: 0</div>
//           <a href="#" className="wheel__btn" onClick={spin}>
//             QUAY
//           </a>
//         </div>
//       </div>
//       {result !== null && (
//         <div
//           className="result"
//           onClick={() => {
//             setResult(null);
//           }}
//         >
//           <div className="conntent">
//             <h2>Chúc mừng bạn:</h2>
//             <img src={prizes[result].image} alt={prizes[result].name} className="result-image" />
//             <p>Bạn đã nhận được: {prizes[result].name}</p>
//           </div>
//         </div>
//       )}
//       {/* {result !== null && (
//         <div className="result">
//           Kết quả: {document.querySelector(`#wheel li:nth-child(${result + 1}) img`).alt}
//         </div>
//       )} */}
//     </div>
//   );
// }
'use client';

import React, { useState, useEffect, useRef, RefObject } from 'react';
import './styles.css';

export default function VongQuaymayMan() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [turns, setTurns] = useState(0);
  const wheelRef: RefObject<HTMLUListElement> = useRef(null);
  const currentRotation = useRef(0);

  const prizes = [
    {
      name: 'Gói ICONS 112+',
      image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500217677.png',
      probability: 1, // 1%
    },
    {
      name: '800,000,000 BP',
      image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500300128.png',
      probability: 1, // 5%
    },
    {
      name: 'Gói JNM, DC, HW, CC 105+',
      image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500224176.png',
      probability: 1, // 10%
    },
    {
      name: 'Gói 24TOTS, EU24, UT, JNM chỉ số 111+',
      image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500226833.png',
      probability: 1, // 3%
    },
    {
      name: 'Gói 24TOTS, EU24, 23UCL, UT, JNM chỉ số 110+',
      image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500226892.png',
      probability: 1, // 5%
    },
    {
      name: 'Gói UT, JNM, 23UCL, DC, 23HW, CC 104+',
      image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500224713.png',
      probability: 1, // 15%
    },
    {
      name: 'Gói UT, JNM, 23UCL, DC, CC 103+',
      image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500225024.png',
      probability: 1, // 20%
    },
    {
      name: '25,000,000,000 BP',
      image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500300193.png',
      probability: 1, // 1%
    },
    {
      name: 'Gói 24TOTS, EU24, UT chỉ số 106+',
      image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500226948.png',
      probability: 90, // 15%
    },
    {
      name: 'Gói EU24, UT, JNM 105+',
      image: 'https://cdn.vn.garenanow.com/fo3vn/project/playerPack/500225812.png',
      probability: 2, // 25%
    },
  ];

  const getRandomPrize = () => {
    const totalProbability = prizes.reduce((sum, prize) => sum + prize.probability, 0);
    let random = Math.random() * totalProbability;

    for (let i = 0; i < prizes.length; i++) {
      if (random < prizes[i].probability) {
        return i;
      }
      random -= prizes[i].probability;
    }

    return prizes.length - 1; // Fallback to last prize if something goes wrong
  };

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);

    const randomIndex = getRandomPrize();
    const baseRotation = currentRotation.current % 360;
    const targetRotation = 360 - baseRotation + 36 * randomIndex;
    const rotationAngle = targetRotation + 3600;

    currentRotation.current += rotationAngle;

    wheelRef.current?.style.setProperty(
      'transition',
      'transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)',
    );
    wheelRef.current?.style.setProperty('transform', `rotate(${currentRotation.current}deg)`);

    setTimeout(() => {
      setSpinning(false);
      setResult(randomIndex);
      setTurns((prevTurns) => prevTurns + 1);
    }, 5000);
  };

  useEffect(() => {
    return () => {
      if (wheelRef.current) {
        wheelRef.current?.style.setProperty('transition', 'none');
        wheelRef.current?.style.setProperty('transform', 'rotate(0deg)');
        // wheelRef.current.style.transition = 'none';
        // wheelRef.current.style.transform = 'rotate(0deg)';
      }
    };
  }, []);

  return (
    <div className="home">
      <div className="spin">
        <div className="wheel">
          <ul className="wheel__loots" id="wheel" ref={wheelRef}>
            {prizes.map((prize, index) => (
              <li key={index} style={{ transform: `rotate(${index * -36}deg)` }}>
                <img
                  src={prize.image}
                  alt={prize.name}
                  data-tooltip-id="spinItemTooltip"
                  data-tooltip-content={`${prize.name} (${prize.probability}%)`}
                />
              </li>
            ))}
          </ul>
          <div className="wheel__turn">Lượt quay: {turns}</div>
          <button onClick={spin} className="wheel__btn" disabled={spinning}>
            QUAY
          </button>
        </div>
      </div>
      {result !== null && (
        <div
          className="result"
          onClick={() => {
            setResult(null);
          }}
        >
          <div className="conntent">
            <h2>Chúc mừng bạn:</h2>
            <img src={prizes[result].image} alt={prizes[result].name} className="result-image" />
            <p>Bạn đã nhận được: {prizes[result].name}</p>
          </div>
        </div>
      )}
    </div>
  );
}
