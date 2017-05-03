<template>
		
	<div id="coordSys" class="container-fluid">

		<span id="y"><strong>y</strong></span>

		<span id="x"><strong>x</strong></span>

		<span id="zero"><strong>00</strong></span>

		<app-point

			v-for="point in points" 

			:key="point.num"

			v-bind:style="{ top: 500 - point.y * 5 + 'px', left: point.x * 5 + 'px' }"

			v-bind:class="{ closest : point.closest && points.length > 1 }"

			v-tooltip.top="'point ' + point.num + ' ( x: ' + point.x + ', y: ' + point.y + ')'"

			v-text="'p' + point.num"

			v-bind:data-point-num="point.num"

			@removePoint="removePoint"

		>

		</app-point>

	</div>

</template>

<script>
	
	export default {

		props: {

			points: {

				type: Array,

				required: true
			}

		},

		methods: {

			removePoint(pointNum) {

			this.$emit('removePoint', pointNum)

			}
		}

	}

</script>

<style lang="scss">

#coordSys {

	position: relative;
	width: 500px;
	height: 500px;
	border-width: 1px;
	border-left: thin dotted;
	border-bottom: thin dotted;
	margin-top: 20px;

	#y {

		position: absolute;
		left: -15px;
	}

	#x {

		position: absolute;
		left: 500px;
		top: 500px;
	}

	#zero {

		position: absolute;
		left: -10px;
		top: 503px;
		font-size: 13px;
	}
}

.tooltip {
  display: none;
  opacity: 0;
  transition: opacity .15s;
  pointer-events: none;
  padding: 4px;
  z-index: 10000;

  .tooltip-content {
    background: #d16200;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
    font-size: 0.7em;
  }

  &.tooltip-open-transitionend {
    display: block;
  }

  &.tooltip-after-open {
    opacity: 1;
  }
}

</style>