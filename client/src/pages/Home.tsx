/*
Design philosophy for this file:
Traditional industrial-trade-tech corporate website.
Use calmer hierarchy, darker contrast, restrained bilingual branding,
and practical business language that feels trustworthy rather than futuristic.
Each section should reinforce stability, experience, and cooperation readiness.
*/

import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Cpu,
  Factory,
  Mail,
  MapPin,
  Menu,
  PenTool,
  Radio,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useMemo, useState } from "react";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663433112448/2YsXr6xWgCYbgYFchTeeXB/cubes-hero-reference-UrKD4d4GHGtcPScvsv9TB2.webp";
const ottImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663433112448/2YsXr6xWgCYbgYFchTeeXB/cubes-ott-product-BdXkwTDxpw6c2wcd4pD22f.webp";
const dvbtImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663433112448/2YsXr6xWgCYbgYFchTeeXB/cubes-dvbt-product-eQdqwo6L8k7ZdmJpsKTrqe.webp";
const manufacturingImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663433112448/2YsXr6xWgCYbgYFchTeeXB/cubes-manufacturing-scene-mjrW9ZqJ9iFKRTePyaRph5.webp";
const contactImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663433112448/2YsXr6xWgCYbgYFchTeeXB/cubes-contact-visual-BFvXihzvvBmNpuogF6sjaK.webp";

const navItems = [
  { label: "公司简介", href: "#about" },
  { label: "产品与服务", href: "#services" },
  { label: "我们的优势", href: "#advantages" },
  { label: "联系我们", href: "#contact" },
];

const highlights = [
  { value: "2017", label: "公司成立" },
  { value: "ODM / OEM", label: "合作模式" },
  { value: "OTT · DVB-T", label: "主营产品" },
];

const serviceCards = [
  {
    title: "OTT 机顶盒 ODM",
    subtitle: "面向互联网电视及智慧家庭终端的产品开发与制造",
    description:
      "围绕客户的市场定位与功能需求，提供 OTT 盒子方向的产品规划、外观结构配合、整机制造与项目协同支持。",
    icon: Boxes,
    image: ottImage,
  },
  {
    title: "DVB-T 机顶盒代工",
    subtitle: "适配数字电视接收场景的机型导入与批量制造服务",
    description:
      "聚焦 DVB-T 盒子方向的开发与代工配套，兼顾接口适配、结构执行、量产稳定性与交付节奏。",
    icon: Radio,
    image: dvbtImage,
  },
];

const advantageItems = [
  {
    title: "研发设计能力",
    description:
      "能够围绕客户需求推进产品定义、结构配合与功能方案沟通，在项目初期帮助客户更高效地形成可落地的产品方向。",
    icon: PenTool,
  },
  {
    title: "供应链整合优势",
    description:
      "依托长期制造协同经验，整合相关供应资源与执行环节，帮助客户兼顾效率、成本控制和交付稳定性。",
    icon: Truck,
  },
  {
    title: "项目协同响应",
    description:
      "在沟通链路、需求确认与执行配合上保持及时反馈，便于客户快速推进打样、调整与量产计划。",
    icon: Cpu,
  },
  {
    title: "稳定品质意识",
    description:
      "重视生产过程中的细节管理与一致性控制，以务实可靠的方式支持长期合作型项目。",
    icon: ShieldCheck,
  },
];

const companyNotes = [
  "专注机顶盒 ODM / OEM 与代工服务。",
  "主营 OTT 与 DVB-T 盒子方向。",
  "服务导向强调稳定、效率与长期合作。",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const stats = useMemo(() => highlights, []);

  return (
    <div className="min-h-screen bg-stone-100 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-700/70 bg-slate-950 text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
        <div className="container flex items-center justify-between gap-6 py-4">
          <a href="#top" className="min-w-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 shadow-sm">
                <span className="font-['IBM_Plex_Sans'] text-sm font-semibold tracking-[0.22em] text-sky-300">
                  CB
                </span>
              </div>
              <div className="min-w-0">
                <p className="truncate text-[0.67rem] font-medium uppercase tracking-[0.18em] text-slate-400">
                  Shenzhen Cubes Technology
                </p>
                <h1 className="truncate font-['Noto_Serif_SC'] text-[0.98rem] font-semibold text-white md:text-[1.05rem]">
                  深圳市方象霖科技有限公司
                </h1>
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-white transition hover:border-sky-400 hover:bg-slate-900 lg:inline-flex"
          >
            商务联系
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-200 lg:hidden"
            aria-label="切换导航"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-800 bg-slate-950 lg:hidden">
            <div className="container flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="bg-[linear-gradient(135deg,#0f172a_0%,#1f2937_58%,#334155_100%)] text-white">
          <div className="container grid gap-10 py-12 md:py-16 xl:grid-cols-[0.95fr_1.05fr] xl:items-center xl:gap-14 xl:py-20">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-600 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                <span className="h-2 w-2 rounded-full bg-sky-300" />
                Set-Top Box ODM & OEM
              </div>
              <h2 className="max-w-3xl font-['Noto_Serif_SC'] text-[2.85rem] font-semibold leading-[1.16] tracking-[-0.03em] text-white md:text-[3.6rem] xl:text-[4rem]">
                务实稳健地服务
                <br />
                机顶盒产品合作项目
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                深圳市方象霖科技有限公司专注于机顶盒产品的 ODM 与代工服务，主营
                <span className="font-semibold text-white"> OTT 与 DVB-T 盒子</span>。
                我们以更务实的项目配合、研发设计协同和供应链整合能力，支持客户高效推进产品落地与批量交付。
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
                >
                  查看产品与服务
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-500 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  获取合作沟通
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/6 p-5 shadow-[0_16px_30px_rgba(15,23,42,0.18)] backdrop-blur-sm"
                  >
                    <p className="font-['IBM_Plex_Sans'] text-[1.65rem] font-semibold tracking-[-0.03em] text-white">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-3 shadow-[0_30px_70px_rgba(2,6,23,0.3)] backdrop-blur-sm">
                <img
                  src={heroImage}
                  alt="OTT 与 DVB-T 机顶盒主视觉"
                  className="h-full min-h-[320px] w-full rounded-[1.55rem] object-cover object-center"
                />
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.35rem] border border-white/10 bg-slate-950/72 p-5">
                    <p className="font-['IBM_Plex_Sans'] text-[0.72rem] uppercase tracking-[0.26em] text-sky-200">
                      Business Focus
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      专注 OTT 与 DVB-T 机顶盒方向，面向品牌客户与渠道项目提供定制和代工支持。
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/90 p-5 text-slate-800">
                    <p className="font-['IBM_Plex_Sans'] text-[0.72rem] uppercase tracking-[0.26em] text-slate-500">
                      Cooperation Style
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      强调研发配合、供应链协同与稳定执行，更符合传统制造型企业合作场景。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-stone-100 py-18 md:py-24">
          <div className="container grid gap-8 xl:grid-cols-[0.86fr_1.14fr] xl:items-start">
            <div className="space-y-6 xl:sticky xl:top-28">
              <p className="section-kicker section-kicker-dark">公司简介</p>
              <h3 className="section-title text-slate-900">
                立足深圳，
                <br />
                面向机顶盒产品合作需求
              </h3>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[1.9rem] border border-stone-300 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:p-10">
                <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-start">
                  <div>
                    <p className="text-lg leading-9 text-slate-700">
                      深圳市方象霖科技有限公司（Shenzhen Cubes Technology Co., Ltd）成立于
                      <span className="font-semibold text-slate-900"> 2017 年</span>，
                      专注于机顶盒产品的<span className="font-semibold text-slate-900"> ODM、OEM 与代工服务</span>，
                      主要覆盖<span className="font-semibold text-slate-900"> OTT 和 DVB-T 盒子</span>等产品方向。
                    </p>

                  </div>

                  <div className="rounded-[1.6rem] border border-stone-200 bg-stone-50 p-6">
                    <p className="font-['IBM_Plex_Sans'] text-[0.72rem] uppercase tracking-[0.24em] text-slate-500">
                      Company Notes
                    </p>
                    <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                      {companyNotes.map((item) => (
                        <div key={item} className="flex gap-3">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-sky-700" />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  "信息表达更偏务实商务风格，适合传统制造企业官网场景。",
                  "在白色基础上增加深灰蓝与石材色层次，整体更沉稳耐看。",
                  "保留中英品牌信息，兼顾国内客户与国际合作沟通。",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-stone-300 bg-white px-6 py-7 shadow-[0_12px_24px_rgba(15,23,42,0.05)]"
                  >
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-18 md:py-24">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="section-kicker section-kicker-dark">产品与服务</p>
                <h3 className="section-title">围绕 OTT 与 DVB-T 盒子提供合作支持</h3>
              </div>
              <p className="max-w-2xl justify-self-end text-base leading-8 text-slate-600">
                我们主要从事机顶盒产品的 ODM 与代工服务，面向客户的不同项目需求，在方案沟通、产品导入、制造执行及交付配合等方面提供务实支持。
              </p>
            </div>

            <div className="mt-12 grid gap-6 xl:grid-cols-2">
              {serviceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="overflow-hidden rounded-[1.9rem] border border-stone-300 bg-stone-50 shadow-[0_20px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_50px_rgba(15,23,42,0.12)]"
                  >
                    <div className="border-b border-stone-200 bg-white p-4">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-72 w-full rounded-[1.35rem] object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-300 bg-white text-slate-700">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="font-['IBM_Plex_Sans'] text-[0.72rem] uppercase tracking-[0.24em] text-slate-500">
                          Product Category
                        </p>
                      </div>
                      <h4 className="mt-5 font-['Noto_Serif_SC'] text-2xl font-semibold text-slate-900">
                        {card.title}
                      </h4>
                      <p className="mt-3 text-sm font-medium leading-7 text-sky-800">
                        {card.subtitle}
                      </p>
                      <p className="mt-4 text-base leading-8 text-slate-600">{card.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="advantages" className="bg-[linear-gradient(180deg,#e7e5e4_0%,#f5f5f4_100%)] py-18 md:py-24">
          <div className="container grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
            <div className="rounded-[1.9rem] border border-slate-800 bg-slate-900 p-4 shadow-[0_30px_60px_rgba(15,23,42,0.16)]">
              <img
                src={manufacturingImage}
                alt="研发设计与供应链协同优势展示"
                className="h-full w-full rounded-[1.45rem] object-cover"
              />
            </div>

            <div>
              <p className="section-kicker section-kicker-dark">我们的优势</p>
              <h3 className="section-title">研发设计与供应链整合，是项目推进的重要支撑</h3>
              <p className="mt-6 text-base leading-8 text-slate-700">
                对于传统制造型客户而言，真正重要的不只是展示效果，而是项目是否能够更顺畅地推进。我们将研发设计配合、供应链整合、项目响应与品质意识作为核心优势，通过更稳定的执行方式支撑客户合作。
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {advantageItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-[1.45rem] border border-stone-300 bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.05)] transition hover:border-slate-400"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-300 bg-stone-50 text-slate-800">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 py-18 text-white md:py-24">
          <div className="container">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#111827_0%,#0f172a_100%)] shadow-[0_30px_70px_rgba(2,6,23,0.35)]">
              <div className="grid xl:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[360px] overflow-hidden border-b border-white/10 p-5 md:p-7 xl:border-b-0 xl:border-r">
                  <img
                    src={contactImage}
                    alt="企业联系场景视觉"
                    className="h-full w-full rounded-[1.55rem] object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center px-6 py-10 md:px-10 md:py-14 lg:px-14">
                  <p className="section-kicker section-kicker-light">联系我们</p>
                  <h3 className="section-title text-white">欢迎沟通机顶盒产品合作需求</h3>
                  <p className="mt-6 text-base leading-8 text-slate-300">
                    如果您正在寻找 OTT 或 DVB-T 机顶盒相关的 ODM、OEM 或代工合作伙伴，欢迎与我们联系。以下信息根据您提供的公司资料整理展示。
                  </p>

                  <div className="mt-10 grid gap-4">
                    <div className="contact-item contact-item-dark">
                      <MapPin className="contact-icon contact-icon-light" />
                      <div>
                        <p className="contact-label contact-label-light">公司地址</p>
                        <p className="contact-value contact-value-light">
                          深圳市宝安区西乡街道劳动社区宝源路1065号F518时尚创意园F3栋205
                        </p>
                      </div>
                    </div>

                    <div className="contact-item contact-item-dark">
                      <Mail className="contact-icon contact-icon-light" />
                      <div>
                        <p className="contact-label contact-label-light">联系邮箱</p>
                        <p className="contact-value contact-value-light">info@cubes-tech.com</p>
                        <p className="mt-1 text-xs leading-6 text-amber-300">
                          当前邮箱内容按您提供信息展示，如需补全准确邮箱，我可以继续替您修改。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/6 px-6 py-5 text-sm leading-7 text-slate-300">
                    <span className="font-semibold text-white">Shenzhen Cubes Technology Co., Ltd.</span>
                    <br />
                    Focused on practical cooperation for set-top box ODM, OEM and manufacturing projects.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
