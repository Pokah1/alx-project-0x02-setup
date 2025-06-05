export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () =>void
    onSubmit:(title:string, content:string) => void
}

export interface Post {
  title: string;
  content: string;
}