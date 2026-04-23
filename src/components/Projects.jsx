import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import FadeInSection from "./FadeInSection";
import weatherImg from "../assets/skycast.png";
import dateTimeImg from "../assets/Calender.png";
import ecommerceImg from "../assets/e-commerce.png";
import loginImg from "../assets/login-page.png";
import myCalculatorImg from "../assets/Calculator.png";
import JapaneseLearningAppImg from "../assets/JapaneseLearningApp.jpg";

const projects = [
  {
    imgSrc: JapaneseLearningAppImg,
    title: "Nihongo Master",
    description: "TypeScriptとNext.jsで構築された日本語学習アプリです。フラッシュカード、クイズ、間隔反復システムを搭載し、日本語の語彙を効率的に習得できます。",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://japanese-learning-app-uabb.vercel.app/",
    github: "https://github.com/surenpal",
    featured: true,
  },
  {
    imgSrc: ecommerceImg,
    title: "E-Commerce App",
    description: "React、Tailwind、useContextで構築したECアプリです。商品一覧、ショッピングカート、チェックアウト機能を実装しています。",
    tags: ["React", "Tailwind", "Context API"],
    url: "https://mela-shopping-e-commerce.vercel.app",
    github: "https://github.com/surenpal",
  },
  {
    imgSrc: weatherImg,
    title: "SkyCast",
    description: "ReactとTailwindで構築したシンプルな天気アプリです。OpenWeatherMap APIからリアルタイムの気象データを取得し、わかりやすいUIで表示します。",
    tags: ["React", "Tailwind", "REST API"],
    url: "https://weatherappsuren.vercel.app/",
    github: "https://github.com/surenpal",
  },
  {
    imgSrc: dateTimeImg,
    title: "Calendar",
    description: "ReactとTailwindで構築した日時アプリです。現在の日時を表示し、アラームやタイマーを設定できます。",
    tags: ["React", "Tailwind"],
    url: "https://datetimeappsuren.vercel.app",
    github: "https://github.com/surenpal",
  },
  {
    imgSrc: myCalculatorImg,
    title: "Calculator",
    description: "ReactとTailwindで構築した多機能電卓アプリです。基本的な四則演算、パーセント計算に対応し、レスポンシブデザインを採用しています。",
    tags: ["React", "Tailwind"],
    url: "https://mycalculatersuren.vercel.app/",
    github: "https://github.com/surenpal",
  },
  {
    imgSrc: loginImg,
    title: "Login Form",
    description: "ReactとTailwindで構築したログインフォームです。フォームバリデーション、エラーハンドリング、デスクトップ・モバイル対応のレスポンシブデザインを実装しています。",
    tags: ["React", "Tailwind", "Form Validation"],
    url: "https://loginformreacttailwind.vercel.app/",
    github: "https://github.com/surenpal",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center pb-24 px-6 py-24
      text-gray-900 dark:text-gray-100"
    >
      <FadeInSection>
        <div className="max-w-5xl mx-auto text-center">

          {/* Header */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2"
          >
            制作物
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            プロジェクト
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-yellow-500 mx-auto mb-14 rounded"
          />

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}
