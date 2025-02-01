import Loading from './Loading';

const variantClasses = {
	primary: 'border-primary text-white bg-primary hover:bg-transparent',
	secondary: 'border-secondary text-white bg-secondary hover:bg-transparent',
	outiline: 'border-white hover:text-background hover:bg-white',
};

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	variant?: keyof typeof variantClasses;
	loading?: boolean;
}

export default function Button({
	loading = false,
	variant = 'primary',
	children,
	className,
	...props
}: Readonly<ButtonProps>) {
	return (
		<button
			className={`${variant ? variantClasses[variant] : variantClasses.secondary} border-2 transition duration-300 py-2 px-4 rounded-md  ${className}`}
			{...props}
		>
			{loading ? <Loading size={1} className="w-16" /> : <>{children}</>}
		</button>
	);
}
