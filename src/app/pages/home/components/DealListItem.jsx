import React from "react";

export default function DealListItem({ title, content }) {
	return (
		<li>
			✓ {title}: <span>{content}</span>
		</li>
	);
}
