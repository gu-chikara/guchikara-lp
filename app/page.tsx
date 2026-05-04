import Image from "next/image";
import {
  Lightbulb, BookOpen, Clock,
  BrainCircuit, Sparkles, ArrowRight,
  MessageCircle, Layers, GitBranch, PenLine, CheckCircle2,
  Check,
} from "lucide-react";
import { existsSync } from "fs";
import { join } from "path";

function heroExists(): boolean {
  try {
    return existsSync(join(process.cwd(), "public", "images", "hero.jpg"));
  } catch {
    return false;
  }
}

export default function Home() {
  const hasHero = heroExists();

  const empathyCards = [
    { icon: <Lightbulb size={24} color="#C17A5A" />, text: "やりたいことはある。でも何から始めればいいかわからない" },
    { icon: <BookOpen size={24} color="#C17A5A" />, text: "情報は集めた。でも頭の中が整理できていない" },
    { icon: <Clock size={24} color="#C17A5A" />, text: "動きたい。でも気づいたら1年が過ぎていた" },
  ];

  const steps = [
    { num: "1", icon: <MessageCircle size={20} color="#C17A5A" />, title: "吐き出す", desc: "愚痴・モヤモヤをそのまま言葉にする" },
    { num: "2", icon: <Layers size={20} color="#C17A5A" />, title: "分解する", desc: "情報と問題を整理する" },
    { num: "3", icon: <GitBranch size={20} color="#C17A5A" />, title: "構造化する", desc: "関係性・優先順位を明確にする" },
    { num: "4", icon: <PenLine size={20} color="#C17A5A" />, title: "設計する", desc: "方向性・価値・ターゲットを決める" },
    { num: "5", icon: <CheckCircle2 size={20} color="#C17A5A" />, title: "決定する", desc: "次の一手を確定させる" },
  ];

  const freeChecks = [
    "60分・オンライン",
    "完全無料",
    "勧誘なし",
    "現状ヒアリング＋方向性のヒント",
  ];

  const paidChecks = [
    "60分・オンライン",
    "思考の完全整理",
    "問題構造の言語化",
    "行動プランのお渡し",
    "セッション後レポート付き",
  ];

  return (
    <div style={{ backgroundColor: "#F8F5F0", fontFamily: "sans-serif", color: "#3A3A3A" }}>

      {/* ── Navbar ── */}
      <nav style={{
        backgroundColor: "#F8F5F0", borderBottom: "1px solid #ddd",
        padding: "16px 40px", display: "flex", alignItems: "center",
        justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "0.05em" }}>
          グチ<span style={{ color: "#7A9E87" }}>カラ</span>
        </div>
        <div style={{ display: "flex", gap: "32px", fontSize: "14px" }}>
          <a href="#about" style={{ color: "#3A3A3A", textDecoration: "none" }}>サービスについて</a>
          <a href="#price" style={{ color: "#3A3A3A", textDecoration: "none" }}>料金</a>
          <a href="#apply" style={{ color: "#3A3A3A", textDecoration: "none" }}>お申し込み</a>
        </div>
      </nav>

      {/* ── FV ── */}
      <div style={{ display: "flex", minHeight: "calc(100vh - 57px)" }} className="fv-container">
        <div style={{
          width: "45%", backgroundColor: "#c8d8cc",
          position: "relative", overflow: "hidden", flexShrink: 0,
        }} className="fv-left">
          {hasHero && (
            <Image
              src="/guchikara-lp/images/hero.jpg" alt="グチカラ ヒーロー画像"
              fill style={{ objectFit: "cover", objectPosition: "top center" }} priority
            />
          )}
          <div style={{
            position: "absolute", top: 0, right: 0, width: "120px", height: "100%",
            background: "linear-gradient(to right, transparent, #F8F5F0)",
          }} />
        </div>
        <div style={{ width: "55%", display: "flex", alignItems: "center", padding: "44px 40px" }} className="fv-right">
          <div style={{ maxWidth: "480px" }}>
            <p style={{ fontSize: "12px", color: "#7A9E87", letterSpacing: "0.15em", marginBottom: "16px" }}>
              GUCHIKARA — 思考整理セッション
            </p>
            <div style={{ marginBottom: "24px" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "#fff", border: "0.5px solid #C17A5A",
                borderRadius: "40px", padding: "8px 18px", fontSize: "13px", color: "#3A3A3A",
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#C17A5A", flexShrink: 0 }} />
                愚痴を、力に変える。
              </span>
            </div>
            <h1 style={{ fontSize: "2.25rem", fontWeight: "500", lineHeight: "1.4", marginBottom: "20px" }}>
              ぜんぶ、<span style={{ color: "#7A9E87" }}>話して。</span>
            </h1>
            <div style={{ width: "40px", height: "2px", backgroundColor: "#C17A5A", marginBottom: "20px" }} />
            <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.8", marginBottom: "16px" }}>
              頭の中のカオスを、動ける設計に変える。
            </p>
            <p style={{ fontSize: "13px", color: "#888", lineHeight: "1.8", marginBottom: "32px" }}>
              やりたいことはある。でも、何から始めればいいかわからない。<br />
              そのモヤモヤ、まず全部話してみてください。
            </p>
            <div style={{ marginBottom: "12px" }}>
              <a href="#apply" style={{
                display: "inline-block", backgroundColor: "#C17A5A", color: "#fff",
                borderRadius: "40px", padding: "14px 32px", fontSize: "15px",
                fontWeight: "500", textDecoration: "none",
              }}>
                無料相談を申し込む
              </a>
            </div>
            <p style={{ fontSize: "12px", color: "#aaa" }}>※ 完全無料・勧誘なし・60分</p>
          </div>
        </div>
      </div>

      {/* ── ブロック① 共感セクション ── */}
      <section id="about" style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
          <p style={{ fontSize: "13px", color: "#7A9E87", letterSpacing: "0.15em", marginBottom: "40px" }}>
            こんな状態、続いていませんか？
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
            {empathyCards.map((card, i) => (
              <div key={i} style={{
                backgroundColor: "#F8F5F0", borderRadius: "12px", padding: "24px",
                borderLeft: "4px solid #C17A5A",
                display: "flex", alignItems: "center", gap: "16px",
              }}>
                <div style={{ flexShrink: 0 }}>{card.icon}</div>
                <p style={{ fontSize: "15px", color: "#3A3A3A", margin: 0, lineHeight: "1.7" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ブロック② 問題提起セクション ── */}
      <section style={{ backgroundColor: "#F8F5F0" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
          <p style={{ fontSize: "2rem", fontWeight: "500", color: "#3A3A3A", margin: 0, lineHeight: "1.5" }}>
            それは、能力の問題じゃない。
          </p>
          <p style={{ fontSize: "2rem", fontWeight: "500", color: "#7A9E87", marginTop: "16px", marginBottom: 0, lineHeight: "1.5" }}>
            思考が整理されていないだけ。
          </p>
          <p style={{ fontSize: "15px", color: "#666", lineHeight: "1.9", marginTop: "32px", marginBottom: "48px" }}>
            情報過多の時代、頭の中がカオスになるのは当然のことです。<br />
            必要なのは、その混乱を整理してくれる&ldquo;場&rdquo;と&ldquo;人&rdquo;です。
          </p>

          {/* Before / After */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }} className="before-after">
            {/* Before */}
            <div style={{
              flex: 1, backgroundColor: "#fff", borderRadius: "12px", padding: "24px",
              opacity: 0.6, textAlign: "left",
            }}>
              <BrainCircuit size={32} color="#aaa" />
              <p style={{ fontSize: "15px", fontWeight: "600", color: "#3A3A3A", margin: "12px 0 6px" }}>頭の中がカオス</p>
              <p style={{ fontSize: "13px", color: "#888", margin: 0, lineHeight: "1.7" }}>情報が溢れて動けない</p>
            </div>

            {/* Arrow */}
            <div style={{ flexShrink: 0 }}>
              <ArrowRight size={32} color="#C17A5A" />
            </div>

            {/* After */}
            <div style={{
              flex: 1, backgroundColor: "#fff", borderRadius: "12px", padding: "24px",
              textAlign: "left", position: "relative",
            }}>
              <div style={{
                position: "absolute", top: "12px", right: "12px",
                backgroundColor: "#7A9E87", color: "#fff",
                fontSize: "11px", fontWeight: "700", padding: "2px 10px",
                borderRadius: "20px", letterSpacing: "0.05em",
              }}>After</div>
              <Sparkles size={32} color="#7A9E87" />
              <p style={{ fontSize: "15px", fontWeight: "600", color: "#3A3A3A", margin: "12px 0 6px" }}>思考が整理された状態</p>
              <p style={{ fontSize: "13px", color: "#888", margin: 0, lineHeight: "1.7" }}>次の一手が明確</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ブロック③ 解決策セクション ── */}
      <section style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
          <p style={{ fontSize: "13px", color: "#7A9E87", letterSpacing: "0.15em", marginBottom: "16px" }}>
            グチカラができること
          </p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "500", color: "#3A3A3A", marginBottom: "48px" }}>
            愚痴レベルの本音から、次の一手まで。
          </h2>
          <div style={{ textAlign: "left" }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "20px", padding: "24px 0",
                borderBottom: i < steps.length - 1 ? "1px solid #eee" : "none",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "60px", flexShrink: 0 }}>
                  <span style={{ fontSize: "1.5rem", fontWeight: "700", color: "#C17A5A", lineHeight: "1" }}>{step.num}</span>
                  {step.icon}
                </div>
                <div>
                  <p style={{ fontSize: "16px", fontWeight: "600", color: "#3A3A3A", margin: "0 0 4px" }}>{step.title}</p>
                  <p style={{ fontSize: "14px", color: "#666", margin: 0, lineHeight: "1.7" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ブロック④ プロフィールセクション ── */}
      <section style={{ backgroundColor: "#3A3A3A" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
          <p style={{ fontSize: "13px", color: "#7A9E87", letterSpacing: "0.15em", marginBottom: "16px" }}>プロフィール</p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "500", color: "#ffffff", marginTop: "16px", marginBottom: 0 }}>濱田（仮名）</h2>
          <p style={{ fontSize: "15px", color: "#ccc", lineHeight: "1.9", marginTop: "24px" }}>
            不動産業界での営業職時代、私は&ldquo;全部オープンにする&rdquo;スタイルでお客様と向き合ってきました。
          </p>
          <p style={{ fontSize: "15px", color: "#ccc", lineHeight: "1.9", marginTop: "20px" }}>
            売り込むのではなく、寄り添うこと。<br />
            そうすることで、ほぼ紹介だけで成り立つ仕事ができました。
          </p>
          <p style={{ fontSize: "15px", color: "#ccc", lineHeight: "1.9", marginTop: "20px" }}>
            その経験から気づいたのは、人は&ldquo;整理された安心感&rdquo;の中でこそ、本当にやりたいことを話せるということ。<br />
            グチカラは、その場を作るサービスです。
          </p>
        </div>
      </section>

      {/* ── ブロック⑤ 料金セクション ── */}
      <section id="price" style={{ backgroundColor: "#F8F5F0" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
          <p style={{ fontSize: "13px", color: "#7A9E87", letterSpacing: "0.15em", marginBottom: "40px" }}>料金</p>
          <div style={{ display: "flex", gap: "24px", justifyContent: "center" }} className="price-cards">
            {/* 無料カード */}
            <div style={{ flex: 1, backgroundColor: "#ffffff", borderRadius: "16px", padding: "40px 32px", textAlign: "left" }}>
              <p style={{ fontSize: "13px", color: "#7A9E87", fontWeight: "600", marginBottom: "16px" }}>初回無料相談</p>
              <p style={{ fontSize: "3rem", fontWeight: "700", color: "#3A3A3A", margin: "0 0 24px", lineHeight: 1 }}>¥0</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {freeChecks.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <Check size={16} color="#7A9E87" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "14px", color: "#555", lineHeight: "1.5" }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "12px", color: "#aaa", marginTop: "20px" }}>まずは話してみてください</p>
            </div>
            {/* 有料カード */}
            <div style={{ flex: 1, backgroundColor: "#C17A5A", borderRadius: "16px", padding: "40px 32px", textAlign: "left" }}>
              <p style={{ fontSize: "13px", color: "#fff", fontWeight: "600", marginBottom: "16px" }}>思考整理セッション</p>
              <p style={{ fontSize: "3rem", fontWeight: "700", color: "#fff", margin: "0 0 24px", lineHeight: 1 }}>¥8,000</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {paidChecks.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <Check size={16} color="rgba(255,255,255,0.9)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)", lineHeight: "1.5" }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", marginTop: "20px" }}>セッション後に行動プランをお渡しします</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ブロック⑥ CTAセクション ── */}
      <section id="apply" style={{ backgroundColor: "#7A9E87", position: "relative", overflow: "hidden" }}>
        {/* 装飾サークル */}
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "300px", height: "300px", borderRadius: "50%",
          background: "rgba(255,255,255,0.05)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-40px", left: "-40px",
          width: "150px", height: "150px", borderRadius: "50%",
          background: "rgba(255,255,255,0.05)", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 20px", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "500", color: "#ffffff", margin: 0, lineHeight: "1.5" }}>
            まず、ぜんぶ話してみてください。
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", marginTop: "16px", marginBottom: "40px" }}>
            整理されると、人は動き出せる。
          </p>
          <a href="https://forms.gle/" style={{
            display: "inline-block", backgroundColor: "#ffffff", color: "#C17A5A",
            fontWeight: "700", borderRadius: "40px", padding: "16px 48px",
            fontSize: "16px", textDecoration: "none",
          }}>
            無料相談を申し込む
          </a>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", marginTop: "16px" }}>
            ※ 完全無料・勧誘なし・オンライン60分
          </p>
        </div>
      </section>

      {/* ── フッター ── */}
      <footer style={{ backgroundColor: "#3A3A3A", textAlign: "center", padding: "32px 20px" }}>
        <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>© 2025 グチカラ — 思考整理セッション</p>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .fv-container { flex-direction: column !important; }
          .fv-left { width: 100% !important; height: 300px !important; min-height: 300px !important; }
          .fv-right { width: 100% !important; padding: 32px 24px !important; }
          .price-cards { flex-direction: column !important; }
          .before-after { flex-direction: column !important; }
        }
      `}</style>
    </div>
  );
}
