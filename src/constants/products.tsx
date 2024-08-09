import sidefolioAceternity from "public/images/tokenmetrics.png";
import sidefolioAlgochurn from "public/images/devflow.png";
import sidefolioMoonbeam from "public/images/horizon.png";
import sidefolioTailwindMasterKit from "public/images/potfolio.png";

export const products = [
  {
    href: "https://www.tokenmetrics.com/",
    title: "Token Metrics",
    description:
      "Token Metrics is a cryptocurrency investment research firm that uses AI and Machine learning",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "aceternity",
    content: (
      <div>
        <ul>
          <li>
            Integrated Google and Twitter login systems, migrated 150k users
            from Okta to Supabase auth, reducing authentication costs from
            $30k/month to $0, streamlining customer onboarding.
          </li>
          <li>
            Developed NFT-based wallet connect login system with enhanced
            security features, ensuring safe authentication and transaction
            processes while expanding platform access.
          </li>
          <li>
            Created Telegram bots for price predictions and market alerts,
            increasing average daily active users from 10k to 15k and improving
            user engagement in crypto trading services.
          </li>
          <li>
            Designed high-quality frontend for AI-powered chatbots integrated
            with ChatGPT and proprietary data backend, introducing a new premium
            feature that increased customer base.
          </li>
          <li>
            Engineered robust payment systems incorporating Stripe, PayPal, and
            Coinpayment gateways, providing seamless user experience for
            purchasing plans.
          </li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://dev-flow-wine.vercel.app/",
    title: "Devflow",
    description:
      "A platform for developers, where they can discuss topic related to latest tech stack",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "devflow",
    content: (
      <div>
        <ul>
          <li>
            Developed a full-stack Q&A platform for the developer community
            using Next.js 14, Tailwind CSS (Shadcn), TypeScript, Clerk, and
            MongoDB, enabling software developers to seek and share knowledge on
            various topics.
          </li>
          <li>
            Implemented robust authentication and authorization systems using
            Clerk, ensuring secure access and user-specific functionality across
            the platform.
          </li>
          <li>
            Tech stack used:
            <ul>
              <li>Next.js 14</li>
              <li>Tailwind CSS (Shadcn)</li>
              <li>TypeScript</li>
              <li>Clerk</li>
              <li>MongoDB</li>
            </ul>
          </li>
          <li>
            Features:
            <ul>
              <li>Authentication and authorization</li>
              <li>Recommendation system</li>
              <li>Global search</li>
              <li>Reputation</li>
              <li>Interacted data listing</li>
              <li>Community page</li>
              <li>Popular tags</li>
              <li>Top questions</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://personal-banking.vercel.app/sign-in",
    title: "Horizon",
    description:
      "It is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to manages their finances.",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "horizon",
    content: (
      <div>
        <ul>
          <li>
            Developed a comprehensive financial SaaS platform with the following
            key features:
            <ul>
              <li>Connects to multiple bank accounts</li>
              <li>Displays transactions in real-time</li>
              <li>Allows users to manage their finances effectively</li>
            </ul>
          </li>
          <li>
            Key functionalities:
            <ul>
              <li>Multi-bank account integration</li>
              <li>Real-time transaction monitoring</li>
              <li>Personal finance management tools</li>
              <li>Secure data synchronization</li>
              <li>User-friendly interface for financial overview</li>
            </ul>
          </li>
          <li>
            Benefits:
            <ul>
              <li>Centralized view of financial accounts</li>
              <li>Improved financial visibility and control</li>
              <li>Streamlined money management process</li>
              <li>Enhanced user experience for financial planning</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://portfolio-website-sand-three-26.vercel.app/",
    title: "Portfolio template",
    description: "A beautiful personal portfolio",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "portfolio",
    content: <div></div>,
  },
];
