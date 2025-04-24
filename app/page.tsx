"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
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
  Chrome,
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
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Portfolio() {
  // Animation on scroll effect
  useEffect(() => {
    // Inicialmente, definir todos os elementos como invisíveis
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      element.classList.add("opacity-0", "translate-y-8");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Quando o elemento é visível, adicione as classes para torná-lo visível com animação
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Code className="h-5 w-5 text-primary" />
              <span>Dev Junior</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#sobre"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#projetos"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projetos
            </Link>
            <Link
              href="#habilidades"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Habilidades
            </Link>
            <Link
              href="#contato"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </Link>
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-10">
                  <Link
                    href="#sobre"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Sobre
                  </Link>
                  <Link
                    href="#projetos"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Projetos
                  </Link>
                  <Link
                    href="#habilidades"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Habilidades
                  </Link>
                  <Link
                    href="#contato"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contato
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:w-1/2 animate-on-scroll transition-all duration-700 ease-out">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Olá, eu sou{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                  José Miguel
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                desenvolvedor web com experiência em criação de sistemas
                personalizados e interfaces responsivas. Este portfólio é um
                reflexo do meu trabalho, comprometimento e paixão por
                tecnologia.
              </p>
              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Link href="#contato">Entre em contato</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Link href="#projetos">Ver projetos</Link>
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Link
                  href="https://github.com/Migueljc213"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="http://www.linkedin.com/in/josé-miguelfjc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:migueljccardozo@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-red-100 hover:text-red-600 transition-all duration-300"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-on-scroll transition-all duration-700 ease-out delay-300">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary animate-pulse-slow">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 opacity-30"></div>
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Foto de perfil"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="sobre"
          className="py-16 md:py-24 bg-gradient-to-b from-background via-pink-50 to-background"
        >
          <div className="container space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center animate-on-scroll transition-all duration-700 ease-out">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
                Sobre Mim
              </span>
            </h2>
            <div className="max-w-3xl mx-auto text-center space-y-4 animate-on-scroll transition-all duration-700 ease-out delay-300">
              <p className="text-lg">
                Sou um desenvolvedor full stack com paixão por criar aplicações
                web completas e escaláveis. Minha jornada na programação começou
                durante a faculdade, onde descobri meu interesse por transformar
                ideias em soluções funcionais, do front-end ao back-end.
              </p>
              <p className="text-lg">
                Atualmente, estou focado em aprimorar minhas habilidades em
                React e Node.js, enquanto continuo aprendendo novas tecnologias
                para expandir meu conhecimento em toda a stack de
                desenvolvimento.
              </p>
              <p className="text-lg">
                Quando não estou codando, gosto de jogar videogames, ler livros
                de ficção científica e explorar novos cafés pela cidade.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="py-16 md:py-24 container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll transition-all duration-700 ease-out">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">
              Meus Projetos
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Projeto 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm" className="shadow-lg">
                    Ver detalhes
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle>E-commerce Responsivo</CardTitle>
                <CardDescription>
                  Uma loja virtual responsiva com catálogo de produtos e
                  carrinho de compras
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    React
                  </Badge>
                  <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
                    Tailwind CSS
                  </Badge>
                  <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">
                    Firebase
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Desenvolvi uma interface de e-commerce completa com
                  funcionalidades de filtragem, carrinho de compras e checkout.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                >
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Link>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Link
                    href="https://exemplo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card> */}
            {/* Project 1 */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <Image
                  src="./gmg.jpeg"
                  alt="GMG Educação"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm" className="shadow-lg">
                    Ver detalhes
                  </Button>
                </div> */}
              </div>
              <CardHeader>
                <CardTitle>Site para venda de cursos</CardTitle>
                <CardDescription>
                  Uma loja virtual responsiva com catálogo de produtos e
                  carrinho de compras
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    PHP
                  </Badge>
                  <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
                    BootStrap
                  </Badge>
                  <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
                    JavaScript
                  </Badge>
                  <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
                    CSS
                  </Badge>
                  <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">
                    MySQL
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Plataforma de cursos online com painel para admins, alunos e
                  empresas. Divulgação de currículos, destaque para alunos
                  formados, sistema de vagas e landing page integrada para
                  captação e apresentação dos serviços.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-end">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                >
                  <Link
                    href="https://github.com/valmeidavr/cursoead"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Link>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Link
                    href="https://gmgmaiseducacao.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-150">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <Image
                  src="/fotoAapvr.png"
                  alt="Micro-Saas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm" className="shadow-lg">
                    Ver detalhes
                  </Button>
                </div> */}
              </div>
              <CardHeader>
                <CardTitle>Sistema de Gestão Full Stack</CardTitle>
                <CardDescription>
                  Aplicação completa com autenticação, dashboard e API RESTful
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4 overflow-x-auto whitespace-nowrap px-1 scrollbar-hide ">
                  <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                    Next.js
                  </Badge>
                  <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                    Tailwind
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    TypeScript
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                    Node.js
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                    Nest.js
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                    Prisma
                  </Badge>
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                    MySQL
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Desenvolvimento de sistema para AAP-VR com gestão de clientes,
                  agenda, caixa, turmas, presença, unidades e perfis de usuário.
                  lideirei uma equipe com 2 estagiários e sou responsável pela
                  execução técnica do projeto.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                >
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Link>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                >
                  <Link
                    href="https://app-cpsi-web-git-main-valmeidavrs-projects.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll transition-all duration-700 ease-out delay-300">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <Image
                  src="/fotoBike.png"
                  alt="Bikcraft"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm" className="shadow-lg">
                    Ver detalhes
                  </Button>
                </div> */}
              </div>
              <CardHeader>
                <CardTitle>Bikcraft - Venda de bicicletas</CardTitle>
                <CardDescription>
                  Sistema de microserviços com Docker e comunicação assíncrona
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    HTML
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                    JavaScript
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                    CSS
                  </Badge>
                  <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                    Desing UX
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Site completo para loja de bicicletas, com landing page,
                  apresentação de modelos, vantagens e descrições. Desenvolvido
                  com foco em UX Design para melhor experiência do usuário e
                  navegação intuitiva.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                >
                  <Link
                    href="https://github.com/Migueljc213/bikcraft-miguel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Link>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  <Link
                    href="https://migueljc213.github.io/bikcraft-miguel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="habilidades"
          className="py-16 md:py-24 bg-gradient-to-b from-background via-indigo-50 to-background"
        >
          <div className="container space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center animate-on-scroll transition-all duration-700 ease-out">
              <span className="bg-gradient-to-r from-pink-500 to-indigo-600 text-transparent bg-clip-text">
                Minhas Habilidades
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll transition-all duration-700 ease-out delay-150">
                <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100">
                  <CardTitle className="flex items-center gap-2">
                    <FileCode className="h-5 w-5 text-pink-600" />
                    Front-end
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Code className="h-4 w-4 text-indigo-600" />
                      Linguagens
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-orange-500 text-orange-600 hover:bg-orange-50"
                      >
                        <Html5 className="h-3.5 w-3.5" />
                        HTML5
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-blue-500 text-blue-600 hover:bg-blue-50"
                      >
                        <Css3 className="h-3.5 w-3.5" />
                        CSS3
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                      >
                        <Code className="h-3.5 w-3.5" />
                        JavaScript
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-sky-400 text-sky-600 hover:bg-sky-50"
                      >
                        <FileCode className="h-3.5 w-3.5" />
                        TypeScript
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <LayoutGrid className="h-4 w-4 text-indigo-600" />
                      Frameworks & Bibliotecas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-cyan-500 text-cyan-700 hover:bg-cyan-50"
                      >
                        <Code className="h-3.5 w-3.5" />
                        React
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-black text-black hover:bg-gray-100"
                      >
                        <FileCode className="h-3.5 w-3.5" />
                        Next.js
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-teal-400 text-teal-600 hover:bg-teal-50"
                      >
                        <Palette className="h-3.5 w-3.5" />
                        Tailwind CSS
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-purple-600 text-purple-700 hover:bg-purple-100"
                      >
                        <LayoutGrid className="h-3.5 w-3.5" />
                        Bootstrap
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll transition-all duration-700 ease-out delay-225">
                <CardHeader className="bg-gradient-to-r from-green-100 to-teal-100">
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-green-600" />
                    Back-end
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Code className="h-4 w-4 text-green-600" />
                      Linguagens
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-green-600 text-green-700 hover:bg-green-50"
                      >
                        <Server className="h-3.5 w-3.5" />
                        Node.js
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-red-500 text-red-600 hover:bg-red-50"
                      >
                        <Server className="h-3.5 w-3.5" />
                        Nest.js
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-blue-700 text-blue-800 hover:bg-blue-100"
                      >
                        <Server className="h-3.5 w-3.5" />
                        Java
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-indigo-400 text-indigo-600 hover:bg-indigo-50"
                      >
                        <Code className="h-3.5 w-3.5" />
                        Laravel
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-purple-600 text-purple-700 hover:bg-purple-100"
                      >
                        <FileCode className="h-3.5 w-3.5" />
                        PHP
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Database className="h-4 w-4 text-green-600" />
                      Bancos de Dados & APIs
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-blue-600 text-blue-700 hover:bg-blue-50"
                      >
                        <Database className="h-3.5 w-3.5" />
                        PostgreSQL
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-orange-600 text-orange-700 hover:bg-orange-50"
                      >
                        <Database className="h-3.5 w-3.5" />
                        SQL
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-green-700 text-green-800 hover:bg-green-100"
                      >
                        <FileCode className="h-3.5 w-3.5" />
                        Express
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-indigo-300 text-indigo-700 hover:bg-indigo-50"
                      >
                        <FileJson className="h-3.5 w-3.5" />
                        RESTful APIs
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-teal-600 text-teal-700 hover:bg-teal-50"
                      >
                        <FileJson className="h-3.5 w-3.5" />
                        MySQL
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-green-600" />
                      DevOps & Infraestrutura
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-orange-300 text-orange-700 hover:bg-orange-50"
                      >
                        <Cloud className="h-3.5 w-3.5" />
                        AWS
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-blue-300 text-blue-700 hover:bg-blue-50"
                      >
                        <Cloud className="h-3.5 w-3.5" />
                        Docker
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-green-300 text-green-700 hover:bg-green-50"
                      >
                        <GitBranch className="h-3.5 w-3.5" />
                        CI/CD
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll transition-all duration-700 ease-out delay-300">
                <CardHeader className="bg-gradient-to-r from-indigo-100 to-blue-100">
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-indigo-600" />
                    Ferramentas & Outros
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <GitBranch className="h-4 w-4 text-pink-600" />
                      Controle de Versão
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-red-300 text-red-700 hover:bg-red-50"
                      >
                        <GitBranch className="h-3.5 w-3.5" />
                        Git
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-purple-300 text-purple-700 hover:bg-purple-50"
                      >
                        <Github className="h-3.5 w-3.5" />
                        GitHub
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Palette className="h-4 w-4 text-pink-600" />
                      Design & Ferramentas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-pink-300 text-pink-700 hover:bg-pink-50"
                      >
                        <Figma className="h-3.5 w-3.5" />
                        Figma
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-blue-300 text-blue-700 hover:bg-blue-50"
                      >
                        <Code className="h-3.5 w-3.5" />
                        VS Code
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-purple-300 text-purple-700 hover:bg-purple-50"
                      >
                        <LayoutGrid className="h-3.5 w-3.5" />
                        Responsive Design
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-green-300 text-green-700 hover:bg-green-50"
                      >
                        <Chrome className="h-3.5 w-3.5" />
                        Chrome DevTools
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4 text-pink-600" />
                      Soft Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-indigo-300 text-indigo-700 hover:bg-indigo-50"
                      >
                        <Users className="h-3.5 w-3.5" />
                        Trabalho em equipe
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-blue-300 text-blue-700 hover:bg-blue-50"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        Comunicação
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 border-amber-300 text-amber-700 hover:bg-amber-50"
                      >
                        <Lightbulb className="h-3.5 w-3.5" />
                        Resolução de problemas
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-16 md:py-24 container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center animate-on-scroll transition-all duration-700 ease-out">
              <span className="bg-gradient-to-r from-indigo-500 to-pink-600 text-transparent bg-clip-text">
                Entre em Contato
              </span>
            </h2>
            <p className="text-center text-muted-foreground animate-on-scroll transition-all duration-700 ease-out delay-150">
              Estou disponível para oportunidades de trabalho, projetos
              freelance ou apenas para trocar ideias!
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll transition-all duration-700 ease-out delay-300">
                <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100">
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-pink-600" />
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                    <Mail className="h-5 w-5 text-pink-600" />
                    <p>migueljccardozo@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <Link
                      href="http://www.linkedin.com/in/josé-miguelfjc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors"
                    >
                      www.linkedin.com/in/josé-miguelfjc
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                    <Github className="h-5 w-5 text-purple-600" />
                    <Link
                      href="https://github.com/Migueljc213"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-600 transition-colors"
                    >
                      https://github.com/Migueljc213
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll transition-all duration-700 ease-out delay-450">
                <CardHeader className="bg-gradient-to-r from-indigo-100 to-blue-100">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-indigo-600" />
                    Disponibilidade
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <p>Atualmente estou:</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors">
                        Disponível para contratação
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                        Aberto a projetos freelance
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors">
                        Interessado em colaborações
                      </Badge>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      asChild
                    >
                      <Link href="mailto:email@exemplo.com">Enviar Email</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-gradient-to-b from-background to-indigo-50">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} José Miguel. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/Migueljc213"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="http://www.linkedin.com/in/josé-miguelfjc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:migueljccardozo@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-red-100 hover:text-red-600 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
