import { InputHTMLAttributes } from 'react';

interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	onChange: (e: string) => void;
	value: string | number | readonly string[] | undefined;
	label?: string;
}

export default function Input({
	onChange,
	value,
	required,
	label,
	className,
	...props
}: Readonly<InputProps>) {
	return (
		<div className={`flex flex-col items-start ${className}`}>
			<label className="rubik text-sm" htmlFor={label}>
				{label}
			</label>
			<input
				{...props}
				required={required}
				value={value}
				className="w-full text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
}
