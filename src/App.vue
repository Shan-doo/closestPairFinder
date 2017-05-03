<template>

  <div id="app" class="container-fluid">

    <app-form v-on:pointAdded="addPoint" >
      
    </app-form>

    <app-notification 

		v-show="showNotification" 

		v-bind:notification="notification" 

		@hideNotification="showNotification = false" 

		v-bind:class="{'is-warning' : hasWarning, 'is-success' : !hasWarning}">
      
    </app-notification>

    <app-display v-show="result !== ''" v-bind:result="result"></app-display>

    <app-coordSys v-bind:points="points" @removePoint="removePoint">
      
    </app-coordSys>

  </div>

</template>

<script>

export default {

  data () {

    	return {

          	dist: 0,

          	// max possible distance for starters
          	minDist: Math.sqrt(Math.pow(500, 2) + Math.pow(500, 2)),

          	points: [],

          	result: '',
     
      		notification: '',

      		hasWarning: false,

      		showNotification: false,

      		init: false

    	}

  	},

  	watch: {

  		points: function() {

  			// reset the starting minimal distance
  			this.minDist = Math.sqrt(Math.pow(500, 2) + Math.pow(500, 2))

	        if (this.points.length < 2) {

	          return

	        } else {

		        // go through the points and calculate the distances
		        for (var j = 0; j < this.points.length; j++) {

		          for (var i = j + 1; i < this.points.length; i++) {

		            // if Y coordinates are equal
		            if (this.points[j]['y'] == this.points[i]['y']) {

			            this.dist = Math.abs(this.points[j]['x'] - this.points[i]['x'])
			              
			            if (this.dist < this.minDist) {

			                this.minDist = this.dist

							// reset the 'closest' property on the each point object in the array	
			                this.resetPoints()

			                this.points[j].closest = true
			                this.points[i].closest = true

			            }

		            // if X coordinates are equal
		            } else if (this.points[j]['x'] == this.points[i]['x']) {

			              this.dist = Math.abs(this.points[j]['y'] - this.points[i]['y'])
		              
			              if (this.dist < this.minDist) {

				                this.minDist = this.dist
							
			                	this.resetPoints()

			                	this.points[j].closest = true
			                	this.points[i].closest = true

			              }

		            // if X's and Y's are not equal use the Pythagorean Theorem 
		            } else {

			              	this.dist = Math.sqrt(Math.pow(Math.abs(this.points[j]['x'] - this.points[i]['x']), 2) + Math.pow(Math.abs(this.points[j]['y'] - this.points[i]['y']), 2))
		              
			              	if (this.dist < this.minDist) {

				                this.minDist = this.dist

				                this.resetPoints()

				                this.points[j].closest = true
				                this.points[i].closest = true

				            }

		            	}

		          	}

		        }

		      	this.displayClosestPair()

      		} // else
  			
  		}

  	},

  	computed: {

  		pointNumber() {

  			if (this.points.length < 2) {

  				return this.points.length

  			} else {

	  			//sort the points array 
	  			this.points.sort(function(point1, point2) {

	  				return point1.num - point2.num

	  			})

	  			//find the first available point number
	  			for (var i = 0; i < this.points.length; i++) {

	  				if (this.points[i].num !== i) {

	  					return i

	  				}

	  			}

	  			// if the number are all consequtive get the next one
	  			return this.points.length
	  				  			
	  		}
	
  		}

  	},

  	methods: {

  		addPoint(point) {

  			var newPoint = point

  			for (var i = 0; i < this.points.length; i++) {

  				if (this.points[i].x == newPoint.x && this.points[i].y == newPoint.y ) { 

  					this.displayNotification('A point with those coordinates already exists!', 'warning')
 		
  					return

  				}
  			
  			}
 				
  			newPoint.num = this.pointNumber

  			this.points.push(point)

  			if (!this.init) {

				this.displayNotification('Point added! To remove a point just give it the old clickaroo.', 'success')

				this.init = true

  			}
       	
  			

  		},

  		removePoint(pointNum) {

  			var	len = this.points.length

			for(var i = 0; i < len; i++) {

			    if (this.points[i].num == pointNum) {

			       	this.points.splice(i, 1)

			        break;
			    }

			}

			this.pointNumber--

			if (this.points.length < 2) {

				this.displayNotification('Gotta have at least 2 points to do my thing.', 'info')

			}
						
  		},

  		resetPoints() {

  			for (var i = 0; i < this.points.length; i++) {

  				this.points[i].closest = false
  			}

	  	},

	  	displayClosestPair() {

	  		var closestPair = 'The closest pair are points: '

	      	for (var i = 0; i < this.points.length; i++) {

	      		if (this.points[i].closest == true) {

	      			closestPair += this.points[i].num + ' (x: ' + this.points[i].x + ', y: ' + this.points[i].y + ') '		
	      		}
	      		
	      	}

	        this.result = closestPair

	  	},

	  	displayNotification(notification, type) {

	  			if (type == 'warning') {

		  			this.hasWarning = true

			  	} else {

			  		this.hasWarning = false
			  	}
			  
			  	this.notification = notification

			  	this.showNotification = true

			  	setTimeout(() => {

			  		this.showNotification = false

			  	}, 4000)

	  	}

  	} // data

} // export

</script>

<style lang="scss">

body {

	font-family: 'Orbitron', sans-serif;

}

#app {

	margin: 30px;

}

</style>
