<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@font-face {
	  font-family: "iconfont"; /* Project id 2889287 */
	  src: url('./static/font/iconfont.woff2?t=1635341624299') format('woff2'),
	       url('./static/font/iconfont.woff?t=1635341624299') format('woff'),
	       url('./static/font/iconfont.ttf?t=1635341624299') format('truetype');
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-suoyou:before {
	  content: "\e62c";
	}
	
	.icon-order-completed_fill:before {
	  content: "\e7fb";
	}
	
	.icon-order-incomplete:before {
	  content: "\e7fc";
	}
	
	.icon-shanchu:before {
	  content: "\e74b";
	}
	

</style>
