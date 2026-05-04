"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb, BookOpen, Clock,
  BrainCircuit, Sparkles, ArrowRight,
  MessageCircle, Layers, GitBranch, PenLine, CheckCircle2,
  Check, Menu, X,
} from "lucide-react";
import FadeInSection from "./FadeInSection";

interface Props {
  hasHero: boolean;
}

export default function LPContent({ hasHero }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const navLinks = [
    { href: "#about", label: "サービスについて" },
    { href: "#price", label: "料金" },
    { href: "#apply", label: "お申し込み" },
  ];

  return (
    <div style={{ backgroundColor: "#F8F5F0", fontFamily: "sans-serif", color: "#3A3A3A" }}>

      {/* ── Navbar ── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: "#F8F5F0", borderBottom: "1px solid #ddd",
          padding: "16px 24px", display: "flex", alignItems: "center",
          justifyContent: "space-between", position: "sticky", top: 0, zIndex: 200,
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "0.05em" }}>
          グチ<span style={{ color: "#7A9E87" }}>カラ</span>
        </div>

        {/* デスクトップ用ナビ */}
        <div className="nav-desktop" style={{ display: "flex", gap: "32px", fontSize: "14px" }}>
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ color: "#C17A5A" }}
              transition={{ duration: 0.2 }}
              className="nav-link"
              style={{ color: "#3A3A3A", textDecoration: "none", position: "relative" }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* ハンバーガーボタン（モバイルのみ） */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none", border: "none", cursor: "pointer",
            padding: "4px", color: "#3A3A3A",
          }}
          aria-label="メニューを開く"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* モバイルメニュー オーバーレイ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed", top: "57px", left: 0, right: 0, bottom: 0,
              backgroundColor: "#F8F5F0", zIndex: 190,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "40px",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "22px", fontWeight: "500",
                  color: "#3A3A3A", textDecoration: "none",
                  letterSpacing: "0.05em",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#apply"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: "16px",
                backgroundColor: "#C17A5A", color: "#fff",
                borderRadius: "40px", padding: "14px 32px",
                fontSize: "15px", fontWeight: "500", textDecoration: "none",
              }}
            >
              無料相談を申し込む
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FV ── */}
      <div style={{ display: "flex", minHeight: "calc(100vh - 57px)" }} className="fv-container">
        {/* 左：写真エリア */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            width: "45%", backgroundColor: "#c8d8cc",
            position: "relative", overflow: "hidden", flexShrink: 0,
          }}
          className="fv-left"
        >
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
        </motion.div>

        {/* 右：テキストエリア */}
        <div style={{ width: "55%", display: "flex", alignItems: "center", padding: "44px 40px" }} className="fv-right">
          <div style={{ maxWidth: "480px" }}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ fontSize: "12px", color: "#7A9E87", letterSpacing: "0.15em", marginBottom: "16px" }}
            >
              GUCHIKARA — 思考整理セッション
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ marginBottom: "24px" }}
            >
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "#fff", border: "0.5px solid #C17A5A",
                borderRadius: "40px", padding: "8px 18px", fontSize: "13px", color: "#3A3A3A",
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#C17A5A", flexShrink: 0 }} />
                愚痴を、力に変える。
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ fontSize: "2.25rem", fontWeight: "500", lineHeight: "1.4", marginBottom: "20px" }}
            >
              ぜんぶ、<span style={{ color: "#7A9E87" }}>話して。</span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              style={{ height: "2px", backgroundColor: "#C17A5A", marginBottom: "20px" }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              style={{ fontSize: "15px", color: "#555", lineHeight: "1.8", marginBottom: "16px" }}
            >
              頭の中のカオスを、動ける設計に変える。
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              style={{ fontSize: "13px", color: "#888", lineHeight: "1.8", marginBottom: "32px" }}
            >
              やりたいことはある。でも、何から始めればいいかわからない。<br />
              そのモヤモヤ、まず全部話してみてください。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              style={{ marginBottom: "12px" }}
            >
              <motion.a
                href="#apply"
                whileHover={{ scale: 1.04, backgroundColor: "#d4896a" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "inline-block", backgroundColor: "#C17A5A", color: "#fff",
                  borderRadius: "40px", padding: "14px 32px", fontSize: "15px",
                  fontWeight: "500", textDecoration: "none",
                }}
              >
                無料相談を申し込む
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              style={{ fontSize: "12px", color: "#aaa" }}
            >
              ※ 完全無料・勧誘なし・60分
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── ブロック① 共感セクション ── */}
      <section id="about" style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
          <FadeInSection>
            <p style={{ fontSize: "13px", color: "#7A9E87", letterSpacing: "0.15em", marginBottom: "40px" }}>
              こんな状態、続いていませんか？
            </p>
          </FadeInSection>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
            {empathyCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                style={{
                  backgroundColor: "#F8F5F0", borderRadius: "12px", padding: "24px",
                  borderLeft: "4px solid #C17A5A",
                  display: "flex", alignItems: "center", gap: "16px",
                  cursor: "default",
                }}
              >
                <div style={{ flexShrink: 0 }}>{card.icon}</div>
                <p style={{ fontSize: "15px", color: "#3A3A3A", margin: 0, lineHeight: "1.7" }}>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ブロック② 問題提起セクション ── */}
      <section style={{ backgroundColor: "#F8F5F0" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
          <FadeInSection>
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
          </FadeInSection>

          {/* Before / After */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }} className="before-after">
            <FadeInSection direction="left" style={{ flex: 1 }}>
              <div style={{
                backgroundColor: "#fff", borderRadius: "12px", padding: "24px",
                opacity: 0.6, textAlign: "left",
              }}>
                <BrainCircuit size={32} color="#aaa" />
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#3A3A3A", margin: "12px 0 6px" }}>頭の中がカオス</p>
                <p style={{ fontSize: "13px", color: "#888", margin: 0, lineHeight: "1.7" }}>情報が溢れて動けない</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3} style={{ flexShrink: 0 }}>
              <ArrowRight size={32} color="#C17A5A" />
            </FadeInSection>

            <FadeInSection direction="right" delay={0.2} style={{ flex: 1 }}>
              <div style={{
                backgroundColor: "#fff", borderRadius: "12px", padding: "24px",
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
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── ブロック③ 解決策セクション ── */}
      <section style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
          <FadeInSection>
            <p style={{ fontSize: "13px", color: "#7A9E87", letterSpacing: "0.15em", marginBottom: "16px" }}>
              グチカラができること
            </p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "500", color: "#3A3A3A", marginBottom: "48px" }}>
              愚痴レベルの本音から、次の一手まで。
            </h2>
          </FadeInSection>
          <div style={{ textAlign: "left" }}>
            {steps.map((step, i) => (
              <div key={i} style={{ borderBottom: i < steps.length - 1 ? "1px solid #eee" : "none" }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: "20px", padding: "24px 0" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "60px", flexShrink: 0 }}>
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease: "backOut", delay: i * 0.08 }}
                      style={{ fontSize: "1.5rem", fontWeight: "700", color: "#C17A5A", lineHeight: "1" }}
                    >
                      {step.num}
                    </motion.span>
                    {step.icon}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 + 0.1 }}
                  >
                    <p style={{ fontSize: "16px", fontWeight: "600", color: "#3A3A3A", margin: "0 0 4px" }}>{step.title}</p>
                    <p style={{ fontSize: "14px", color: "#666", margin: 0, lineHeight: "1.7" }}>{step.desc}</p>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ブロック④ プロフィールセクション ── */}
      <section style={{ backgroundColor: "#3A3A3A" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
          <FadeInSection>
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
          </FadeInSection>
        </div>
      </section>

      {/* ── ブロック⑤ 料金セクション ── */}
      <section id="price" style={{ backgroundColor: "#F8F5F0" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
          <FadeInSection>
            <p style={{ fontSize: "13px", color: "#7A9E87", letterSpacing: "0.15em", marginBottom: "40px" }}>料金</p>
          </FadeInSection>
          <div style={{ display: "flex", gap: "24px", justifyContent: "center" }} className="price-cards">
            {/* 無料カード */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
              whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.1)" }}
              style={{ flex: 1, backgroundColor: "#ffffff", borderRadius: "16px", padding: "40px 32px", textAlign: "left" }}
            >
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
            </motion.div>

            {/* 有料カード */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.15)" }}
              style={{ flex: 1, backgroundColor: "#C17A5A", borderRadius: "16px", padding: "40px 32px", textAlign: "left" }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ブロック⑥ CTAセクション ── */}
      <section id="apply" style={{ backgroundColor: "#7A9E87", position: "relative", overflow: "hidden" }}>
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
        <FadeInSection>
          <div style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 20px", textAlign: "center", position: "relative" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "500", color: "#ffffff", margin: 0, lineHeight: "1.5" }}>
              まず、ぜんぶ話してみてください。
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", marginTop: "16px", marginBottom: "40px" }}>
              整理されると、人は動き出せる。
            </p>
            <motion.a
              href="https://forms.gle/"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "inline-block", backgroundColor: "#ffffff", color: "#C17A5A",
                fontWeight: "700", borderRadius: "40px", padding: "16px 48px",
                fontSize: "16px", textDecoration: "none",
              }}
            >
              無料相談を申し込む
            </motion.a>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", marginTop: "16px" }}>
              ※ 完全無料・勧誘なし・オンライン60分
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* ── フッター ── */}
      <footer style={{ backgroundColor: "#3A3A3A", textAlign: "center", padding: "32px 20px" }}>
        <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>© 2025 グチカラ — 思考整理セッション</p>
      </footer>

      <style>{`
        .nav-desktop { display: flex; }
        .nav-hamburger { display: none; }

        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
          .fv-container { flex-direction: column !important; }
          .fv-left { width: 100% !important; height: 420px !important; min-height: 420px !important; }
          .fv-left img { object-position: top center !important; }
          .fv-right { width: 100% !important; padding: 32px 24px !important; }
          .price-cards { flex-direction: column !important; }
          .before-after { flex-direction: column !important; }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #C17A5A;
          transition: width 0.2s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
