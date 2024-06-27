import React from "react";
import Link from "next/link";
import clsx from "clsx";

const GlobalButton = ({
	children,
	className,
	onClick,
	href,
	variant,
	size,
	state = "default",
	...rest
}) => {
	const buttonClass = clsx(
		"rounded-full",
		"focus:outline-none",
		"transition",
		"w-full",
		"duration-300",
		"font-medium",
		"ease-in-out",
		"text-center",
		"flex-shrink-0",
		{
			// Variant styles

			"bg-black-1 text-white-1": variant === "primary" && state === "default",
			"bg-teal-1 text-white-1": variant === "secondary" && state === "default",
			"bg-transparent border border-black-1 text-black-1":
				variant === "stroke" && state === "default",

			// Size styles
			"py-2 px-4": size === "sm",
			"py-3 px-6": size === "md",
			"py-4 px-8": size === "lg",

			// State styles
			"cursor-pointer": state === "default" || state === "hover",
			"cursor-not-allowed btn-primary text-gray-1": state === "inactive",
		},
		className,
		rest.className // Merge additional classes
	);

	if (href) {
		return (
			<Link
				href={href}
				className={buttonClass}
				onClick={state !== "default" ? (e) => e.preventDefault() : undefined}>
				{children}
			</Link>
		);
	} else {
		return (
			<button
				className={buttonClass}
				onClick={onClick}
				disabled={state === "inactive"}
				{...rest}>
				{children}
			</button>
		);
	}
};

export default GlobalButton;
