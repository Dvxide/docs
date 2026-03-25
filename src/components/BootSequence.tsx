export function BootSequence({ onBoot }: Readonly<{ onBoot: () => void }>) {
  return (
    <div className="bg-surface text-on-surface font-body overflow-hidden min-h-screen selection:bg-primary-container selection:text-on-primary-container relative">
      {/* CRT Overlay Effects */}
      <div className="fixed inset-0 crt-overlay z-[60] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-50 pointer-events-none"></div>

      {/* Top Navigation Shell */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-3 bg-surface border-b border-primary-container/20 shadow-[0_0_15px_rgba(255,85,64,0.1)]">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-primary animate-pulse font-headline uppercase tracking-widest">
            DVX1DE_OS_V1.0.4
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4">
            <span className="text-primary border-b-2 border-primary pb-1 font-headline uppercase tracking-widest text-xs cursor-default">ROOT</span>
            <span className="text-secondary opacity-70 font-headline uppercase tracking-widest text-xs hover:text-primary hover:bg-primary-container/10 transition-all duration-300 px-2 cursor-pointer">PROCESSES</span>
            <span className="text-secondary opacity-70 font-headline uppercase tracking-widest text-xs hover:text-primary hover:bg-primary-container/10 transition-all duration-300 px-2 cursor-pointer">NETWORK</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-lg cursor-pointer hover:scale-110 transition-transform">terminal</span>
            <span className="material-symbols-outlined text-primary text-lg cursor-pointer hover:scale-110 transition-transform">settings_input_component</span>
            <span className="material-symbols-outlined text-primary text-lg cursor-pointer hover:scale-110 transition-transform">history</span>
          </div>
        </div>
      </header>

      {/* Side Navigation Shell */}
      <nav className="fixed left-0 top-0 h-full z-40 hidden md:flex flex-col bg-surface-container-low/80 backdrop-blur-xl border-r border-primary-container/10 w-64 pt-20">
        <div className="px-6 py-4 mb-6">
          <div className="font-black text-primary font-mono text-lg">NODE_01</div>
          <div className="font-mono text-[10px] tracking-tighter text-primary opacity-80">STATUS: OPERATIONAL</div>
        </div>
        <div className="flex flex-col flex-grow">
          <a className="bg-primary-container/20 text-primary border-l-4 border-primary pl-4 py-3 flex items-center gap-3 font-mono text-[10px] tracking-tighter group transition-all duration-200 translate-x-1" href="#">
            <span className="material-symbols-outlined text-sm">directory_sync</span>
            <span>ROOT</span>
          </a>
          <a className="text-secondary opacity-50 pl-5 py-3 flex items-center gap-3 hover:opacity-100 hover:bg-surface-container-low font-mono text-[10px] tracking-tighter transition-all duration-200" href="#">
            <span className="material-symbols-outlined text-sm">memory</span>
            <span>PROCESSES</span>
          </a>
          <a className="text-secondary opacity-50 pl-5 py-3 flex items-center gap-3 hover:opacity-100 hover:bg-surface-container-low font-mono text-[10px] tracking-tighter transition-all duration-200" href="#">
            <span className="material-symbols-outlined text-sm">hub</span>
            <span>NETWORK</span>
          </a>
          <a className="text-secondary opacity-50 pl-5 py-3 flex items-center gap-3 hover:opacity-100 hover:bg-surface-container-low font-mono text-[10px] tracking-tighter transition-all duration-200" href="#">
            <span className="material-symbols-outlined text-sm">shield</span>
            <span>SECURITY</span>
          </a>
          <a className="text-secondary opacity-50 pl-5 py-3 flex items-center gap-3 hover:opacity-100 hover:bg-surface-container-low font-mono text-[10px] tracking-tighter transition-all duration-200" href="#">
            <span className="material-symbols-outlined text-sm">terminal</span>
            <span>LOGS</span>
          </a>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="md:ml-64 pt-16 pb-12 min-h-screen flex flex-col justify-center items-center px-6 relative">
        {/* Boot Sequence Decorative Gradient Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-primary blur-[100px] rounded-full"></div>
        </div>

        {/* Terminal Boot Screen */}
        <div className="w-full max-w-4xl bg-surface-container-lowest border border-outline-variant/20 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(255,85,64,0.15)] relative group">
          {/* Terminal Header */}
          <div className="bg-surface-variant px-4 py-2 flex items-center justify-between border-b border-outline-variant/10">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary-container"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></div>
            </div>
            <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">Session: root@dvx1de</div>
            <div className="w-10"></div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 font-mono text-sm sm:text-base leading-relaxed overflow-hidden min-h-[500px] flex flex-col">
            <div className="flex flex-col gap-1 mb-6">
              <div className="flex items-center gap-3 text-primary">
                <span className="opacity-50 text-xs">[ 0.000000 ]</span>
                <span className="font-bold">INITIATING SYSTEM BOOT...</span>
              </div>
              <div className="flex items-center gap-3 text-secondary">
                <span className="opacity-50 text-xs">[ 0.124592 ]</span>
                <span>LOADING KERNEL... v6.8.1-DVX1DE</span>
              </div>
              <div className="flex items-center gap-3 text-secondary">
                <span className="opacity-50 text-xs">[ 0.459012 ]</span>
                <span>MOUNTING ROOT FILESYSTEM... DONE</span>
              </div>
              <div className="flex items-center gap-3 text-secondary">
                <span className="opacity-50 text-xs">[ 0.829104 ]</span>
                <span>INITIALIZING HARDWARE ABSTRACTION LAYER...</span>
              </div>
              <div className="flex items-center gap-3 text-primary-container font-bold">
                <span className="opacity-50 text-xs font-normal">[ 1.058312 ]</span>
                <span>SYSTEM STATUS: OPERATIONAL</span>
              </div>
            </div>

            <div className="mb-10 space-y-1">
              <div className="text-on-surface-variant/60 text-xs">--------------------------------------------------</div>
              <div className="text-on-surface-variant/80">Kernel modules loaded: [ cryptography, firewall, vault_fs ]</div>
              <div className="text-on-surface-variant/80">Local address: 127.0.0.1 (lo)</div>
              <div className="text-on-surface-variant/80">Active services: 14/14</div>
              <div className="text-on-surface-variant/60 text-xs">--------------------------------------------------</div>
            </div>

            <div className="flex-grow flex flex-col justify-center items-center gap-8 py-12">
              {/* Large Display Branding */}
              <div className="text-center">
                <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary tracking-tighter mb-2">DVX</h1>
                <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface tracking-tighter">1DE</h1>
                <div className="h-1 w-24 bg-primary-container mx-auto mt-6 shadow-[0_0_15px_#ff5540]"></div>
              </div>

              {/* Login Prompt Area */}
              <div className="w-full max-w-sm flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-3 text-secondary border-b border-outline-variant/30 pb-2">
                  <span className="material-symbols-outlined text-primary-container text-base">person</span>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold">LOGIN:</span>
                  <span className="text-on-surface animate-pulse">root_</span>
                </div>
                <div className="flex items-center gap-3 text-secondary opacity-30 border-b border-outline-variant/30 pb-2">
                  <span className="material-symbols-outlined text-base">lock</span>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold">PASSWORD:</span>
                  <span className="text-on-surface">••••••••</span>
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-auto pt-6 flex flex-col items-center gap-4">
              <button
                onClick={onBoot}
                className="bg-primary-container text-on-primary-container px-10 py-4 font-headline font-bold text-sm tracking-[0.3em] uppercase hover:shadow-[0_0_30px_rgba(255,85,64,0.4)] transition-all duration-300 active:scale-95 group relative overflow-hidden"
              >
                <span className="relative z-10">ROOT LOGIN</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <p className="text-[10px] text-secondary opacity-40 uppercase tracking-[0.5em] animate-pulse">PRESS ANY KEY TO START</p>
            </div>
          </div>
        </div>

        {/* Glass Chips */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 opacity-70">
          <div className="bg-surface-container-highest/60 backdrop-blur-md px-6 py-2 rounded-full border-t border-l border-primary-container/20 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></div>
            <span className="font-headline text-xs tracking-widest uppercase">ENCRYPTED_CONNECTION</span>
          </div>
          <div className="bg-surface-container-highest/60 backdrop-blur-md px-6 py-2 rounded-full border-t border-l border-primary-container/20 flex items-center gap-2">
            <span className="material-symbols-outlined text-xs text-primary">verified_user</span>
            <span className="font-headline text-xs tracking-widest uppercase">LEVEL_04_AUTH</span>
          </div>
          <div className="bg-surface-container-highest/60 backdrop-blur-md px-6 py-2 rounded-full border-t border-l border-primary-container/20 flex items-center gap-2">
            <span className="material-symbols-outlined text-xs text-primary">database</span>
            <span className="font-headline text-xs tracking-widest uppercase">NODE_01_SYNCHRONIZED</span>
          </div>
        </div>
      </main>

      {/* Footer Shell */}
      <footer className="fixed bottom-0 w-full z-50 justify-between items-center px-6 py-2 bg-surface border-t border-primary-container/10 hidden md:flex">
        <div className="font-mono text-[9px] uppercase opacity-40 text-primary">© 2026 DVX1DE</div>
        <div className="flex gap-4">
          <span className="font-mono text-[9px] uppercase opacity-40 text-secondary hover:text-primary hover:opacity-100 cursor-pointer transition-all">DOCS</span>
          <span className="font-mono text-[9px] uppercase opacity-40 text-secondary hover:text-primary hover:opacity-100 cursor-pointer transition-all">LICENSE</span>
          <span className="font-mono text-[9px] uppercase opacity-40 text-secondary hover:text-primary hover:opacity-100 cursor-pointer transition-all">SUPPORT</span>
        </div>
      </footer>

      {/* Bottom Navigation Shell (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface md:hidden z-50 flex justify-around items-center py-3 border-t border-primary-container/20">
        <div className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined text-xl">directory_sync</span>
          <span className="text-[8px] font-mono tracking-tighter uppercase">ROOT</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-secondary opacity-50">
          <span className="material-symbols-outlined text-xl">memory</span>
          <span className="text-[8px] font-mono tracking-tighter uppercase">PROC</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-secondary opacity-50">
          <span className="material-symbols-outlined text-xl">hub</span>
          <span className="text-[8px] font-mono tracking-tighter uppercase">NET</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-secondary opacity-50">
          <span className="material-symbols-outlined text-xl">shield</span>
          <span className="text-[8px] font-mono tracking-tighter uppercase">SEC</span>
        </div>
      </nav>
    </div>
  )
}
