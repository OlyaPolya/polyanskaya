export type BaseProp = {
  [key: string]: string;
}

export type DescriptionProps ={
  description: string[]
}

export type TitleProps = {
  title: string;
}

export type StackProps = {
  stack: BaseProp;
}

export type PageProps = {
  path: string;
  title: string
}

export type ListItemProps = {
  title: string;
  img: string;
  link?: string;
  description?: string;
  badges?: Array<string>;
}

export type SkillsProps = TitleProps & DescriptionProps &  {
  stack: Array<ListItemProps>
}

export type JobsProps =  TitleProps & DescriptionProps

export type ContactsProps = TitleProps & {
  stack: Array<ListItemProps>
}

export type HeaderProps = {
  headerLinks: BaseProp;
  scrollToView: (item: string) => void;
}


export type AppContentProps = {
  pages: Array<PageProps>;
  about : TitleProps ,
  jobs: JobsProps,
  skills: SkillsProps,
  courses: TitleProps,
  contacts: ContactsProps
  portfolio: ContactsProps
}

export type ProjectProps = TitleProps & {
  description?: string,
  link: string,
  img: string
}


export type  ErrorBoundaryProps =  {
  fallback: JSX.Element;
  children: JSX.Element;
}

export type ErrorBoundaryState  = {
  hasError: boolean;
}
