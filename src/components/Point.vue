<template>
	
	<transition name="bounce" appear>
		
		<span class="point" @click="removePoint($event.target)"></span>

	</transition>

</template>

<script>
  
export default {

	methods: {

		removePoint(point) {

			/*alert(point.getAttribute('data-point-num'))*/

			var num = point.getAttribute('data-point-num')

			this.$emit('removePoint', num)

		}
	}
}

</script>

<style lang="scss">

.point {

	position: absolute;
	width: 5px;
	height: 5px;
	border-radius: 3px;
	background-color: teal;
	font-size: 12px;

  	-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

	&:hover {

		cursor: pointer;
		background-color: #25b8a2;
	}

}

.closest {

	background-color: #d1000e;

}

</style>