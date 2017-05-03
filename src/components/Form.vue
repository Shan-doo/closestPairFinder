<template>
	
		<form @submit.prevent="validateBeforeSubmit">

		<div class="field">

			<label class="label">Enter Coordinate X:</label>

			<p class="control">

				<input v-model.number="x" v-validate="validateNum" :class="{'input': true, 'is-danger': errors.has('CoordinateX') }" type="text" id="inputY" name="CoordinateX">

				<span v-show="errors.has('CoordinateX')" class="help is-danger">{{ errors.first('CoordinateX') }}</span>

			</p>
			
		</div>

		<div class="field">

			<label class="label">Enter Coordinate Y:</label>

			<p class="control">

				<input v-model.number="y" v-validate="validateNum" :class="{'input': true, 'is-danger': errors.has('CoordinateY') }" type="text" id="inputY" name="CoordinateY">

				<span v-show="errors.has('CoordinateY')" class="help is-danger">{{ errors.first('CoordinateY') }}</span>

			</p>

		</div>
		
		<transition name="bounce" appear>

			<div class="field is-grouped">

				<p class="control">
					
					<input class="button" id="addPoint" type="submit" value="Add Point">

				</p>

			</div>

		</transition>

	</form>

</template>

<script type="text/javascript">

export default {

  data () {

	    return {

	    	x: '',

	    	y: '',

	    	validateNum: {

				required: true,
				numeric: true, 
				between: [0,100]
			}

	    }

	},

	methods: {

	   	validateBeforeSubmit() {

	        this.$validator.validateAll().then(() => {

	            var point = { 

	            	x: this.x, 

	            	y: this.y,

	            	closest: false 

	            }	       

	            this.$emit('pointAdded', point)

	        }).catch(() => {

	           
	        });

	    },

	    findPair() {

	    	this.$emit('findClosestPair')

	    }

	}
	
}

</script>

<style lang="scss" scoped>
	
	input[type="submit"], input[type="text"] {

		font-family: 'Orbitron', sans-serif;
	}

</style>