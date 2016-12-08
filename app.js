var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'public')))
app.listen(port)

console.log('I love qin ' + port)

app.get('/', function (req, res) {
	res.render('index', {
			title: 'index'
	})
})

app.get('/form-showcase', function (req, res) {
	res.render('form-showcase', {
			title: 'form-showcase'
	})
})

app.get('/examine', function (req, res) {
	res.render('examine', {
			title: 'examine'
	})
})