import { cn } from "../../utils/utils";

const Heading = ({children, tag, className}: {children: React.ReactNode, tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', className: string}) => {

  const Tag = tag || 'h1';

  return (
    <Tag className={cn('lg:text-[47px] md:text-[32px] sm:text-[24px]' ,className)}>{children}</Tag>
  )
}

export { Heading };