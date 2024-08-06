import { useState } from 'react';

const StyledButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white grid place-items-center relative">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsla(0,0%,95%,.15)1px,transparent1px60px),linear-gradient(hsla(0,0%,95%,.15)1px,transparent1px60px)] bg-[length:60px_60px] bg-[50%_50%] [mask-image:linear-gradient(-15deg,transparent30%,white)] z-[-1] transform translate-z-[-100vmin]"></div>
      <button
        className="relative scale-100 cursor-pointer border-0 bg-transparent text-xl p-8 rounded-md"
        disabled={isDisabled}
        onClick={toggleDisabled}
      >
        <span className="canvas-container absolute inset-0">
          <canvas className="absolute w-64 aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-black"></canvas>
        </span>
        <span className="canvas-wrap inline-block h-full w-full border border-solid border-white/65 transition-[width,height] duration-200 overflow-hidden rounded-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="after:content-[''] after:absolute after:inset-0 after:bg-white/[0.025] after:opacity-[var(--active,0)]"></span>
        </span>
        <span className="relative z-10 font-['JetBrains_Mono',monospace] font-bold uppercase text-white tracking-[8px] opacity-0 indent-[8px]">
          Button
        </span>
      </button>
      <a
        href="https://bearbuilder.com"
        className="bear-link fixed bottom-4 left-4 w-12 aspect-square grid place-items-center opacity-80 hover:opacity-100 focus-visible:opacity-100"
      >
        <svg className="w-3/4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
        </svg>
      </a>
    </div>
  );
};

export default StyledButton;