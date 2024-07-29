import type { JSXElement } from "solid-js";

export default function Layout(props: { children?: JSXElement }) {
	return <>{props.children}</>;
}
