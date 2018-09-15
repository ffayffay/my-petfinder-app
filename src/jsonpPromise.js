import jsonp from 'jsonp';

export default (url, options) => {
	return new Promise((resolve, reject) => {
		jsonp(url, options
			, (err, res) => {
				if(!err) return resolve(res)
				if(err) return reject(err)
			})
	})
}
