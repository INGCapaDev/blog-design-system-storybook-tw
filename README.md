# 🎨 React Design System with Storybook & Tailwind

A modern, scalable design system built with React, TypeScript, Storybook, and Tailwind CSS.
This project demonstrates how to create a robust component library using best practices
and industry-standard tools.

## 🥃 Preview

![Storybook Preview](https://6dxqfoy4g1.ufs.sh/f/9cuWqzvE7f2SHMKL9uF6dkv29eQPpUY5fyTS0bqmV7B4nlOg)

## ✨ Features

- 🛠️ Built with Vite + React + TypeScript
- 🎨 Styled with Tailwind CSS
- 📚 Documented with Storybook
- 🧬 Organized using Atomic Design principles
- 💪 Type-safe component variants with CVA
- 🔍 Comprehensive component documentation
- 🎯 Best practices and patterns included

## 🚀 Quick Start

Clone this repository to your local machine using Git.

| Command          | Action                                      |
| :--------------- | :------------------------------------------ |
| `pnpm install`   | Installs dependencies                       |
| `pnpm dev`       | Starts local dev server at `localhost:5173` |
| `pnpm storybook` | Start storybook at `localhost:6006`         |

## 📦 Tech Stack

- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [Storybook](https://storybook.js.org)
- [CVA (Class Variance Authority)](https://cva.style)
- [clsx](https://github.com/lukeed/clsx)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)

## 🗂️ Project Structure

```
src/
├── components/
│   └── design-system/
│       ├── atoms/          # Basic building blocks
│       ├── molecules/      # Simple compositions
│       └── organisms/      # Complex compositions
├── lib/
│   └── utils.ts           # Utility functions
└── css/
    └── design-tokens.css  # Design tokens
```

## 💎 Design Tokens

Our design system uses custom design tokens for consistent styling:

```css
@theme {
  --color-primary: #c1d8c3; /* Soft sage green */
  --color-secondary: #6a9c89; /* Deep teal */
  --color-accent: #ffa725; /* Vibrant orange */
  --color-background: #fff5e4; /* Warm white */
}
```

## 🧩 Components

### Heading Component

A flexible, type-safe heading component with multiple variants:

```tsx
<Heading level="h2" variant="accent" size="2xl" align="center">
  Featured Section
</Heading>
```

Available props:

- `level`: h1-h6
- `variant`: default | accent
- `size`: sm | base | lg | xl | 2xl | 3xl | 4xl
- `align`: left | center | right

## 📚 Documentation

Each component is thoroughly documented in Storybook with:

- Interactive examples
- Props documentation
- Usage guidelines
- Accessibility information

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## 🙏 Acknowledgments

- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Storybook Documentation](https://storybook.js.org/docs)

## 🔗 Links

- [Blog Post]()

---

Built with ❤️ by [INGCapaDEV](https://github.com/INGCapaDev)
