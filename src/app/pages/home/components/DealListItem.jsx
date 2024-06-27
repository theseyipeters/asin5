import React from "react";

export default function DealListItem({ title, content }) {
	return (
		<li className="flex-shrink-0">
			✓ {title}: <span>{content}</span>
		</li>
	);
}
