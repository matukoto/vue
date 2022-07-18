var items = [
	{
		name: 'pencil',
		price: 300,
		quantity: 0
	}, 
	{
		name: 'note',
		price: 400,
		quantity: 0
	}, 
	{
		name: 'eraser',
		price: 500,
		quantity: 0
	} 
]
var vm = new Vue({
	el: '#app',
	data: {
		items: items
	},
	filters: {
		numberwithDelimiter: function(value) {
			if (!value) {
				return '0'
			}
			return value.toString().replace(/(\d)(?=\d{3})+$)/g, '$1,')
		}
	}, 
	computed: {
		totalPrice: function() {
			return this.items.reduce(function(sum, item) {
				return sum + (item.price * item.quantity)
			}, 0)
		}, 
		totalPriceWithTax: function() {
			return Math.floor(this.totalPrice * 1.1)
		}
	}
})
window.vm = vm
