<template>

	<transition name="bounce" appear>

		<div id="notification" class="notification">

		  <button @click="hideNotification" class="delete"></button>

      <i></i>

		  {{ notification }}

		</div>

	</transition>

</template>

<style lang="scss">
	
#notification {

	margin-top: 20px;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

</style>

<script>
	
	export default {

		props: ['notification'],

		methods: {

			hideNotification() {

				this.$emit('hideNotification')

			}

		}

	}

</script>