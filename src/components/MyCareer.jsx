import { motion } from "motion/react";
import { FaCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const items = [
  {
    id: 1,
    year: "2019",
    title: "日本語学校",
    text: "名古屋福徳日本語学院で日本語と文化を学びました。",
    icon: <FaGraduationCap />,
    tags: ["日本語", "コミュニケーション", "文化"],
  },
  {
    id: 2,
    year: "2021",
    title: "ITカレッジ2年課程修了",
    text: "名古屋未来テクノロジー専門学校にてITの2年間のコースを修了しました。",
    icon: <FaGraduationCap />,
    tags: ["IT基礎", "プログラミング", "ネットワーキング"],
  },
  {
    id: 3,
    year: "2022",
    title: "営業・マーケティング",
    text: "営業職において、コミュニケーション・交渉・リーダーシップスキルを磨きました。",
    icon: <FaBriefcase />,
    tags: ["リーダーシップ", "コミュニケーション", "チームワーク"],
  },
  {
    id: 4,
    year: "2023",
    title: "Juniorフロントエンド開発者",
    text: "React、Tailwind CSS、JavaScriptを使用してモダンなWebアプリケーションの構築を開始しました。",
    icon: <FaCode />,
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 5,
    year: "2024+",
    title: "フルスタック開発者への道",
    text: "Node.jsとデータベースを活用したフルスタック開発者を目指して学習中です。",
    icon: <FaCode />,
    tags: ["Node.js", "データベース", "フルスタック"],
    isCurrent: true,
  },
];

function Card({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative backdrop-blur-xl
        bg-white/60 dark:bg-white/5
        border border-gray-200/60 dark:border-white/10
        rounded-2xl p-5 sm:p-6
        shadow-lg shadow-black/5 dark:shadow-black/20
        hover:border-yellow-500/40 hover:shadow-yellow-500/10
        transition-all duration-300"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl
        bg-gradient-to-br from-yellow-400/5 via-pink-400/5 to-purple-400/5
        transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Icon + Year */}
        <div className="flex items-center justify-between mb-3">
          <span className="w-9 h-9 rounded-lg bg-yellow-500/10 text-yellow-500
            flex items-center justify-center text-sm">
            {item.icon}
          </span>
          <span className={`text-xs font-bold px-3 py-1 rounded-full
            ${item.isCurrent
              ? "bg-yellow-500 text-black"
              : "bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400"
            }`}>
            {item.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold mb-1.5
          group-hover:text-yellow-500 transition-colors">
          {item.title}
        </h3>

        {/* Text */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
          {item.text}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full
              bg-gray-100 dark:bg-white/10
              text-gray-600 dark:text-gray-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Dot() {
  return (
    <div className="relative flex items-center justify-center">
      <span className="absolute w-10 h-10 bg-yellow-400/20 rounded-full animate-ping" />
      <div className="relative z-10 w-5 h-5 rounded-full bg-yellow-500
        border-4 border-white dark:border-gray-900
        shadow-[0_0_12px_rgba(234,179,8,0.8)]" />
    </div>
  );
}

export default function MyCareer() {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6">

      {/* Title */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
          私の歩み
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold">キャリアタイムライン</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded" />
      </div>

      <div className="relative max-w-4xl mx-auto">

        {/* Desktop center line */}
        <motion.div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]
            bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-500"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          style={{ originY: 0 }}
        />

        {/* Mobile left line */}
        <motion.div
          className="md:hidden absolute left-5 top-0 bottom-0 w-[2px]
            bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-500"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          style={{ originY: 0 }}
        />

        <div className="space-y-10 md:space-y-14">
          {items.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Desktop — alternating */}
                <div
                  className="hidden md:grid items-center gap-0"
                  style={{ gridTemplateColumns: "1fr 56px 1fr" }}
                >
                  <div className="pr-6 flex justify-end">
                    {isLeft && <div className="w-full max-w-sm"><Card item={item} /></div>}
                  </div>

                  <div className="flex justify-center">
                    <Dot />
                  </div>

                  <div className="pl-6">
                    {!isLeft && <div className="w-full max-w-sm"><Card item={item} /></div>}
                  </div>
                </div>

                {/* Mobile — single column */}
                <div className="md:hidden relative pl-12">
                  <div className="absolute left-5 top-5 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-yellow-500
                      border-[3px] border-white dark:border-gray-900
                      shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
                  </div>
                  <Card item={item} />
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
