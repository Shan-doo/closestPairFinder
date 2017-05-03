<template>
	
	<transition name="bounce" appear>

		<div id="display">
			
			<p v-text="result"></p>

		</div>

	</transition>

</template>

<script>
	
export default {

	props: {

		result: {

			type: String,

			required: true

		}

	}

}

</script>

<style lang="scss">

#display {

	color: teal;
	font-size: 1.6em;
	border: thin solid teal;
	border-radius: 5px;
	padding: 5px;
	margin-top: 10px;

}
	
</style>