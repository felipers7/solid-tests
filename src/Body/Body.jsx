import { createSignal } from "solid-js";


function Body(props){
	const [text, setText] = createSignal("Koishiquita");
	return(
		<div 
		class="text-3xl font-bold underline"
		classList={{ "text-pink-300": props.cute }}
		> 
			Hello {text()}
			My waifu is { props.waifu }
		</div>
	);
}

export default Body;
