type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'sapiens',
    description:
      'A curated collection of unique individuals across the internet.',
    link: 'https://sapiens.website/',
    video:
      'https://ph-files.imgix.net/00d19f47-3db2-4a3a-ba7a-4c17426e395a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&fm=pjpg&w=1100&h=642&fit=max&frame=1&dpr=2',
    id: 'project1',
  },
  {
    name: 'webrew',
    description:
      'A no-frills brewing timer app, built purely for the love of coffee.',
    link: 'https://webrew.vercel.app/',
    video:
      'https://ph-files.imgix.net/21eb4456-4fa4-4def-955d-babcd5551dff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=929&h=720&fit=max&frame=1&dpr=2',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Bell Energy',
    title: 'Lead Software Architect',
    start: '2021',
    end: 'Present',
    link: 'https://bell-energy.com',
    id: 'work1',
  },
  {
    company: 'Bell Immersive',
    title: 'Design Engineer',
    start: '2021',
    end: 'Present',
    link: 'https://bellimmersive.com',
    id: 'work2',
  },
  {
    company: 'GraphicWeave',
    title: 'Front End Developer',
    start: '2020',
    end: '2021',
    link: 'https://graphicweave.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Now',
    description: 'A brief overview of my current work and projects',
    link: '/blog/now',
    uid: 'blog-3',
  },
  {
    title: 'The endless loop of app development',
    description: 'How a simple app grows legs and arms and becomes a monster',
    link: '/blog/endless-loop',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/junaidanjum',
  },
  {
    label: 'Bluesky',
    link: 'https://bsky.app/profile/junqo.bsky.social',
  },
]

export const EMAIL = 'junaidanjum@live.com'
