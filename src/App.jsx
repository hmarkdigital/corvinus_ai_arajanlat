import { useState, useEffect } from "react";

const PWD = "crvnai2026!";

const C = {
  blue: "#001aff",
  black: "#090909",
  charcoal: "#141414",
  card: "#1a1a1a",
  border: "#262626",
  border2: "#1e1e1e",
  muted: "#555",
  dim: "#444",
  text: "#bbb",
  white: "#fff",
};

const VIDEOS = [
  {
    id: "a",
    cim: "StayAssist",
    alcim: "AI-kiegészítő hotel szolgáltatás",
    szereplo: "Férfi vendég, ~40 év",
    helyszin: "Magas kategóriájú hotel",
    hangulat: "Meleg színvilág",
    ar: 100000,
    komplexitas: "Közepes",
  },
  {
    id: "b",
    cim: "Érintésmentes hotel",
    alcim: "AI-helyettesített recepció",
    szereplo: "Nő vendég, ~40 év",
    helyszin: "Közepes kategóriájú hotel",
    hangulat: "Hideg, modern színvilág",
    ar: 100000,
    komplexitas: "Közepes",
  },
  {
    id: "c",
    cim: "Táv-egészségügyi konzultáció",
    alcim: "AI által közvetített ellátás",
    szereplo: "Nő, ~60 év",
    helyszin: "Otthon, meleg nappaliban",
    hangulat: "Meleg, megnyugtató",
    ar: 100000,
    komplexitas: "Közepes-magas",
  },
  {
    id: "d",
    cim: "VIP banki tanácsadás",
    alcim: "AI-segített emberi együttműködés",
    szereplo: "Jól öltözött férfi, ~60 év + tanácsadó",
    helyszin: "Elegáns VIP bankfiók",
    hangulat: "Szürkés, professzionális",
    ar: 100000,
    komplexitas: "Magas",
  },
];

const ROADMAP = [
  {
    fázis: "01",
    nev: "Storyboard",
    leiras: "Mind a 4 videó részletes storyboardjának elkészítése és ügyfél-jóváhagyása jelenetenként.",
    idotartam: "1–3. munkanap",
    eredmeny: "Jóváhagyott storyboard",
    szin: "#001aff",
  },
  {
    fázis: "02",
    nev: "Karakterfejlesztés",
    leiras: "AI-alapú karaktergenerálás — fotorealisztikus héró frame-ek elkészítése minden szereplőhöz és helyszínhez.",
    idotartam: "3–5. munkanap",
    eredmeny: "Véglegesített karakterek",
    szin: "#0044ff",
  },
  {
    fázis: "03",
    nev: "Videógenerálás",
    leiras: "Jelenetenként AI videógenerálás a jóváhagyott karakterekből. Magyar hanganyag (ElevenLabs) és lip-sync feldolgozás.",
    idotartam: "5–10. munkanap",
    eredmeny: "Nyers videó anyagok",
    szin: "#0066ff",
  },
  {
    fázis: "04",
    nev: "Utómunka",
    leiras: "Vágás, kompozitálás, UI overlay elemek integrálása, narráció szinkronizálása, zene és ambient hangok.",
    idotartam: "10–13. munkanap",
    eredmeny: "Összeállított videók",
    szin: "#0088ff",
  },
  {
    fázis: "05",
    nev: "Átadás",
    leiras: "Minőségellenőrzés, végleges export 16:9-es HD formátumban. Videónkénti fájlátadás.",
    idotartam: "14. munkanap",
    eredmeny: "4 × MP4 HD, 16:9",
    szin: "#00aaff",
  },
];

const BENNE_VAN = [
  "Storyboard készítés és jóváhagytatás",
  "Fotorealisztikus AI karakterfejlesztés",
  "AI képgenerálás (helyszínek, szereplők)",
  "AI videógenerálás jelenetenként",
  "Magyar hanganyag és narráció",
  "Lip-sync feldolgozás",
  "Utómunka: vágás, kompozitálás, narráció",
  "Végleges export: 16:9 HD MP4",
];

const NEM_TARTALMAZ = [
  "Script írás / módosítás",
];

function PasswordGate({ onUnlock }) {
  const [val, setVal] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [focused, setFocused] = useState(false);
  const attempt = () => {
    if (val === PWD) {
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setVal("");
      setTimeout(() => setShake(false), 500);
    }
  };
  return (
    <div style={{ fontFamily: "'Satoshi','DM Sans',system-ui,sans-serif", background: C.black, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <style>{`
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-6px)} 80%{transform:translateX(6px)} }
        .shake { animation: shake .45s ease }
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .gate-card { animation: fadeUp .4s ease }
      `}</style>
      <div className="gate-card" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: "40px 36px", width: "100%", maxWidth: 380, textAlign: "center" }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(0,26,255,0.12)", border: "1px solid rgba(0,26,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22 }}>🎬</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.white, letterSpacing: "-0.03em", marginBottom: 6 }}>Védett dokumentum</div>
        <div style={{ fontSize: 13, color: C.muted, marginBottom: 28 }}>Add meg a jelszót a megtekintéshez</div>
        <div className={shake ? "shake" : ""}>
          <input type="password" value={val} onChange={e => { setVal(e.target.value); setError(false); }} onKeyDown={e => e.key === "Enter" && attempt()} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} placeholder="Jelszó" autoFocus
            style={{ width: "100%", padding: "12px 16px", background: "#111", border: `1.5px solid ${error ? "#ef4444" : focused ? "rgba(0,26,255,0.6)" : "#2a2a2a"}`, borderRadius: 10, color: C.white, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit", marginBottom: 10, transition: "border-color 0.2s" }} />
          {error && <div style={{ fontSize: 12, color: "#ef4444", marginBottom: 10, textAlign: "left" }}>Helytelen jelszó. Próbáld újra.</div>}
        </div>
        <button onClick={attempt}
          style={{ width: "100%", padding: "12px 16px", background: C.blue, border: "none", borderRadius: 10, color: C.white, fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }}
          onMouseOver={e => { e.currentTarget.style.background = "#0015d4"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseOut={e => { e.currentTarget.style.background = C.blue; e.currentTarget.style.transform = "translateY(0)"; }}>
          Megnyitás
        </button>
        <div style={{ fontSize: 11, color: "#333", marginTop: 20 }}>dropline · AI Videó Produkció · 2026</div>
      </div>
    </div>
  );
}

function useBreakpoint() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 768);
  useEffect(() => {
    const h = () => setWidth(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return { isMobile: width < 640, isTablet: width < 900 };
}

const fmt = n => new Intl.NumberFormat("hu-HU").format(n) + " Ft";

function SectionTitle({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
      <div style={{ width: 3, height: 16, background: C.blue, borderRadius: 2, flexShrink: 0 }} />
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.blue }}>{children}</span>
    </div>
  );
}

function Card({ children, style = {} }) {
  return <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 20, ...style }}>{children}</div>;
}

function StatCard({ label, value, sub, accent = false }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: accent ? C.blue : C.card, border: `1px solid ${accent ? (hov ? "#3355ff" : C.blue) : (hov ? "#333" : C.border)}`, borderRadius: 12, padding: "18px 20px", display: "flex", flexDirection: "column", gap: 5, transition: "all 0.2s", transform: hov ? "translateY(-2px)" : "none", boxShadow: hov ? (accent ? "0 8px 24px rgba(0,26,255,0.3)" : "0 4px 16px rgba(0,0,0,0.3)") : "none" }}>
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: accent ? "rgba(255,255,255,0.65)" : C.muted }}>{label}</span>
      <span style={{ fontSize: 20, fontWeight: 800, color: C.white, letterSpacing: "-0.03em", lineHeight: 1.1 }}>{value}</span>
      {sub && <span style={{ fontSize: 11, color: accent ? "rgba(255,255,255,0.55)" : C.muted }}>{sub}</span>}
    </div>
  );
}

function VideoCard({ video, isMobile }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: C.card, border: `1px solid ${hov ? "#333" : C.border}`, borderRadius: 12, padding: 20, transition: "all 0.2s", transform: hov ? "translateY(-2px)" : "none", boxShadow: hov ? "0 6px 20px rgba(0,0,0,0.3)" : "none" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(0,26,255,0.12)", border: "1px solid rgba(0,26,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: C.blue }}>{video.id.toUpperCase()}</div>
      </div>
      <div style={{ fontSize: 15, fontWeight: 700, color: C.white, marginBottom: 3, letterSpacing: "-0.02em" }}>{video.cim}</div>
      <div style={{ fontSize: 12, color: C.muted, marginBottom: 14 }}>{video.alcim}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
        {[
          { ikon: "👤", label: video.szereplo },
          { ikon: "📍", label: video.helyszin },
          { ikon: "🎨", label: video.hangulat },
        ].map(({ ikon, label }) => (
          <div key={label} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
            <span style={{ fontSize: 11, flexShrink: 0 }}>{ikon}</span>
            <span style={{ fontSize: 12, color: C.text }}>{label}</span>
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1px solid ${C.border2}`, paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 11, color: C.muted }}>Videó ára</span>
        <span style={{ fontSize: 17, fontWeight: 800, color: C.white, letterSpacing: "-0.03em" }}>{fmt(video.ar)}</span>
      </div>
    </div>
  );
}

function RoadmapStep({ step, index, total }) {
  const [hov, setHov] = useState(false);
  const isLast = index === total - 1;
  return (
    <div style={{ display: "flex", gap: 16, position: "relative" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
          style={{ width: 40, height: 40, borderRadius: 10, background: hov ? C.blue : "rgba(0,26,255,0.1)", border: `1.5px solid ${hov ? C.blue : "rgba(0,26,255,0.3)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: hov ? C.white : C.blue, transition: "all 0.2s", flexShrink: 0 }}>{step.fázis}</div>
        {!isLast && <div style={{ width: 1, flex: 1, background: "linear-gradient(to bottom, rgba(0,26,255,0.3), rgba(0,26,255,0.05))", minHeight: 32, marginTop: 4 }} />}
      </div>
      <div style={{ paddingBottom: isLast ? 0 : 28, flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: C.white }}>{step.nev}</span>
          <span style={{ fontSize: 11, color: C.blue, fontWeight: 600, whiteSpace: "nowrap", background: "rgba(0,26,255,0.08)", border: "1px solid rgba(0,26,255,0.2)", padding: "2px 10px", borderRadius: 20 }}>{step.idotartam}</span>
        </div>
        <p style={{ fontSize: 13, color: C.muted, margin: "0 0 8px", lineHeight: 1.6 }}>{step.leiras}</p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 10, color: "#4ade80" }}>✓</span>
          <span style={{ fontSize: 11, color: "#4ade80", fontWeight: 600 }}>{step.eredmeny}</span>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const [tab, setTab] = useState("attekintes");
  const { isMobile, isTablet } = useBreakpoint();
  const px = isMobile ? 16 : 32;
  const totalAr = VIDEOS.reduce((s, v) => s + v.ar, 0);
  const tabs = [
    { id: "attekintes", label: "Összesítés" },
    { id: "videok", label: "Videók" },
    { id: "roadmap", label: "Projekt roadmap" },
    { id: "scope", label: "Scope & feltételek" },
  ];

  return (
    <div style={{ fontFamily: "'Satoshi','DM Sans',system-ui,sans-serif", background: C.black, minHeight: "100vh", color: C.white }}>
      <style>{`
        @keyframes fadeIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        .tab-content { animation: fadeIn 0.2s ease }
      `}</style>

      {/* Header */}
      <div style={{ borderBottom: `1px solid ${C.border2}`, padding: `14px ${px}px`, background: C.black, position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <div>
            <div style={{ fontSize: isMobile ? 15 : 18, fontWeight: 800, letterSpacing: "-0.04em" }}>
              Árajánlat <span style={{ color: C.blue }}>·</span> Horváth Márk
            </div>
            <div style={{ fontSize: 11, color: C.dim, marginTop: 2 }}>AI Videó Produkció · 2026 · Érvényes: 30 napig</div>
          </div>
          <div style={{ fontSize: 11, color: "#333", border: "1px solid #1e1e1e", padding: "5px 12px", borderRadius: 20, whiteSpace: "nowrap" }}>nettó · ÁFA nélkül</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${C.charcoal}`, overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", padding: `0 ${px}px`, minWidth: "max-content" }}>
          {tabs.map(t => {
            const a = tab === t.id;
            return (
              <button key={t.id} onClick={() => setTab(t.id)}
                style={{ padding: isMobile ? "11px 13px" : "14px 18px", fontSize: isMobile ? 12 : 13, fontWeight: 600, background: "transparent", border: "none", borderBottom: `2px solid ${a ? C.blue : "transparent"}`, color: a ? C.white : C.muted, cursor: "pointer", whiteSpace: "nowrap", transition: "color 0.15s" }}
                onMouseOver={e => { if (!a) e.currentTarget.style.color = "#888"; }}
                onMouseOut={e => { if (!a) e.currentTarget.style.color = C.muted; }}>
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: `24px ${px}px 72px` }}>

        {/* ÖSSZESÍTÉS */}
        {tab === "attekintes" && (
          <div className="tab-content" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4,1fr)", gap: 12 }}>
              <StatCard label="Videók száma" value="4 db" sub="~1 perc / videó · 16:9 HD" />
              <StatCard label="Formátum" value="16:9" sub="HD MP4 export" />
              <StatCard label="Átadási határidő" value="14 munkanap" sub="az elfogadott ajánlattól" />
              <StatCard label="Teljes ár" value={fmt(totalAr)} sub="nettó + ÁFA" accent />
            </div>

            <Card>
              <SectionTitle>A projekt összefoglalója</SectionTitle>
              <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, margin: "0 0 16px" }}>
                4 db, egyenként ~1 perces AI-generált videó elkészítése kutatási célra. A videók fotorealisztikus, élőszereplős megjelenítéssel készülnek — nem animáció. Minden videóhoz storyboard készítés, karakterfejlesztés, AI videógenerálás, lip-sync feldolgozás és utómunka tartozik.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 10 }}>
                {VIDEOS.map(v => (
                  <div key={v.id} style={{ display: "flex", gap: 12, padding: "12px 14px", background: C.charcoal, borderRadius: 10, border: `1px solid ${C.border2}` }}>
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(0,26,255,0.1)", border: "1px solid rgba(0,26,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: C.blue, flexShrink: 0 }}>{v.id.toUpperCase()}</div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: C.white, marginBottom: 2 }}>{v.cim}</div>
                      <div style={{ fontSize: 11, color: C.muted }}>{v.alcim}</div>
                    </div>
                    <div style={{ marginLeft: "auto", fontSize: 13, fontWeight: 700, color: C.white, whiteSpace: "nowrap", flexShrink: 0 }}>{fmt(v.ar)}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, padding: "14px 16px", background: "rgba(0,26,255,0.08)", border: "1px solid rgba(0,26,255,0.2)", borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: C.white }}>Összesen (nettó)</span>
                <span style={{ fontSize: isMobile ? 20 : 24, fontWeight: 800, color: C.blue, letterSpacing: "-0.03em" }}>{fmt(totalAr)}</span>
              </div>
            </Card>

            <Card>
              <SectionTitle>Minden videó tartalmaz</SectionTitle>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 8 }}>
                {BENNE_VAN.map(item => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#4ade80", fontSize: 12, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 13, color: C.text }}>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* VIDEÓK */}
        {tab === "videok" && (
          <div className="tab-content" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1fr 1fr", gap: 16 }}>
              {VIDEOS.map(v => <VideoCard key={v.id} video={v} isMobile={isMobile} />)}
            </div>
            <div style={{ padding: "14px 16px", background: "rgba(0,26,255,0.08)", border: "1px solid rgba(0,26,255,0.2)", borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.white }}>4 videó összesen (nettó)</span>
              <span style={{ fontSize: isMobile ? 18 : 22, fontWeight: 800, color: C.blue, letterSpacing: "-0.03em" }}>{fmt(totalAr)}</span>
            </div>
          </div>
        )}

        {/* ROADMAP */}
        {tab === "roadmap" && (
          <div className="tab-content" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 12 }}>
              <StatCard label="Projekt indulás" value="Ajánlat elfogadása" sub="Storyboard első egyeztetés" />
              <StatCard label="Átadási határidő" value="14 munkanap" sub="Végleges videók" />
              <StatCard label="Storyboard jóváhagyás" value="3. munkanap" sub="Ügyfél visszajelzés szükséges" accent />
            </div>

            <Card>
              <SectionTitle>Projekt ütemterv</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {ROADMAP.map((step, i) => (
                  <RoadmapStep key={step.fázis} step={step} index={i} total={ROADMAP.length} />
                ))}
              </div>
            </Card>

            <Card>
              <SectionTitle>Fontos megjegyzés</SectionTitle>
              <div style={{ display: "flex", gap: 12, padding: "14px 16px", background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.2)", borderRadius: 10 }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>⚠️</span>
                <p style={{ fontSize: 13, color: "#d4a730", margin: 0, lineHeight: 1.6 }}>
                  Késedelmes visszajelzés esetén az átadási határidő arányosan tolódik.
                </p>
              </div>
            </Card>
          </div>
        )}

        {/* SCOPE */}
        {tab === "scope" && (
          <div className="tab-content" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16 }}>
              <Card>
                <SectionTitle>Ami benne van az árban</SectionTitle>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {BENNE_VAN.map(item => (
                    <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "8px 10px", background: "rgba(74,222,128,0.04)", border: "1px solid rgba(74,222,128,0.1)", borderRadius: 8 }}>
                      <span style={{ color: "#4ade80", fontSize: 12, flexShrink: 0, marginTop: 1 }}>✓</span>
                      <span style={{ fontSize: 13, color: C.text }}>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <SectionTitle>Ami nem része az ajánlatnak</SectionTitle>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {NEM_TARTALMAZ.map(item => (
                    <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "8px 10px", background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.1)", borderRadius: 8 }}>
                      <span style={{ color: "#ef4444", fontSize: 12, flexShrink: 0, marginTop: 1 }}>✕</span>
                      <span style={{ fontSize: 13, color: C.text }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 20 }}>
                  <SectionTitle>Technikai specifikáció</SectionTitle>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { label: "Formátum", ertek: "16:9 widescreen" },
                      { label: "Felbontás", ertek: "HD (1920×1080)" },
                      { label: "Export", ertek: "MP4" },
                      { label: "Hossz", ertek: "~1 perc / videó" },
                      { label: "Szereplők", ertek: "Fotorealisztikus, AI-generált" },
                      { label: "Hang", ertek: "Magyar narráció + lip-sync" },
                    ].map(({ label, ertek }) => (
                      <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${C.border2}` }}>
                        <span style={{ fontSize: 12, color: C.muted }}>{label}</span>
                        <span style={{ fontSize: 12, fontWeight: 600, color: C.white }}>{ertek}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            <Card>
              <SectionTitle>Az AI videóprodukció minőségéről</SectionTitle>
              <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, margin: 0 }}>
                Az AI-generált videók <strong style={{ color: C.white }}>fotorealisztikus, élőszereplős megjelenítést</strong> biztosítanak hagyományos forgatás nélkül. A végeredmény minősége megfelel a kutatási és prezentációs felhasználás elvárásainak. A lip-sync és a karakterkonsisztencia a jelenlegi legjobb AI modellek teljesítményétől függ — a végeredmény <strong style={{ color: C.white }}>„legjobb AI minőség"</strong> kategóriának minősül, nem broadcast televíziós szintnek.
              </p>
            </Card>

            <div style={{ padding: "16px 20px", background: "rgba(0,26,255,0.08)", border: "1px solid rgba(0,26,255,0.2)", borderRadius: 12, display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: 12 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.white, marginBottom: 4 }}>Teljes projekt ár</div>
                <div style={{ fontSize: 12, color: C.muted }}>4 db videó · storyboard · utómunka · átadás</div>
              </div>
              <div style={{ textAlign: isMobile ? "left" : "right" }}>
                <div style={{ fontSize: isMobile ? 22 : 28, fontWeight: 800, color: C.blue, letterSpacing: "-0.04em" }}>{fmt(totalAr)}</div>
                <div style={{ fontSize: 11, color: C.muted }}>nettó + ÁFA</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  return <Dashboard />;
}
