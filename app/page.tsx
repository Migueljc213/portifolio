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
  Globe,
  CheckCircle2,
  Activity,
  ListChecks,
  Ticket,
  Coffee,
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Disponível para novas oportunidades
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
                <span className="flex items-center gap-1"><Phone className="h-4 w-4" /> +55 (24) 99973-6248</span>
              </div>
              <div className="flex gap-4">
                <Button asChild className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="#contato">Entre em contato</Link>
                </Button>
                <Button variant="outline" asChild className="border-primary hover:bg-primary/10 transition-all duration-300">
                  <Link href="#projetos">Ver projetos</Link>
                </Button>
              </div>
              <div className="flex gap-4 pt-2">
                <Link href="https://github.com/Migueljc123" target="_blank" rel="noopener noreferrer">
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
          <div className="container space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center animate-on-scroll transition-all duration-700 ease-out">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">Sobre Mim</span>
            </h2>
            <div className="max-w-3xl mx-auto text-center space-y-4 animate-on-scroll transition-all duration-700 ease-out delay-200">
              <p className="text-lg">
                Sou um desenvolvedor Full-Stack com mais de 2 anos de experiência construindo aplicações web completas.
                Minha trajetória passou por startup, liderança técnica de equipe e desenvolvimento de produtos SaaS com integração de IA.
              </p>
              <p className="text-lg">
                Trabalho diariamente com Next.js, React, Node.js e NestJS, sempre seguindo boas práticas como SOLID, DDD e Clean
                Architecture. Tenho experiência com deploy em AWS, containerização com Docker, observabilidade com Prometheus/Grafana
                e integrações com APIs externas como Meta Ads e modelos de linguagem (LLMs).
              </p>
              <p className="text-lg">
                Busco oportunidades onde possa entregar soluções reais de impacto e continuar crescendo como engenheiro de software.
              </p>
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

        {/* ── Projetos ── */}
        <section id="projetos" className="py-16 md:py-24 bg-gradient-to-b from-background via-purple-50 to-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll transition-all duration-700 ease-out">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">
                Meus Projetos
              </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 animate-on-scroll transition-all duration-700 ease-out delay-100">
              Projetos com múltiplas imagens alternam automaticamente a cada 3 segundos.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* FunnelGuard AI — 2 imagens reais */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out">
                <ProjectImageCarousel
                  images={["/funnelguard-page-2.png", "/funnelguard-page-3.png", "/fotoPagamento.jfif"]}
                  alt="FunnelGuard AI"
                />
                <CardHeader>
                  <CardTitle>FunnelGuard AI</CardTitle>
                  <CardDescription>SaaS de automação de tráfego pago com IA para Meta Ads</CardDescription>
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
                    Plataforma SaaS com autenticação, dashboard analítico e automação inteligente de campanhas
                    via Meta Ads API. IA integrada para análise e sugestões de otimização de anúncios.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="group-hover:border-orange-500 group-hover:text-orange-600 transition-colors duration-300">
                    {/* TODO: adicionar link do GitHub */}
                    <Link href="" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />Código
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                    {/* TODO: adicionar link de acesso */}
                    <Link href="" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />Demo
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
                  <CardTitle>Tickton — TCC</CardTitle>
                  <CardDescription>Plataforma de venda de ingressos com check-in por QR Code</CardDescription>
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
                    Trabalho de Conclusão de Curso — plataforma completa para criação de eventos, venda de ingressos,
                    gestão de organizadores e check-in de participantes via QR Code com testes automatizados.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="group-hover:border-emerald-500 group-hover:text-emerald-600 transition-colors duration-300">
                    {/* TODO: adicionar link do GitHub */}
                    <Link href="" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />Código
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
                    {/* TODO: adicionar link de acesso */}
                    <Link href="" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />Demo
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
                  <CardTitle>Gerador de Currículos com IA</CardTitle>
                  <CardDescription>Currículos personalizados em PDF gerados por IA por vaga</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-black text-white hover:bg-gray-800">Next.js</Badge>
                    <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200">TypeScript</Badge>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">Claude API</Badge>
                    <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">Puppeteer</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ferramenta que gera currículos em PDF personalizados por vaga usando IA. O usuário insere
                    seu contexto profissional e a IA adapta o conteúdo para cada posição com templates visuais.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="group-hover:border-purple-500 group-hover:text-purple-600 transition-colors duration-300">
                    {/* TODO: adicionar link do GitHub */}
                    <Link href="" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />Código
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    {/* TODO: adicionar link de acesso */}
                    <Link href="" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />Demo
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
                  <CardTitle>OmniPost AI</CardTitle>
                  <CardDescription>Plataforma de gerenciamento e publicação de conteúdo com IA</CardDescription>
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
                    Plataforma para gerenciamento e publicação de conteúdo multimídia com integração ao AWS S3
                    para armazenamento de arquivos e recursos de IA para otimização de publicações.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="group-hover:border-cyan-500 group-hover:text-cyan-600 transition-colors duration-300">
                    {/* TODO: adicionar link do GitHub */}
                    <Link href="" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />Código
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    {/* TODO: adicionar link de acesso */}
                    <Link href="" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* TaskFlow Java — 1 SVG */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-350">
                <ProjectImageCarousel
                  images={["/projects/taskflow-1.svg"]}
                  alt="TaskFlow Java"
                />
                <CardHeader>
                  <CardTitle>TaskFlow</CardTitle>
                  <CardDescription>Sistema de gerenciamento de projetos e tarefas em Java</CardDescription>
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
                    Sistema completo de gerenciamento de projetos com autenticação JWT via Spring Security, dashboard,
                    controle de status de tarefas, testes com JUnit/Mockito e containerização com Docker.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="group-hover:border-amber-500 group-hover:text-amber-600 transition-colors duration-300">
                    {/* TODO: adicionar link do GitHub */}
                    <Link href="" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />Código
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 transition-all duration-300">
                    {/* TODO: adicionar link de acesso */}
                    <Link href="" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* GMG Educação — 1 imagem real */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-400">
                <ProjectImageCarousel
                  images={["/gmg.jpeg"]}
                  alt="GMG Educação"
                />
                <CardHeader>
                  <CardTitle>GMG+ Educação</CardTitle>
                  <CardDescription>Plataforma de venda e gestão de cursos online</CardDescription>
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
                    Plataforma de cursos online com painéis para admins, alunos e empresas.
                    Sistema de vagas, divulgação de currículos e landing page integrada.
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
                  <CardTitle>Sistema de Gestão AAP-VR</CardTitle>
                  <CardDescription>ERP com dashboard, agenda e controle financeiro</CardDescription>
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
                    Liderança técnica no desenvolvimento de ERP para gestão de clientes, agenda, caixa, turmas
                    e presença. Mentoria de estagiários e definição da arquitetura do sistema.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300">
                    {/* TODO: adicionar link do GitHub quando disponível */}
                    <Link href="" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />Código
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                    <Link href="https://app-cpsi-web-git-main-valmeidavrs-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />Demo
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
                  <CardTitle>Bikcraft</CardTitle>
                  <CardDescription>Site institucional com foco em UX para loja de bicicletas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">HTML5</Badge>
                    <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">JavaScript</Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">CSS3</Badge>
                    <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">UX Design</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Site completo para loja de bicicletas com landing page e catálogo de modelos,
                    desenvolvido com foco em UX Design e navegação intuitiva.
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
                    <p className="text-sm">+55 (24) 99973-6248</p>
                  </div>
                  <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="h-5 w-5 text-blue-600 shrink-0" />
                    <Link href="https://www.linkedin.com/in/jose-miguelfjc" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-600 transition-colors">
                      linkedin.com/in/jose-miguelfjc
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                    <Github className="h-5 w-5 text-purple-600 shrink-0" />
                    <Link href="https://github.com/Migueljc123" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-purple-600 transition-colors">
                      github.com/Migueljc123
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
            <Link href="https://github.com/Migueljc123" target="_blank" rel="noopener noreferrer">
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
