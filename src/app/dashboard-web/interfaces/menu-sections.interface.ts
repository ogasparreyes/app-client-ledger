export interface MenuLink {
  label: string;
  route: string;
  icon?: string;
  badge?: string;
}

export interface MenuGroup {
  label: string;
  icon: string;
  badge?: string;
  expanded?: boolean;
  children: MenuLink[];
}

export type MenuItem = MenuLink | MenuGroup;

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export function isMenuGroup(item: MenuItem): item is MenuGroup {
  return 'children' in item;
}

export const MENU_SECTIONS: MenuSection[] = [
  {
    title: 'Menú',
    items: [
      {
        label: 'Workflow',
        icon: 'grid-1x2',
        expanded: true,
          badge: 'Beta',
        children: [
          { label: 'Resumen', route: '/' },
          { label: 'Analítica', route: '/panel/analitica' },
        ],
      },

      { label: 'Workflows', icon: 'rocket-takeoff', route: '/perfil',  badge: 'Nuevo', },
      { label: 'Schedules', icon: 'clock-history', route: '/perfil' },
      { label: 'Batch', icon: 'layers', route: '/perfil' },
      { label: 'Archive', icon: 'archive', route: '/perfil' },
    ],
  },
  {
    title: 'Soporte',
    items: [
      { label: 'Chat', icon: 'chat-dots', route: '/chat' },
    ],
  },
];