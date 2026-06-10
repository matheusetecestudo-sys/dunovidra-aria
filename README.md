# DUNO Engenharia - Projeto React

Este repositório contém o site da DUNO Engenharia, desenvolvido com **React**, **Vite** e **Tailwind CSS**.

## Imagens

- As imagens de banner (desktop e mobile) e os ícones dos cards de serviços foram adicionadas na pasta **public/imagem**.
- O código já está configurado para referenciá‑las usando caminhos como `/imagem/banner01desktop.png` e `/imagem/vidracaria_servico_1.png`.

> **Importante**: após adicionar ou atualizar imagens, reinicie o servidor de desenvolvimento (`npm run dev`) para que o Vite as sirva corretamente.

## Como rodar
```bash
npm install
npm run dev   # abre http://localhost:3000
```

## Build para produção
```bash
npm run build   # gera a pasta dist
npm run preview # visualiza o build
```

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/f2bbee52-3b99-4d57-8dff-e8508bf6dce7

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
