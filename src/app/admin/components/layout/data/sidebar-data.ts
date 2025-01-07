'use client'

import { AudioWaveform, BookOpen, Bot, Command, Frame, GalleryVerticalEnd, Map, PieChart, Settings2, SquareTerminal } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [{
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  }, {
    name: "Acme Corp.",
    logo: AudioWaveform,
    plan: "Startup",
  }, {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  }],
  navGroups: [{
    title: "Examples",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
    items: [{
      title: "Dashboard",
      url: "/admin/dashboard",
    }, {
      title: "Example",
      url: "/admin/example",
    }, {
      title: "Mail",
      url: "/admin/mail",
    }, {
      title: "Tasks",
      url: "/admin/tasks",
    }, {
      title: "Playground",
      url: "/admin/playground",
    }, {
      title: "Forms",
      url: "/admin/forms",
    }, {
      title: "Music",
      url: "/admin/music",
    }, {
      title: "Cards",
      url: "/admin/cards",
    }],
  }, {
    title: "Models",
    url: "#",
    icon: Bot,
    items: [{
      title: "Genesis",
      url: "#",
    }, {
      title: "Explorer",
      url: "#",
    }, {
      title: "Quantum",
      url: "#",
    }],
  }, {
    title: "Documentation",
    url: "#",
    icon: BookOpen,
    items: [{
      title: "Introduction",
      url: "#",
    }, {
      title: "Get Started",
      url: "#",
    }, {
      title: "Tutorials",
      url: "#",
    }, {
      title: "Changelog",
      url: "#",
    }],
  }, {
    title: "Settings",
    url: "#",
    icon: Settings2,
    items: [{
      title: "General",
      url: "#",
    }, {
      title: "Team",
      url: "#",
    }, {
      title: "Billing",
      url: "#",
    }, {
      title: "Limits",
      url: "#",
    }],
  }],
  navProjects: [{
    name: "Design Engineering",
    url: "#",
    icon: Frame,
  }, {
    name: "Sales & Marketing",
    url: "#",
    icon: PieChart,
  }, {
    name: "Travel",
    url: "#",
    icon: Map,
  }],
}
