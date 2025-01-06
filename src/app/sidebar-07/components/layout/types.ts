interface User {
  name: string
  email: string
  avatar: string
}

interface Team {
  name: string
  logo: React.ElementType
  plan: string
}

interface BaseNavItem {
  title: string
  badge?: string
  icon?: React.ElementType
}

type NavLink = BaseNavItem & {
  url: string
  items?: never
}

type NavCollapsible = BaseNavItem & {
  items: (BaseNavItem & { url: string })[]
  url?: never
}

type NavItem = NavCollapsible | NavLink

interface NavGroup {
  title: string
  url: string,
  icon: React.ElementType,
  isActive?: boolean,
  items: NavItem[],
}

interface NavProject {
  name: string
  url: string,
  icon: React.ElementType,
}

interface SidebarData {
  user: User
  teams: Team[]
  navGroups: NavGroup[]
  navProjects: NavProject[]
}

export type { SidebarData, NavGroup, NavProject, NavItem, NavCollapsible, NavLink }
