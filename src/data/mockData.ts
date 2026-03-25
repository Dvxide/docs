export const NAV_LINKS = [
  { href: '#terminal', label: 'Terminal' },
  { href: '#infrastructure', label: 'Infrastructure' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const

export const TERMINAL_COMMANDS = [
  'init system_architect --mode="production"',
  'systemctl status homelab',
  'docker ps -a',
  'ping security.local',
  'ssh root@server',
  'tail -f /var/log/syslog',
] as const

export const HERO_STATS = [
  { value: '24/7', label: 'UPTIME' },
  { value: 'Docker', label: 'DOCKER STACK' },
  { value: 'Python', label: 'PYTHON AUTOMATION' },
] as const

export const ABOUT_PARAGRAPHS = [
  'I am a dedicated Systems Administrator specializing in hybrid environments. My approach blends the reliability of enterprise standards with the agility of modern DevOps practices.',
  'Whether it\'s hardening a Linux kernel or orchestrating Active Directory policies, I focus on creating systems that are not just operational, but performant and observable.',
] as const

export const PROFILE_TAGS = ['Linux', 'Windows', 'Networking'] as const

export const ABOUT_HIGHLIGHTS = [
  {
    title: 'Professional Role',
    description: 'Systems Architect focusing on cross-platform integration and security hardening.',
    icon: 'admin_panel_settings',
  },
  {
    title: 'Learning Focus',
    description: 'Deep diving into Kubernetes orchestration and advanced eBPF monitoring.',
    icon: 'psychology',
  },
  {
    title: 'Key Strength',
    description: 'Rapid incident response and root-cause analysis in high-pressure environments.',
    icon: 'bolt',
  },
  {
    title: 'Interests',
    description: 'HomeLab automation, network forensics, and vintage hardware restoration.',
    icon: 'interests',
  },
] as const

export interface SkillItem {
  name: string
  percentage: number
}

export interface SkillCategory {
  title: string
  icon: string
  skills: SkillItem[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Operating Systems',
    icon: 'terminal',
    skills: [
      { name: 'Linux (RHEL/Debian)', percentage: 95 },
      { name: 'Windows Server', percentage: 88 },
    ],
  },
  {
    title: 'Infrastructure',
    icon: 'dns',
    skills: [
      { name: 'Virtualization (Proxmox/ESXi)', percentage: 92 },
      { name: 'Docker / Containers', percentage: 85 },
    ],
  },
  {
    title: 'Networking',
    icon: 'router',
    skills: [
      { name: 'BGP / OSPF Routing', percentage: 78 },
      { name: 'Firewalls (pfSense/OPNsense)', percentage: 94 },
    ],
  },
  {
    title: 'Scripting',
    icon: 'code',
    skills: [
      { name: 'Bash / Python', percentage: 82 },
      { name: 'PowerShell', percentage: 80 },
    ],
  },
  {
    title: 'Tools',
    icon: 'build',
    skills: [
      { name: 'Ansible / Terraform', percentage: 75 },
      { name: 'Git / CI-CD', percentage: 70 },
    ],
  },
  {
    title: 'Monitoring',
    icon: 'monitoring',
    skills: [
      { name: 'Grafana / Prometheus', percentage: 88 },
      { name: 'ELK Stack', percentage: 65 },
    ],
  },
]

export const SKILL_CHIPS = [
  'Kubernetes', 'Nginx', 'Proxmox', 'Cisco IOS', 'PostgreSQL', 'WireGuard', 'Active Directory',
] as const

export const AUTOMATION_TOOLS = [
  { name: 'Python', description: 'System Scripting & Tooling', icon: 'terminal' },
  { name: 'Ansible', description: 'Configuration Management', icon: 'settings_ethernet' },
  { name: 'Jenkins', description: 'CI/CD Pipelines', icon: 'alt_route' },
  { name: 'Golang', description: 'Operator Development', icon: 'code' },
] as const

export interface Project {
  number: string
  title: string
  description: string
  tags: string[]
  status: string
  icon?: string
  colSpan?: string
  hasImage?: boolean
  imageGradient?: string
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'HomeLab Infrastructure',
    description: 'A fully redundant multi-node Proxmox cluster utilizing Ceph storage and an automated OPNsense high-availability gateway.',
    tags: ['Proxmox', 'Ceph', 'OPNsense'],
    status: 'Internal Deployment',
    colSpan: 'lg:col-span-8',
    hasImage: true,
  },
  {
    number: '02',
    title: 'Network Automation Scripts',
    description: 'Python-based CLI toolset for mass-configuring Cisco and Juniper edge devices with automated rollback capability.',
    tags: ['Python', 'Automation', 'Networking'],
    status: 'Active Stable',
    icon: 'terminal',
    colSpan: 'lg:col-span-4',
  },
  {
    number: '03',
    title: 'Security Monitoring Stack',
    description: 'Integrated Wazuh SIEM with Suricata IDS for real-time threat detection and automated IP blacklisting.',
    tags: ['Wazuh', 'Suricata', 'Security'],
    status: 'V2.1 Deployment',
    icon: 'security',
    colSpan: 'lg:col-span-4',
  },
  {
    number: '04',
    title: 'Backup & Recovery System',
    description: 'Offsite 3-2-1 strategy implementation using TrueNAS replication and encrypted cloud archival with automated integrity checks.',
    tags: ['TrueNAS', 'Backup', 'Automation'],
    status: 'PRODUCTION_READY',
    colSpan: 'lg:col-span-8',
    hasImage: true,
    imageGradient: 'right',
  },
]

export interface ContactMethod {
  href: string
  title: string
  value: string
  icon: string
  isExternal: boolean
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    href: 'mailto:contact@dvx1de.de',
    title: 'Email',
    value: 'contact@dvx1de.de',
    icon: 'mail',
    isExternal: false,
  },
  {
    href: 'https://github.com/Dvxide',
    title: 'GitHub',
    value: '@dvx1de',
    icon: 'terminal',
    isExternal: true,
  },
  {
    href: 'https://x.com/dvx1de',
    title: 'X / Twitter',
    value: '@dvx1de',
    icon: 'alternate_email',
    isExternal: true,
  },
]

export const FOOTER_NAV = [
  { href: '#terminal', label: 'Terminal' },
  { href: '#infrastructure', label: 'Infrastructure' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const

export const FOOTER_CONNECT = [
  { href: 'mailto:contact@dvx1de.de', label: 'Email', isExternal: false },
  { href: 'https://github.com/Dvxide', label: 'GitHub', isExternal: true },
  { href: 'https://x.com/dvx1de', label: 'X / Twitter', isExternal: true },
] as const
