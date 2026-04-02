const variants = {
	primary: 'bg-primary text-white',
	secondary: 'text-primary',
	invert: 'text-primary bg-white',
	textLink: 'text-white bg-transparent',
	ghost: 'bg-transparent text-primary',
};

const sizes = {
	noPadding: 'text-base',
	sm: 'px-4 py-2 text-sm',
	md: 'px-6 py-2 text-base',
	lg: 'px-8 py-3 text-lg',
};

export default function Button({
	children,
	variant = 'primary',
	size = 'md',
	fullWidth = false,
	className = '',
	rigthArrow = false,
	...props
}) {
	const classes = [
		'cursor-pointer font-headline uppercase font-bold transition-colors flex gap-4 items-center justify-center',
		variants[variant],
		sizes[size],
		fullWidth ? 'w-full' : '',
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<button className={classes} {...props}>
			{children}
			{rigthArrow && (
				<span className='material-symbols-outlined'>arrow_right_alt</span>
			)}
		</button>
	);
}
