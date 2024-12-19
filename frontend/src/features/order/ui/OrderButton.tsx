import { Button } from '@/shared/ui/Button';
import { ButtonHTMLAttributes, FC } from 'react';

interface CreateOrderButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onCreate: () => void;
}

export const CreateOrderButton: FC<CreateOrderButtonProps> = ({
  onCreate,
  children,
  ...props
}) => {

  return (
    <Button onClick={onCreate} {...props}>
      {children}
    </Button>
  );
};
