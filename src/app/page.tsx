"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Menu, ShoppingBag } from "lucide-react";
import { Fragment } from "react";

export default function Home() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const transition = (delay: number) => ({
    duration: reduceMotion ? 0 : 0.9,
    delay: reduceMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  return (
    <main className="min-h-screen bg-ivory">

      {/* CAMPAIGN HERO */}
      <section className="relative isolate flex h-[100svh] min-h-[844px] flex-col overflow-hidden bg-espresso text-ivory">

        {/* CAMPAIGN PHOTOGRAPH */}
        <motion.div
          initial={{
            opacity: reduceMotion ? 1 : 0.35,
            scale: reduceMotion ? 1 : 1.035,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: reduceMotion ? 0 : 2,
            ease: "easeOut",
          }}
          className="absolute inset-0 -z-20"
        >
          <Image
            src="/images/sera-hero.png"
            alt="SÉRA AMBRE fragrance campaign"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* VERTICAL IMAGE SCRIM */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(33, 27, 22, 0.70) 0%,
                rgba(33, 27, 22, 0.05) 20%,
                rgba(33, 27, 22, 0) 50%,
                rgba(33, 27, 22, 0.60) 68%,
                rgba(33, 27, 22, 0.85) 83%,
                rgba(33, 27, 22, 0.94) 100%
              )
            `,
          }}
        />

        {/* NAVIGATION */}
        <motion.header
          initial={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition(0.2)}
          className="relative z-10 flex h-20 w-full items-center gap-2 px-4"
        >
          <button
            aria-label="Open menu"
            className="flex size-11 shrink-0 items-center justify-center transition-opacity hover:opacity-60"
          >
            <Menu size={19} strokeWidth={1.2} />
          </button>

          <a
            href="/"
            className="flex-1 text-center font-display text-[38px] font-normal tracking-[4px]"
          >
            SÉRA
          </a>

          <a
            href="/bag"
            aria-label="Shopping bag"
            className="flex h-11 w-[60px] shrink-0 items-center justify-center gap-[5px] transition-opacity hover:opacity-60"
          >
            <ShoppingBag size={19} strokeWidth={1.2} />
            <span className="font-sans text-[11px]">0</span>
          </a>
        </motion.header>

        {/* CHAPTER LABEL */}
        <motion.p
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.06,
                delayChildren: reduceMotion ? 0 : 0.2,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="relative z-10 mt-7 px-6 font-sans text-[10px] tracking-[1.8px] text-ivory"
        >
          {"CHAPTER 01 — THE INVISIBLE SIGNATURE"
            .split(" ")
            .map((word, index) => (
              <Fragment key={`${word}-${index}`}>
                <motion.span
                  variants={fadeUp}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
                {index < 5 ? " " : ""}
              </Fragment>
            ))}
        </motion.p>

        {/* CAMPAIGN INVITATION */}
        <div className="relative z-10 mt-auto flex w-full flex-col gap-6 px-6 pb-10">

          {/* HEADLINE */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reduceMotion ? 0 : 0.12,
                  delayChildren: reduceMotion ? 0 : 0.3,
                },
              },
            }}
            className="w-full font-display text-[54px] font-normal leading-[0.98] tracking-[-1.3px] text-ivory"
          >
            {["The", "art", "of", "being", "remembered."].map(
              (word, index) => (
                <Fragment key={word}>
                  <motion.span
                    variants={fadeUp}
                    transition={{
                      duration: reduceMotion ? 0 : 1.15,
                      ease: [0, 0, 0.58, 1],
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                  {index !== 4 ? " " : ""}
                </Fragment>
              )
            )}
          </motion.h1>

          {/* COLLECTION CTA */}
          <motion.a
            href="#collection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition(1.1)}
            className="group flex h-[54px] w-full items-center justify-center gap-4 border border-ivory bg-transparent px-5 text-ivory transition-colors duration-500 hover:bg-ivory hover:text-espresso"
          >
            <span className="font-sans text-[12px] font-medium tracking-[1.1px] text-ivory transition-colors duration-500 group-hover:text-espresso">
              DISCOVER THE COLLECTION
            </span>

            <ArrowRight
              size={18}
              strokeWidth={1.2}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </motion.a>

          {/* EXPLORE CUE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition(1.5)}
            className="flex w-full items-center justify-between text-ivory"
          >
            <span className="font-sans text-[10px] tracking-[1.5px]">
              THREE SCENTS. AN ENDURING IMPRESSION.
            </span>

            <ArrowDown size={16} strokeWidth={1.2} />
          </motion.div>

        </div>
      </section>

      {/* INTRODUCTION TO THE HOUSE */}
      <section
        id="collection"
        className="flex flex-col gap-7 bg-ivory px-6 py-[72px]"
      >

        {/* HOUSE LABEL */}
        <div className="flex items-center gap-3">
          <span className="h-px w-[26px] bg-gold" />

          <span className="font-sans text-[10px] tracking-[1.8px] text-[#6C6053]">
            THE HOUSE OF SÉRA
          </span>
        </div>

        {/* EDITORIAL HEADING */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          transition={{ duration: reduceMotion ? 0 : 1 }}
          className="max-w-[310px] font-display text-[42px] font-normal leading-[1.04] tracking-[-0.7px] text-espresso"
        >
          Some things linger.
          <br />
          Not all can be seen.
        </motion.h2>

        {/* INTRODUCTION COPY */}
        <div className="flex w-full flex-col gap-6 pl-[30px]">
          <p className="max-w-[294px] font-sans text-[15px] leading-[1.75] text-[#6C6053]">
            Fragrance is the most intimate form of expression. We compose
            scents that become part of you — quietly distinctive,
            impossible to forget.
          </p>

          <a
            href="#our-house"
            className="w-fit font-sans text-[12px] tracking-[0.7px] text-espresso underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            Enter our world ↗
          </a>
        </div>

      </section>

    </main>
  );
}