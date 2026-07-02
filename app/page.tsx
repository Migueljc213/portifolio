"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  Code,
  FileCode,
  Figma,
  GitBranch,
  Users,
  MessageSquare,
  Lightbulb,
  Heading5Icon as Html5,
  CodepenIcon as Css3,
  Palette,
  LayoutGrid,
  Server,
  Database,
  Cloud,
  FileJson,
  Briefcase,
  GraduationCap,
  Calendar,
  Building2,
  Brain,
  Shield,
  Layers,
  Terminal,
  MapPin,
  Phone,
  CheckCircle2,
  Activity,
  ListChecks,
  FileDown,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

/* ── Carousel automático de imagens ── */
function ProjectImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => setCurrent((p) => (p + 1) % images.length), 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-48 overflow-hidden bg-gray-950">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`${alt} — screenshot ${i + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  useEffect(() => {
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      el.classList.add("opacity-0", "translate-y-8");
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background">
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:text-primary transition-colors">
            <Code className="h-5 w-5 text-primary" />
            <span>Miguel Cardozo</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</Link>
            <Link href="#experiencia" className="text-muted-foreground hover:text-primary transition-colors">Experiência</Link>
            <Link href="#cursos" className="text-muted-foreground hover:text-primary transition-colors">Cursos</Link>
            <Link href="#projetos" className="text-muted-foreground hover:text-primary transition-colors">Projetos</Link>
            <Link href="#habilidades" className="text-muted-foreground hover:text-primary transition-colors">Habilidades</Link>
            <Link href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</Link>
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-10">
                  <Link href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</Link>
                  <Link href="#experiencia" className="text-muted-foreground hover:text-primary transition-colors">Experiência</Link>
                  <Link href="#cursos" className="text-muted-foreground hover:text-primary transition-colors">Cursos</Link>
                  <Link href="#projetos" className="text-muted-foreground hover:text-primary transition-colors">Projetos</Link>
                  <Link href="#habilidades" className="text-muted-foreground hover:text-primary transition-colors">Habilidades</Link>
                  <Link href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="container py-24 md:py-32">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:w-1/2 animate-on-scroll transition-all duration-700 ease-out">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Disponível para novas oportunidades
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                  <Building2 className="h-3 w-3" />
                  Atualmente na Frog Summit
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Olá, eu sou{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                  José Miguel
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Desenvolvedor Full-Stack com experiência em sistemas escaláveis, APIs RESTful e
                interfaces modernas. Trabalho com React, Next.js, Node.js, NestJS e integrações com IA.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Rio de Janeiro, RJ</span>
                <Link href="https://wa.me/5524999736248" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-600 transition-colors">
                  <Phone className="h-4 w-4" /> +55 (24) 99973-6248
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="#contato">Entre em contato</Link>
                </Button>
                <Button variant="outline" asChild className="border-primary hover:bg-primary/10 transition-all duration-300">
                  <Link href="#projetos">Ver projetos</Link>
                </Button>
                <Button variant="outline" asChild className="border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                  <Link href="https://www.linkedin.com/in/jose-miguelfjc" target="_blank" rel="noopener noreferrer">
                    <FileDown className="mr-2 h-4 w-4" />Currículo
                  </Link>
                </Button>
              </div>
              <div className="flex gap-4 pt-2">
                <Link href="https://github.com/Migueljc213" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-100 hover:text-pink-600 transition-all duration-300">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/jose-miguelfjc" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="mailto:migueljccardozo@gmail.com">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-red-100 hover:text-red-600 transition-all duration-300">
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-on-scroll transition-all duration-700 ease-out delay-300">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 opacity-20"></div>
                <Image
                  src="/foto-perfil.png"
                  alt="José Miguel Cardozo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Sobre ── */}
        <section id="sobre" className="py-16 md:py-24 bg-gradient-to-b from-background via-pink-50 to-background">
          <div className="container space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center animate-on-scroll transition-all duration-700 ease-out">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">Sobre Mim</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-5 text-muted-foreground animate-on-scroll transition-all duration-700 ease-out delay-200">
              <p className="text-base md:text-lg leading-relaxed">
                Comecei programando por curiosidade e em pouco tempo estava liderando tecnicamente uma equipe no
                Projeto AAP-VR — um ERP construído do zero com NestJS e Next.js, onde também mentorei estagiários.
                Desde então, passei por uma startup onde fui responsável pelo ciclo completo de produtos Micro-SaaS,
                e atualmente faço parte do time da <span className="text-foreground font-medium">Frog Summit</span>,
                onde construo pipelines de ingestão de dados para plataformas de marketing digital como Meta Ads,
                Google Ads, DV360 e TikTok.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Nos últimos dois anos entreguei sistemas reais em produção: de uma plataforma completa de venda de
                ingressos com check-in por QR Code (meu TCC) à automação de campanhas de tráfego pago com IA via
                Meta Ads API. Trabalho o ciclo completo — do banco de dados e API ao componente de UI — sempre com
                foco em qualidade:{" "}
                <span className="text-foreground font-medium">testes automatizados com Jest</span> (unitários,
                integração e E2E), code reviews, pair programming e aplicação consistente de{" "}
                <span className="text-foreground font-medium">SOLID, DDD e Clean Architecture</span>.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Além do código, tenho experiência operacional real: containerização com Docker e Kubernetes, CI/CD via
                GitHub Actions, observabilidade com Prometheus e Grafana, e deploy na AWS (EC2, SQS, SSM, CloudWatch).
                Integro <span className="text-foreground font-medium">modelos de linguagem (LLMs)</span> em produtos
                funcionais e estou ativamente me aprofundando em DevOps e fundamentos de IA generativa.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Busco uma equipe onde engenharia e produto andem juntos — onde boas práticas não são overhead, mas
                parte da cultura — e onde eu possa continuar entregando soluções que resolvem problemas reais.
              </p>
            </div>
            {/* Destaques numéricos */}
            <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll transition-all duration-700 ease-out delay-400">
              {[
                { valor: "2+", label: "anos de experiência" },
                { valor: "3", label: "empresas / contextos" },
                { valor: "20+", label: "tecnologias no stack" },
              ].map(({ valor, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-white shadow-sm border border-purple-100">
                  <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-indigo-600 text-transparent bg-clip-text">{valor}</p>
                  <p className="text-xs text-muted-foreground mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experiência & Formação ── */}
        <section id="experiencia" className="py-16 md:py-24 container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll transition-all duration-700 ease-out">
            <span className="bg-gradient-to-r from-pink-500 to-indigo-600 text-transparent bg-clip-text">
              Experiência & Formação
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Experiência */}
            <div className="animate-on-scroll transition-all duration-700 ease-out delay-150">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-purple-600" />
                Experiência Profissional
              </h3>
              <div className="relative">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-purple-400 via-blue-400 to-pink-400"></div>
                <div className="space-y-10">
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <h4 className="font-semibold text-base">Desenvolvedor Júnior Full-Stack</h4>
                    <div className="flex items-center gap-1 text-sm font-medium text-purple-600 mt-0.5">
                      <Building2 className="h-3.5 w-3.5" /> Frog Summit
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                      <Calendar className="h-3 w-3" /> Mar/2025 – Presente
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Desenvolvimento de dashboards e pipelines de ingestão de dados para marketing digital,
                      com Vue.js, NestJS e integrações com Meta Ads, Google Ads, DV360 e TikTok.
                    </p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <h4 className="font-semibold text-base">Desenvolvedor Júnior Full-Stack</h4>
                    <div className="flex items-center gap-1 text-sm font-medium text-blue-600 mt-0.5">
                      <Building2 className="h-3.5 w-3.5" /> Brasmid Startup
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                      <Calendar className="h-3 w-3" /> Mai/2024 – Dez/2025
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Desenvolvimento full-cycle de plataformas Micro-SaaS com PHP/Laravel e Next.js/React.
                      Criação de APIs RESTful, modelagem PostgreSQL e deploys em ambiente cloud AWS.
                    </p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center shadow-md">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <h4 className="font-semibold text-base">Liderança Técnica & Mentoria</h4>
                    <div className="flex items-center gap-1 text-sm font-medium text-pink-600 mt-0.5">
                      <Building2 className="h-3.5 w-3.5" /> Projeto AAP-VR
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                      <Calendar className="h-3 w-3" /> Jan/2024 – Abr/2024
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Liderança no desenvolvimento de um ERP com Next.js e NestJS. Definição de arquitetura
                      e mentoria técnica de estagiários.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Formação */}
            <div className="animate-on-scroll transition-all duration-700 ease-out delay-300">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-indigo-600" />
                Formação Acadêmica
              </h3>
              <div className="relative">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-400 to-teal-400"></div>
                <div className="space-y-10">
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-md">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <h4 className="font-semibold text-base">Bacharelado em Sistemas para Internet</h4>
                    <div className="flex items-center gap-1 text-sm font-medium text-indigo-600 mt-0.5">
                      <Building2 className="h-3.5 w-3.5" /> FAETERJ
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                      <Calendar className="h-3 w-3" /> Previsão: Jul/2026
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Curso superior com foco em desenvolvimento web, redes, banco de dados,
                      engenharia de software e metodologias ágeis.
                    </p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-md">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <h4 className="font-semibold text-base">Formação Full-Stack Developer</h4>
                    <div className="flex items-center gap-1 text-sm font-medium text-teal-600 mt-0.5">
                      <Building2 className="h-3.5 w-3.5" /> Escola DNC
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                      <Calendar className="h-3 w-3" /> Mai/2024 – Mar/2025
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Formação intensiva em front-end com React e Next.js, back-end com Node.js
                      e bancos de dados relacionais e não-relacionais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cursos & Certificações ── */}
        <section id="cursos" className="py-16 md:py-24 container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll transition-all duration-700 ease-out">
            <span className="bg-gradient-to-r from-teal-500 to-indigo-600 text-transparent bg-clip-text">
              Cursos & Certificações
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 animate-on-scroll transition-all duration-700 ease-out delay-100">
            Aprendizado contínuo fora da graduação — formações práticas e orientadas ao mercado.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">

            {/* Alura DevOps — em andamento */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-amber-500" />
              <CardHeader className="pb-3 pt-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-1">Alura</p>
                    <CardTitle className="text-base leading-tight">DevOps — Git, Linux, Docker & K8s</CardTitle>
                  </div>
                  <Badge className="bg-green-100 text-green-700 text-xs shrink-0 mt-0.5">Em andamento</Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> Jun/2026 – Presente
                </p>
                <div className="flex flex-wrap gap-1">
                  {["Git", "Linux", "DevOps", "Docker", "Kubernetes"].map((t) => (
                    <Badge key={t} variant="outline" className="text-xs border-orange-200 text-orange-700">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* DIO — LLMs em andamento */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-600" />
              <CardHeader className="pb-3 pt-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold text-violet-500 uppercase tracking-wide mb-1">DIO</p>
                    <CardTitle className="text-base leading-tight">Fundamentos de LLMs</CardTitle>
                  </div>
                  <Badge className="bg-green-100 text-green-700 text-xs shrink-0 mt-0.5">Em andamento</Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> Jun/2026 – Presente
                </p>
                <div className="flex flex-wrap gap-1">
                  {["LLMs", "Transformers", "Prompt Eng.", "RAG", "Fine-tuning"].map((t) => (
                    <Badge key={t} variant="outline" className="text-xs border-violet-200 text-violet-700">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Full Cycle 3 — concluído */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-cyan-500" />
              <CardHeader className="pb-3 pt-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold text-sky-500 uppercase tracking-wide mb-1">Full Cycle 3</p>
                    <CardTitle className="text-base leading-tight">Intensivão de Docker</CardTitle>
                  </div>
                  <Badge className="bg-slate-100 text-slate-600 text-xs shrink-0 mt-0.5">Concluído</Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> Abr/2026 · 2h
                </p>
                <div className="flex flex-wrap gap-1">
                  {["Docker", "Containers", "Compose", "Boas práticas"].map((t) => (
                    <Badge key={t} variant="outline" className="text-xs border-sky-200 text-sky-700">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Java 10x — concluído */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-400 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500" />
              <CardHeader className="pb-3 pt-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">Java 10x</p>
                    <CardTitle className="text-base leading-tight">Java Completo — 40h</CardTitle>
                  </div>
                  <Badge className="bg-slate-100 text-slate-600 text-xs shrink-0 mt-0.5">Concluído</Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> Fev/2026 · 40h
                </p>
                <div className="flex flex-wrap gap-1">
                  {["Java", "OOP", "Spring Boot", "JUnit", "Streams"].map((t) => (
                    <Badge key={t} variant="outline" className="text-xs border-amber-200 text-amber-700">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* ── Projetos ── */}
        <section id="projetos" className="py-16 md:py-24 bg-gradient-to-b from-background via-purple-50 to-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll transition-all duration-700 ease-out">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">
                Meus Projetos
              </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 animate-on-scroll transition-all duration-700 ease-out delay-100">
              Sistemas reais em produção — cada projeto resolve um problema concreto.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* FunnelGuard AI — 2 imagens reais */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out">
                <ProjectImageCarousel
                  images={["/funnelguard-page-2.png", "/funnelguard-page-3.png", "/fotoPagamento.jfif"]}
                  alt="FunnelGuard AI"
                />
                <CardHeader>
                  <Badge className="w-fit text-xs bg-orange-100 text-orange-700 mb-1">SaaS · Profissional</Badge>
                  <CardTitle>FunnelGuard AI</CardTitle>
                  <CardDescription>Automação de campanhas de tráfego pago com IA</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-black text-white hover:bg-gray-800">Next.js</Badge>
                    <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200">TypeScript</Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Prisma</Badge>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">PostgreSQL</Badge>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">OpenAI</Badge>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">Meta Ads API</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gestores perdiam horas auditando campanhas manualmente. O FunnelGuard integra a Meta Ads API com IA para detectar anomalias, sugerir otimizações e centralizar métricas de performance em tempo real.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300">
                    <Link href="https://github.com/Migueljc213/projeto-trafego-pago" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />Código
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                    <Link href="https://projeto-trafego-pago.vercel.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />Ver demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Tickton TCC — 4 imagens reais */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-100">
                <ProjectImageCarousel
                  images={["/tickton-page-1.png", "/tickton-page-2.png", "/tickton-page-3.png", "/tickton-page-4.png"]}
                  alt="Tickton TCC"
                />
                <CardHeader>
                  <Badge className="w-fit text-xs bg-emerald-100 text-emerald-700 mb-1">TCC · Full-Stack Completo</Badge>
                  <CardTitle>Tickton</CardTitle>
                  <CardDescription>Venda de ingressos e check-in por QR Code para eventos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-black text-white hover:bg-gray-800">Next.js</Badge>
                    <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200">TypeScript</Badge>
                    <Badge className="bg-red-100 text-red-700 hover:bg-red-200">NestJS</Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">TypeORM</Badge>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">PostgreSQL</Badge>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">Jest</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    TCC de Sistemas para Internet: sistema completo para criação de eventos, venda de ingressos e check-in via QR Code. Back-end com NestJS, cobertura de testes Jest acima de 80% e arquitetura em módulos.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300">
                    <Link href="https://github.com/Migueljc213/tickton-front" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />Código
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
                    <Link href="https://tickton-front.vercel.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />Ver demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Gerador de Currículos — 2 SVGs */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-200">
                <ProjectImageCarousel
                  images={["/projects/curriculos-1.svg", "/projects/curriculos-2.svg"]}
                  alt="Gerador de Currículos"
                />
                <CardHeader>
                  <Badge className="w-fit text-xs bg-purple-100 text-purple-700 mb-1">Ferramenta · IA Generativa</Badge>
                  <CardTitle>Gerador de Currículos com IA</CardTitle>
                  <CardDescription>CV personalizado por vaga em segundos, gerado por IA</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-black text-white hover:bg-gray-800">Next.js</Badge>
                    <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200">TypeScript</Badge>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">Claude API</Badge>
                    <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">Puppeteer</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Candidatos perdem horas adaptando currículos para cada vaga. Esta ferramenta usa a API do Claude para reescrever e personalizar o CV automaticamente com base na descrição da vaga, gerando um PDF pronto para envio.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300">
                    <Link href="https://github.com/Migueljc213/gerador-curriculo" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />Código
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    <Link href="https://gerador-curriculo-23aw.vercel.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />Ver demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* OmniPost AI — 1 SVG */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-300">
                <ProjectImageCarousel
                  images={["/projects/omnipost-1.svg"]}
                  alt="OmniPost AI"
                />
                <CardHeader>
                  <Badge className="w-fit text-xs bg-cyan-100 text-cyan-700 mb-1">SaaS · Em Desenvolvimento</Badge>
                  <CardTitle>OmniPost AI</CardTitle>
                  <CardDescription>Gestão centralizada de conteúdo multimídia para equipes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-black text-white hover:bg-gray-800">Next.js</Badge>
                    <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200">TypeScript</Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Prisma</Badge>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">PostgreSQL</Badge>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">AWS S3</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Centraliza upload de mídia (AWS S3), agendamento de publicações e geração de copy via IA para equipes de marketing. Elimina o fluxo fragmentado entre múltiplas ferramentas.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300">
                    <Link href="https://github.com/Migueljc213/postagens_de_videos_back" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />Código
                    </Link>
                  </Button>
                  <Badge variant="outline" className="text-xs text-muted-foreground border-dashed">Em breve</Badge>
                </CardFooter>
              </Card>

              {/* TaskFlow Java — 1 SVG */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-350">
                <ProjectImageCarousel
                  images={["/projects/taskflow-1.svg"]}
                  alt="TaskFlow Java"
                />
                <CardHeader>
                  <Badge className="w-fit text-xs bg-amber-100 text-amber-700 mb-1">Java · Estudo Avançado</Badge>
                  <CardTitle>TaskFlow</CardTitle>
                  <CardDescription>Gerenciamento de projetos e tarefas com Java e Spring Boot</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">Java 17</Badge>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Spring Boot</Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Spring Security</Badge>
                    <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">JPA</Badge>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">PostgreSQL</Badge>
                    <Badge className="bg-red-100 text-red-700 hover:bg-red-200">Docker</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Desenvolvido para consolidar Java em ambiente de produção: Kanban de tarefas, autenticação JWT com Spring Security, testes de integração com JUnit 5 e Mockito, e deploy containerizado com Docker.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300">
                    <Link href="https://github.com/Migueljc213/taskflow-java" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />Código
                    </Link>
                  </Button>
                  <Badge variant="outline" className="text-xs text-muted-foreground border-dashed">Em breve</Badge>
                </CardFooter>
              </Card>

              {/* GMG Educação — 1 imagem real */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-400">
                <ProjectImageCarousel
                  images={["/gmg.jpeg"]}
                  alt="GMG Educação"
                />
                <CardHeader>
                  <Badge className="w-fit text-xs bg-pink-100 text-pink-700 mb-1">Freelance · Educação</Badge>
                  <CardTitle>GMG+ Educação</CardTitle>
                  <CardDescription>Plataforma de cursos online com painel multi-perfil</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">PHP</Badge>
                    <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">Bootstrap</Badge>
                    <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">JavaScript</Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">CSS</Badge>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">MySQL</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Cliente precisava vender cursos profissionalizantes online. Construída com PHP e MySQL, a plataforma tem painéis distintos para admins, alunos e empresas, além de sistema de vagas e landing page. Ainda no ar.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300">
                    <Link href="https://github.com/valmeidavr/cursoead" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />Código
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
                    <Link href="https://gmgmaiseducacao.com.br/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* AAP-VR — 2 imagens reais */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-450">
                <ProjectImageCarousel
                  images={["/fotoAapvr.png", "/FotoImw.png"]}
                  alt="Sistema AAP-VR"
                />
                <CardHeader>
                  <Badge className="w-fit text-xs bg-blue-100 text-blue-700 mb-1">ERP · Liderança Técnica</Badge>
                  <CardTitle>Sistema de Gestão AAP-VR</CardTitle>
                  <CardDescription>ERP para escola — clientes, agenda, caixa e presença</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-black text-white hover:bg-gray-800">Next.js</Badge>
                    <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">Tailwind</Badge>
                    <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200">TypeScript</Badge>
                    <Badge className="bg-red-100 text-red-700 hover:bg-red-200">NestJS</Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Prisma</Badge>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">MySQL</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Assumi a liderança técnica para construir um ERP do zero: arquitetura NestJS + Next.js, módulos de clientes, agenda, caixa, turmas e controle de presença. Também mentorei dois estagiários ao longo do projeto.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button size="sm" asChild className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                    <Link href="https://app-cpsi-web-git-main-valmeidavrs-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />Ver demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Bikcraft — 1 imagem real */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-500">
                <ProjectImageCarousel
                  images={["/FotoBike.png"]}
                  alt="Bikcraft"
                />
                <CardHeader>
                  <Badge className="w-fit text-xs bg-violet-100 text-violet-700 mb-1">Frontend · UX</Badge>
                  <CardTitle>Bikcraft</CardTitle>
                  <CardDescription>Site para loja de bicicletas artesanais com foco em UX</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">HTML5</Badge>
                    <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">JavaScript</Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">CSS3</Badge>
                    <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">UX Design</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Primeiro projeto frontend significativo: site completo com landing page e catálogo de produtos, construído sem frameworks — demonstra domínio sólido de HTML, CSS e JavaScript antes de adotar React.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="group-hover:border-purple-500 group-hover:text-purple-600 transition-colors duration-300">
                    <Link href="https://github.com/Migueljc213/bikcraft-miguel" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />Código
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    <Link href="https://migueljc213.github.io/bikcraft-miguel/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* ETPC — Site institucional */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-550">
                <ProjectImageCarousel
                  images={["/projects/etpc-1.svg"]}
                  alt="ETPC Escola Técnica"
                />
                <CardHeader>
                  <Badge className="w-fit text-xs bg-orange-100 text-orange-700 mb-1">Freelance · Institucional</Badge>
                  <CardTitle>ETPC — Escola Técnica CSN</CardTitle>
                  <CardDescription>Site institucional com catálogo de cursos técnicos e matrícula online</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-black text-white hover:bg-gray-800">Next.js</Badge>
                    <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200">TypeScript</Badge>
                    <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">Tailwind CSS</Badge>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">Vercel</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A ETPC precisava de presença digital profissional. Desenvolvido em Next.js com catálogo de cursos técnicos, ensino médio integrado, matrículas online e SEO otimizado para atrair novos alunos.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button size="sm" asChild className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 transition-all duration-300">
                    <Link href="https://site-etpc.vercel.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

            </div>
          </div>
        </section>

        {/* ── Habilidades ── */}
        <section id="habilidades" className="py-16 md:py-24 bg-gradient-to-b from-background via-indigo-50 to-background">
          <div className="container space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center animate-on-scroll transition-all duration-700 ease-out">
              <span className="bg-gradient-to-r from-pink-500 to-indigo-600 text-transparent bg-clip-text">
                Minhas Habilidades
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

              {/* 1 — Front-end */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll transition-all duration-700 ease-out delay-100">
                <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100">
                  <CardTitle className="flex items-center gap-2">
                    <FileCode className="h-5 w-5 text-pink-600" />Front-end
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-sm"><Code className="h-4 w-4 text-indigo-600" /> Linguagens</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1 border-orange-500 text-orange-600 hover:bg-orange-50"><Html5 className="h-3.5 w-3.5" />HTML5</Badge>
                      <Badge variant="outline" className="gap-1 border-blue-500 text-blue-600 hover:bg-blue-50"><Css3 className="h-3.5 w-3.5" />CSS3</Badge>
                      <Badge variant="outline" className="gap-1 border-purple-500 text-purple-600 hover:bg-purple-50"><Palette className="h-3.5 w-3.5" />SASS</Badge>
                      <Badge variant="outline" className="gap-1 border-yellow-400 text-yellow-600 hover:bg-yellow-50"><Code className="h-3.5 w-3.5" />JavaScript</Badge>
                      <Badge variant="outline" className="gap-1 border-sky-400 text-sky-600 hover:bg-sky-50"><FileCode className="h-3.5 w-3.5" />TypeScript</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-sm"><LayoutGrid className="h-4 w-4 text-indigo-600" /> Frameworks & Libs</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1 border-cyan-500 text-cyan-700 hover:bg-cyan-50"><Code className="h-3.5 w-3.5" />React</Badge>
                      <Badge variant="outline" className="gap-1 border-gray-800 text-gray-800 hover:bg-gray-100"><FileCode className="h-3.5 w-3.5" />Next.js</Badge>
                      <Badge variant="outline" className="gap-1 border-green-600 text-green-700 hover:bg-green-50"><Code className="h-3.5 w-3.5" />Vue.js</Badge>
                      <Badge variant="outline" className="gap-1 border-teal-400 text-teal-600 hover:bg-teal-50"><Palette className="h-3.5 w-3.5" />Tailwind CSS</Badge>
                      <Badge variant="outline" className="gap-1 border-purple-600 text-purple-700 hover:bg-purple-100"><LayoutGrid className="h-3.5 w-3.5" />Bootstrap</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2 — Back-end & Banco de Dados */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll transition-all duration-700 ease-out delay-200">
                <CardHeader className="bg-gradient-to-r from-green-100 to-teal-100">
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-green-600" />Back-end & Banco de Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-sm"><Code className="h-4 w-4 text-green-600" /> Linguagens & Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1 border-green-600 text-green-700 hover:bg-green-50"><Server className="h-3.5 w-3.5" />Node.js</Badge>
                      <Badge variant="outline" className="gap-1 border-red-500 text-red-600 hover:bg-red-50"><Server className="h-3.5 w-3.5" />NestJS</Badge>
                      <Badge variant="outline" className="gap-1 border-indigo-400 text-indigo-600 hover:bg-indigo-50"><Code className="h-3.5 w-3.5" />Laravel</Badge>
                      <Badge variant="outline" className="gap-1 border-purple-600 text-purple-700 hover:bg-purple-100"><FileCode className="h-3.5 w-3.5" />PHP</Badge>
                      <Badge variant="outline" className="gap-1 border-amber-600 text-amber-700 hover:bg-amber-50"><Server className="h-3.5 w-3.5" />Java/Spring</Badge>
                      <Badge variant="outline" className="gap-1 border-green-700 text-green-800 hover:bg-green-100"><FileCode className="h-3.5 w-3.5" />Express.js</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-sm"><Database className="h-4 w-4 text-green-600" /> Bancos de Dados & ORM</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1 border-blue-600 text-blue-700 hover:bg-blue-50"><Database className="h-3.5 w-3.5" />PostgreSQL</Badge>
                      <Badge variant="outline" className="gap-1 border-orange-600 text-orange-700 hover:bg-orange-50"><Database className="h-3.5 w-3.5" />MySQL</Badge>
                      <Badge variant="outline" className="gap-1 border-green-700 text-green-800 hover:bg-green-100"><Database className="h-3.5 w-3.5" />MongoDB</Badge>
                      <Badge variant="outline" className="gap-1 border-red-600 text-red-700 hover:bg-red-50"><Database className="h-3.5 w-3.5" />Redis</Badge>
                      <Badge variant="outline" className="gap-1 border-teal-400 text-teal-600 hover:bg-teal-50"><Server className="h-3.5 w-3.5" />Prisma ORM</Badge>
                      <Badge variant="outline" className="gap-1 border-blue-400 text-blue-600 hover:bg-blue-50"><Server className="h-3.5 w-3.5" />TypeORM</Badge>
                      <Badge variant="outline" className="gap-1 border-indigo-300 text-indigo-700 hover:bg-indigo-50"><FileJson className="h-3.5 w-3.5" />RESTful APIs</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 3 — Testes */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll transition-all duration-700 ease-out delay-300">
                <CardHeader className="bg-gradient-to-r from-emerald-100 to-green-100">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />Testes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1 border-emerald-500 text-emerald-700 hover:bg-emerald-50"><CheckCircle2 className="h-3.5 w-3.5" />Jest</Badge>
                      <Badge variant="outline" className="gap-1 border-green-600 text-green-700 hover:bg-green-50"><CheckCircle2 className="h-3.5 w-3.5" />JUnit</Badge>
                      <Badge variant="outline" className="gap-1 border-teal-500 text-teal-700 hover:bg-teal-50"><CheckCircle2 className="h-3.5 w-3.5" />Mockito</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-sm"><Code className="h-4 w-4 text-emerald-600" /> Estratégias</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1 border-blue-400 text-blue-600 hover:bg-blue-50"><CheckCircle2 className="h-3.5 w-3.5" />Testes Unitários</Badge>
                      <Badge variant="outline" className="gap-1 border-indigo-400 text-indigo-600 hover:bg-indigo-50"><CheckCircle2 className="h-3.5 w-3.5" />Integração</Badge>
                      <Badge variant="outline" className="gap-1 border-purple-400 text-purple-600 hover:bg-purple-50"><CheckCircle2 className="h-3.5 w-3.5" />E2E</Badge>
                      <Badge variant="outline" className="gap-1 border-pink-400 text-pink-600 hover:bg-pink-50"><Code className="h-3.5 w-3.5" />Mocks & Stubs</Badge>
                      <Badge variant="outline" className="gap-1 border-rose-400 text-rose-600 hover:bg-rose-50"><Code className="h-3.5 w-3.5" />Cobertura de Código</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 4 — DevOps & Observabilidade */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll transition-all duration-700 ease-out delay-400">
                <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-orange-600" />DevOps, Cloud & Observabilidade
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-sm"><Cloud className="h-4 w-4 text-orange-600" /> Cloud & Infra</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1 border-orange-300 text-orange-700 hover:bg-orange-50"><Cloud className="h-3.5 w-3.5" />AWS (EC2, SQS, SSM)</Badge>
                      <Badge variant="outline" className="gap-1 border-blue-300 text-blue-700 hover:bg-blue-50"><Cloud className="h-3.5 w-3.5" />Docker</Badge>
                      <Badge variant="outline" className="gap-1 border-blue-500 text-blue-700 hover:bg-blue-100"><Cloud className="h-3.5 w-3.5" />Kubernetes</Badge>
                      <Badge variant="outline" className="gap-1 border-green-300 text-green-700 hover:bg-green-50"><GitBranch className="h-3.5 w-3.5" />CI/CD (GitHub Actions)</Badge>
                      <Badge variant="outline" className="gap-1 border-gray-400 text-gray-700 hover:bg-gray-50"><GitBranch className="h-3.5 w-3.5" />Git Flow / GitHub Flow</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-sm"><Activity className="h-4 w-4 text-orange-600" /> Observabilidade</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1 border-orange-400 text-orange-700 hover:bg-orange-50"><Activity className="h-3.5 w-3.5" />AWS CloudWatch</Badge>
                      <Badge variant="outline" className="gap-1 border-red-400 text-red-700 hover:bg-red-50"><Activity className="h-3.5 w-3.5" />Prometheus</Badge>
                      <Badge variant="outline" className="gap-1 border-yellow-500 text-yellow-700 hover:bg-yellow-50"><Activity className="h-3.5 w-3.5" />Grafana</Badge>
                      <Badge variant="outline" className="gap-1 border-red-300 text-red-700 hover:bg-red-50"><GitBranch className="h-3.5 w-3.5" />Git</Badge>
                      <Badge variant="outline" className="gap-1 border-purple-300 text-purple-700 hover:bg-purple-50"><Github className="h-3.5 w-3.5" />GitHub</Badge>
                      <Badge variant="outline" className="gap-1 border-pink-300 text-pink-700 hover:bg-pink-50"><Figma className="h-3.5 w-3.5" />Figma</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 5 — Arquitetura & Design Patterns */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll transition-all duration-700 ease-out delay-450">
                <CardHeader className="bg-gradient-to-r from-indigo-100 to-blue-100">
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-indigo-600" />Arquitetura & Design Patterns
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-sm"><Layers className="h-4 w-4 text-indigo-600" /> Princípios</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1 border-indigo-500 text-indigo-700 hover:bg-indigo-50"><Layers className="h-3.5 w-3.5" />SOLID</Badge>
                      <Badge variant="outline" className="gap-1 border-purple-500 text-purple-700 hover:bg-purple-50"><Layers className="h-3.5 w-3.5" />DDD</Badge>
                      <Badge variant="outline" className="gap-1 border-blue-400 text-blue-600 hover:bg-blue-50"><Layers className="h-3.5 w-3.5" />Clean Architecture</Badge>
                      <Badge variant="outline" className="gap-1 border-teal-400 text-teal-600 hover:bg-teal-50"><Code className="h-3.5 w-3.5" />Clean Code</Badge>
                      <Badge variant="outline" className="gap-1 border-green-400 text-green-600 hover:bg-green-50"><GitBranch className="h-3.5 w-3.5" />Code Review</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-sm"><Terminal className="h-4 w-4 text-indigo-600" /> Padrões GoF</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1 border-violet-400 text-violet-700 hover:bg-violet-50"><Code className="h-3.5 w-3.5" />Factory</Badge>
                      <Badge variant="outline" className="gap-1 border-violet-500 text-violet-700 hover:bg-violet-50"><Code className="h-3.5 w-3.5" />Builder</Badge>
                      <Badge variant="outline" className="gap-1 border-blue-500 text-blue-700 hover:bg-blue-50"><Code className="h-3.5 w-3.5" />Repository</Badge>
                      <Badge variant="outline" className="gap-1 border-blue-600 text-blue-700 hover:bg-blue-50"><Code className="h-3.5 w-3.5" />Observer</Badge>
                      <Badge variant="outline" className="gap-1 border-indigo-600 text-indigo-700 hover:bg-indigo-50"><Code className="h-3.5 w-3.5" />Strategy</Badge>
                      <Badge variant="outline" className="gap-1 border-purple-600 text-purple-700 hover:bg-purple-50"><Code className="h-3.5 w-3.5" />Singleton</Badge>
                      <Badge variant="outline" className="gap-1 border-teal-600 text-teal-700 hover:bg-teal-50"><Code className="h-3.5 w-3.5" />Worker/Orchestrator</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-sm"><Shield className="h-4 w-4 text-indigo-600" /> IA & Segurança</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1 border-purple-400 text-purple-600 hover:bg-purple-50"><Brain className="h-3.5 w-3.5" />Integração de LLMs</Badge>
                      <Badge variant="outline" className="gap-1 border-violet-400 text-violet-600 hover:bg-violet-50"><Brain className="h-3.5 w-3.5" />Prompt Engineering</Badge>
                      <Badge variant="outline" className="gap-1 border-red-400 text-red-600 hover:bg-red-50"><Shield className="h-3.5 w-3.5" />OWASP Top 10</Badge>
                      <Badge variant="outline" className="gap-1 border-orange-400 text-orange-600 hover:bg-orange-50"><Shield className="h-3.5 w-3.5" />JWT</Badge>
                      <Badge variant="outline" className="gap-1 border-amber-400 text-amber-600 hover:bg-amber-50"><Shield className="h-3.5 w-3.5" />OAuth 2.0</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 6 — Metodologias & Soft Skills */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll transition-all duration-700 ease-out delay-500">
                <CardHeader className="bg-gradient-to-r from-violet-100 to-pink-100">
                  <CardTitle className="flex items-center gap-2">
                    <ListChecks className="h-5 w-5 text-violet-600" />Metodologias & Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-sm"><ListChecks className="h-4 w-4 text-violet-600" /> Metodologias Ágeis</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1 border-violet-500 text-violet-700 hover:bg-violet-50"><ListChecks className="h-3.5 w-3.5" />Scrum</Badge>
                      <Badge variant="outline" className="gap-1 border-pink-500 text-pink-700 hover:bg-pink-50"><ListChecks className="h-3.5 w-3.5" />Kanban</Badge>
                      <Badge variant="outline" className="gap-1 border-purple-400 text-purple-600 hover:bg-purple-50"><ListChecks className="h-3.5 w-3.5" />Sprint Planning</Badge>
                      <Badge variant="outline" className="gap-1 border-indigo-400 text-indigo-600 hover:bg-indigo-50"><ListChecks className="h-3.5 w-3.5" />Backlog Grooming</Badge>
                      <Badge variant="outline" className="gap-1 border-blue-400 text-blue-600 hover:bg-blue-50"><ListChecks className="h-3.5 w-3.5" />Retrospectivas</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-sm"><Users className="h-4 w-4 text-violet-600" /> Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1 border-indigo-300 text-indigo-700 hover:bg-indigo-50"><Users className="h-3.5 w-3.5" />Trabalho em equipe</Badge>
                      <Badge variant="outline" className="gap-1 border-blue-300 text-blue-700 hover:bg-blue-50"><MessageSquare className="h-3.5 w-3.5" />Comunicação</Badge>
                      <Badge variant="outline" className="gap-1 border-amber-300 text-amber-700 hover:bg-amber-50"><Lightbulb className="h-3.5 w-3.5" />Resolução de problemas</Badge>
                      <Badge variant="outline" className="gap-1 border-pink-300 text-pink-700 hover:bg-pink-50"><Users className="h-3.5 w-3.5" />Liderança Técnica</Badge>
                      <Badge variant="outline" className="gap-1 border-green-300 text-green-700 hover:bg-green-50"><Code className="h-3.5 w-3.5" />Pair Programming</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* ── Contato ── */}
        <section id="contato" className="py-16 md:py-24 container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center animate-on-scroll transition-all duration-700 ease-out">
              <span className="bg-gradient-to-r from-indigo-500 to-pink-600 text-transparent bg-clip-text">
                Entre em Contato
              </span>
            </h2>
            <p className="text-center text-muted-foreground animate-on-scroll transition-all duration-700 ease-out delay-150">
              Estou disponível para oportunidades de trabalho, projetos freelance ou apenas para trocar ideias!
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll transition-all duration-700 ease-out delay-300">
                <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100">
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-pink-600" />Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                    <Mail className="h-5 w-5 text-pink-600 shrink-0" />
                    <p className="text-sm">migueljccardozo@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                    <Phone className="h-5 w-5 text-green-600 shrink-0" />
                    <Link href="https://wa.me/5524999736248" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-green-600 transition-colors">
                      +55 (24) 99973-6248 · WhatsApp
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="h-5 w-5 text-blue-600 shrink-0" />
                    <Link href="https://www.linkedin.com/in/jose-miguelfjc" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-600 transition-colors">
                      linkedin.com/in/jose-miguelfjc
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                    <Github className="h-5 w-5 text-purple-600 shrink-0" />
                    <Link href="https://github.com/Migueljc213" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-purple-600 transition-colors">
                      github.com/Migueljc213
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll transition-all duration-700 ease-out delay-450">
                <CardHeader className="bg-gradient-to-r from-indigo-100 to-blue-100">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-indigo-600" />Disponibilidade
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <p className="text-sm">Atualmente estou:</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors">Disponível para contratação</Badge>
                    </div>
                    <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">Aberto a projetos freelance</Badge>
                    </div>
                    <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors">Interessado em colaborações</Badge>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl" asChild>
                      <Link href="mailto:migueljccardozo@gmail.com">Enviar Email</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t py-8 bg-gradient-to-b from-background to-indigo-50">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} José Miguel Cardozo. Todos os direitos reservados.</p>
            <p className="text-xs text-muted-foreground mt-0.5">Desenvolvedor Full-Stack · Rio de Janeiro, RJ</p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/Migueljc213" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-100 hover:text-pink-600 transition-all duration-300">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/jose-miguelfjc" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:migueljccardozo@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-red-100 hover:text-red-600 transition-all duration-300">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
