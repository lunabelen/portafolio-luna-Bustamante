import Button from 'react-bootstrap/Button';

function PortfolioButton({
  children,
  href,
  variant = 'primary',
  type = 'button',
  onClick,
  className = '',
  target,
  rel
}) {
  return (
    <Button
      href={href}
      variant={variant}
      type={type}
      onClick={onClick}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </Button>
  );
}

export default PortfolioButton;
