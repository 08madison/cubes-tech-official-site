/*
Design philosophy for this file:
Swiss-modern industrial clarity for a white corporate B2B website.
Use asymmetrical composition, restrained blue-gray accents, serif-led headlines,
and precise information hierarchy to reinforce reliability in ODM/OEM manufacturing.
Ask continuously: does each block feel engineered, calm, and trustworthy?
*/

import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Factory,
  Mail,
  MapPin,
  Menu,
  MonitorPlay,
  Radio,
  ShieldCheck,
  Sparkles,
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
  { label: "制造能力", href: "#capability" },
  { label: "联系我们", href: "#contact" },
];

const highlights = [
  { value: "2017", label: "公司成立" },
  { value: "ODM / OEM", label: "合作模式" },
  { value: "OTT + DVB-T", label: "主营方向" },
];

const serviceCards = [
  {
    title: "OTT 机顶盒 ODM",
    subtitle: "面向互联网电视与智慧家庭终端的产品定制开发",
    description:
      "围绕外观、硬件配置、结构细节与品牌化需求，为客户提供兼顾稳定性与市场适配度的 OTT 盒子定制方案。",
    icon: MonitorPlay,
    image: ottImage,
  },
  {
    title: "DVB-T 机顶盒制造",
    subtitle: "覆盖数字电视接收场景的机型开发与量产支持",
    description:
      "支持 DVB-T 盒子方向的整机开发、制造与代工协作，满足不同市场对接收性能、结构接口与交付效率的需求。",
    icon: Radio,
    image: dvbtImage,
  },
];

const capabilityItems = [
  {
    title: "产品定制",
    description: "从需求沟通、外观结构到功能定位，配合客户完成面向市场的产品定义。",
    icon: Cpu,
  },
  {
    title: "代工与量产",
    description: "聚焦机顶盒整机 ODM 与代工协作，重视交付节奏、稳定品质与制造一致性。",
    icon: Factory,
  },
  {
    title: "质量意识",
    description: "以规范流程和细节控制建立长期合作信任，服务国内外品牌客户与渠道客户。",
    icon: ShieldCheck,
  },
  {
    title: "协同响应",
    description: "通过清晰沟通和快速反馈，提高项目推进效率，帮助客户缩短产品落地周期。",
    icon: Sparkles,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const stats = useMemo(() => highlights, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_55%,#ffffff_100%)] text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/88 backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <a href="#top" className="min-w-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-[1.1rem] border border-sky-100 bg-[linear-gradient(145deg,#ffffff_0%,#eef6ff_100%)] shadow-[0_10px_30px_rgba(148,163,184,0.14)]">
                <span className="font-['IBM_Plex_Sans'] text-sm font-semibold tracking-[0.3em] text-sky-700">
                  CB
                </span>
              </div>
              <div className="min-w-0">
                <p className="truncate text-[0.68rem] font-medium uppercase tracking-[0.22em] text-slate-500">
                  Shenzhen Cubes Technology
                </p>
                <h1 className="truncate font-['Noto_Serif_SC'] text-[0.95rem] font-semibold text-slate-900 md:text-[1.02rem]">
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
                className="text-sm font-medium text-slate-600 transition hover:text-sky-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 lg:inline-flex"
          >
            商务联系
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
            aria-label="切换导航"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="container flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-sky-700"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.18),transparent_60%)]" />
          <div className="container grid gap-10 py-10 md:py-16 xl:grid-cols-[1.02fr_1.18fr] xl:items-center xl:gap-14 xl:py-20">
            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-sky-700">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                Set-Top Box ODM & OEM
              </div>
              <h2 className="max-w-3xl font-['Noto_Serif_SC'] text-[2.7rem] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-900 md:text-[3.45rem] xl:text-[3.7rem]">
                以更清晰的制造逻辑，
                <br />
                打造可靠的机顶盒合作方案
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                深圳市方象霖科技有限公司专注于机顶盒产品的 ODM 与代工服务，主营
                <span className="font-semibold text-slate-900"> OTT 与 DVB-T 盒子</span>，
                以简洁高效的合作流程、稳定的制造意识与面向市场的产品理解，为客户提供值得信赖的交付支持。
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-sky-800"
                >
                  查看产品与服务
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  获取合作沟通
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.7rem] border border-slate-200/80 bg-white/88 p-5 shadow-[0_20px_50px_rgba(148,163,184,0.12)]"
                  >
                    <p className="font-['IBM_Plex_Sans'] text-[1.7rem] font-semibold tracking-[-0.03em] text-slate-900">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative xl:pl-6">
              <div className="absolute -left-8 top-12 hidden h-36 w-36 rounded-full bg-sky-100/55 blur-3xl md:block" />
              <div className="group relative overflow-hidden rounded-[2.2rem] border border-white/60 bg-white/70 p-3 shadow-[0_30px_80px_rgba(148,163,184,0.22)] backdrop-blur-sm">
                <img
                  src={heroImage}
                  alt="OTT 与 DVB-T 机顶盒主视觉"
                  className="h-full min-h-[320px] w-full rounded-[1.7rem] object-cover object-center transition duration-700 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/70" />
                <div className="absolute bottom-6 left-6 right-6 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-[1.4rem] border border-white/70 bg-white/74 p-5 shadow-[0_15px_40px_rgba(148,163,184,0.18)] backdrop-blur-md">
                    <p className="font-['IBM_Plex_Sans'] text-[0.72rem] uppercase tracking-[0.28em] text-sky-700">
                      Product Focus
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      围绕 OTT 与 DVB-T 机顶盒方向，提供面向品牌客户与渠道项目的产品定制与制造协作。
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/70 bg-slate-900/90 p-5 text-white shadow-[0_15px_40px_rgba(15,23,42,0.25)] backdrop-blur-md">
                    <p className="font-['IBM_Plex_Sans'] text-[0.72rem] uppercase tracking-[0.28em] text-sky-200">
                      Manufacturing View
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      从产品理解到制造落地，以清晰沟通和稳定执行支撑长期合作。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative py-20 md:py-28">
          <div className="container grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
            <div className="space-y-6 xl:sticky xl:top-28">
              <p className="section-kicker">公司简介</p>
              <h3 className="section-title">
                扎根深圳，
                <br />
                服务机顶盒产品合作项目
              </h3>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_24px_60px_rgba(148,163,184,0.14)] md:p-10">
                <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-end">
                  <div>
                    <p className="text-lg leading-9 text-slate-600">
                      深圳市方象霖科技有限公司（Shenzhen Cubes Technology Co., Ltd）成立于
                      <span className="font-semibold text-slate-900"> 2017 年</span>，主营机顶盒产品的
                      <span className="font-semibold text-slate-900"> ODM 与代工</span>，覆盖
                      <span className="font-semibold text-slate-900"> OTT 和 DVB-T 盒子</span>等方向。
                    </p>
                    <p className="mt-5 text-base leading-8 text-slate-600">
                      网站整体采用克制、洁净的白色工业风语言，以强调企业的专业形象、清晰流程与长期合作导向，帮助来访客户快速理解公司定位与业务重点。
                    </p>
                  </div>
                  <div className="rounded-[1.7rem] border border-slate-200 bg-slate-50 p-6">
                    <p className="font-['IBM_Plex_Sans'] text-[0.72rem] uppercase tracking-[0.28em] text-slate-500">
                      Company Notes
                    </p>
                    <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                      <div>
                        <p className="font-medium text-slate-900">业务方向</p>
                        <p>机顶盒 ODM / OEM / 代工协作</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">主要产品</p>
                        <p>OTT 盒子、DVB-T 盒子</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">合作导向</p>
                        <p>重视效率、品质与稳定沟通</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  "简洁清晰的信息表达，便于客户快速理解企业定位。",
                  "以白色为主调，体现电子制造与工业产品的洁净感。",
                  "中英双语品牌展示，适配面向国际客户的沟通场景。",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.6rem] border border-slate-200/80 bg-white px-6 py-7 shadow-[0_14px_40px_rgba(148,163,184,0.1)]"
                  >
                    <CheckCircle2 className="h-5 w-5 text-sky-700" />
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(180deg,rgba(241,245,249,0.4)_0%,rgba(255,255,255,0)_22%,rgba(241,245,249,0.55)_100%)]" />
          <div className="container relative">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <p className="section-kicker">产品与服务</p>
                <h3 className="section-title">聚焦 OTT 与 DVB-T 机顶盒产品方向</h3>
              </div>
              <p className="max-w-2xl justify-self-end text-base leading-8 text-slate-600">
                我们围绕机顶盒行业的实际合作需求，提供从产品定制到代工制造的业务支持，帮助客户更高效地推进产品开发与市场导入。
              </p>
            </div>

            <div className="mt-12 grid gap-6 xl:grid-cols-2">
              {serviceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_26px_65px_rgba(148,163,184,0.14)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_36px_85px_rgba(125,211,252,0.18)]"
                  >
                    <div className="overflow-hidden border-b border-slate-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] p-4">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-72 w-full rounded-[1.45rem] object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-100 bg-sky-50 text-sky-700">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="font-['IBM_Plex_Sans'] text-[0.72rem] uppercase tracking-[0.28em] text-slate-500">
                          Product Category
                        </p>
                      </div>
                      <h4 className="mt-5 font-['Noto_Serif_SC'] text-2xl font-semibold text-slate-900">
                        {card.title}
                      </h4>
                      <p className="mt-3 text-sm font-medium leading-7 text-sky-700">
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

        <section id="capability" className="py-20 md:py-28">
          <div className="container grid gap-10 xl:grid-cols-[1.06fr_0.94fr] xl:items-center">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white p-4 shadow-[0_28px_70px_rgba(148,163,184,0.15)]">
              <img
                src={manufacturingImage}
                alt="机顶盒制造与装配能力展示"
                className="h-full w-full rounded-[1.6rem] object-cover"
              />
            </div>

            <div>
              <p className="section-kicker">制造能力</p>
              <h3 className="section-title">以稳定制造意识支撑长期合作</h3>
              <p className="mt-6 text-base leading-8 text-slate-600">
                作为专注机顶盒方向的企业，我们关注的不只是单一产品展示，更是客户在合作过程中对效率、清晰度与稳定执行的综合期待。页面通过模块化信息组织，直观呈现公司在定制、代工与项目协同中的核心价值。
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {capabilityItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-[1.6rem] border border-slate-200/80 bg-slate-50/70 p-6 transition hover:border-sky-100 hover:bg-white hover:shadow-[0_20px_45px_rgba(148,163,184,0.14)]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white bg-white text-sky-700 shadow-sm">
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

        <section id="contact" className="pb-16 pt-6 md:pb-24">
          <div className="container">
            <div className="overflow-hidden rounded-[2.4rem] border border-slate-200/80 bg-white shadow-[0_30px_80px_rgba(148,163,184,0.18)]">
              <div className="grid xl:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[360px] overflow-hidden bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_100%)] p-5 md:p-7">
                  <img
                    src={contactImage}
                    alt="企业联系场景视觉"
                    className="h-full w-full rounded-[1.8rem] object-cover"
                  />
                  <div className="absolute left-10 top-10 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-600 backdrop-blur-sm">
                    Contact Cubes
                  </div>
                </div>

                <div className="flex flex-col justify-center px-6 py-10 md:px-10 md:py-14 lg:px-14">
                  <p className="section-kicker">联系我们</p>
                  <h3 className="section-title">欢迎沟通机顶盒产品合作需求</h3>
                  <p className="mt-6 text-base leading-8 text-slate-600">
                    如您正在寻找 OTT 或 DVB-T 机顶盒相关的 ODM、OEM 或代工合作伙伴，欢迎与我们联系。页面中的联系方式按照您提供的信息进行了整理展示。
                  </p>

                  <div className="mt-10 grid gap-4">
                    <div className="contact-item">
                      <MapPin className="contact-icon" />
                      <div>
                        <p className="contact-label">公司地址</p>
                        <p className="contact-value">
                          深圳市宝安区西乡街道劳动社区宝源路1065号F518时尚创意园F3栋205
                        </p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <Mail className="contact-icon" />
                      <div>
                        <p className="contact-label">联系邮箱</p>
                        <p className="contact-value">info@cubes-</p>
                        <p className="mt-1 text-xs leading-6 text-amber-600">
                          当前邮箱信息按您提供内容展示，如需我补全或更正，可继续告诉我。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 rounded-[1.7rem] border border-slate-200 bg-slate-50 px-6 py-5 text-sm leading-7 text-slate-600">
                    <span className="font-semibold text-slate-900">Shenzhen Cubes Technology Co., Ltd.</span>
                    <br />
                    Clean design, precise communication, and focused service for set-top box ODM/OEM cooperation.
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
