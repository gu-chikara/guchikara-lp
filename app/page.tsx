import Image from "next/image";
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

  return (
    <div style={{ backgroundColor: "#F8F5F0", minHeight: "100vh", fontFamily: "sans-serif", color: "#3A3A3A" }}>
      {/* Navbar */}
      <nav style={{
        backgroundColor: "#F8F5F0",
        borderBottom: "1px solid #ddd",
        padding: "16px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
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

      {/* FV */}
      <div style={{ display: "flex", minHeight: "calc(100vh - 57px)" }} className="fv-container">
        {/* Left column - hero image */}
        <div style={{
          width: "45%",
          backgroundColor: "#c8d8cc",
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
        }} className="fv-left">
          {hasHero && (
            <Image
              src="/guchikara-lp/images/hero.jpg"
              alt="グチカラ ヒーロー画像"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          )}
          {/* Gradient fade to right */}
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "120px",
            height: "100%",
            background: "linear-gradient(to right, transparent, #F8F5F0)",
          }} />
        </div>

        {/* Right column - content */}
        <div style={{
          width: "55%",
          display: "flex",
          alignItems: "center",
          padding: "44px 40px",
        }} className="fv-right">
          <div style={{ maxWidth: "480px" }}>
            {/* Brand text */}
            <p style={{
              fontSize: "12px",
              color: "#7A9E87",
              letterSpacing: "0.15em",
              marginBottom: "16px",
            }}>
              GUCHIKARA — 思考整理セッション
            </p>

            {/* Tag badge */}
            <div style={{ marginBottom: "24px" }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#fff",
                border: "0.5px solid #C17A5A",
                borderRadius: "40px",
                padding: "8px 18px",
                fontSize: "13px",
                color: "#3A3A3A",
              }}>
                <span style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#C17A5A",
                  flexShrink: 0,
                }} />
                愚痴を、力に変える。
              </span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontSize: "2.25rem",
              fontWeight: "500",
              lineHeight: "1.4",
              marginBottom: "20px",
            }}>
              ぜんぶ、<span style={{ color: "#7A9E87" }}>話して。</span>
            </h1>

            {/* Divider */}
            <div style={{
              width: "40px",
              height: "2px",
              backgroundColor: "#C17A5A",
              marginBottom: "20px",
            }} />

            {/* Sub */}
            <p style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "16px",
            }}>
              頭の中のカオスを、動ける設計に変える。
            </p>

            {/* Catch copy */}
            <p style={{
              fontSize: "13px",
              color: "#888",
              lineHeight: "1.8",
              marginBottom: "32px",
            }}>
              やりたいことはある。でも、何から始めればいいかわからない。<br />
              そのモヤモヤ、まず全部話してみてください。
            </p>

            {/* CTA button */}
            <div style={{ marginBottom: "12px" }}>
              <a href="#apply" style={{
                display: "inline-block",
                backgroundColor: "#C17A5A",
                color: "#fff",
                borderRadius: "40px",
                padding: "14px 32px",
                fontSize: "15px",
                fontWeight: "500",
                textDecoration: "none",
              }}>
                無料相談を申し込む
              </a>
            </div>

            {/* Note */}
            <p style={{ fontSize: "12px", color: "#aaa" }}>
              ※ 完全無料・勧誘なし・60分
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .fv-container {
            flex-direction: column !important;
          }
          .fv-left {
            width: 100% !important;
            height: 300px !important;
            min-height: 300px !important;
          }
          .fv-right {
            width: 100% !important;
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
